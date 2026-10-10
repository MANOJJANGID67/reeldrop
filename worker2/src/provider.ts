import { exec } from 'child_process';
import util from 'util';
import fs from 'fs';
import path from 'path';
import { parseInstagramUrl, sanitizeLog, InstagramUrlInfo } from './utils';
import {
  ExtractionError,
  UnsupportedUrlError,
  AuthenticationRequiredError,
  MediaNotFoundError,
  RateLimitError,
  TlsError,
  ProviderTimeoutError,
  ProviderUnavailableError
} from './errors';
import { getTrustedCaBundle } from './tlsConfig';

const execPromise = util.promisify(exec);

export interface MediaProvider {
  getMediaUrl(postUrl: string): Promise<string>;
}

export interface RouteStatus {
  isRateLimited: boolean;
  cooldownUntil: number;
}

export class YtDlpProvider implements MediaProvider {
  private scraperApiKey: string = process.env.SCRAPER_API_KEY || 'cad7ecf7d1f925847946d50cde03d710';
  private primaryCooldownUntil: number = 0;
  private fallbackCooldownUntil: number = 0;
  private caBundlePath: string | null = null;

  constructor(
    private customExec?: (cmd: string, options?: any) => Promise<{ stdout: string; stderr?: string }>,
    customCaBundlePath?: string
  ) {
    if (customCaBundlePath) {
      this.caBundlePath = customCaBundlePath;
    }
  }

  private get executor() {
    return this.customExec || execPromise;
  }

  public getPrimaryCooldown(): number {
    return this.primaryCooldownUntil;
  }

  public getFallbackCooldown(): number {
    return this.fallbackCooldownUntil;
  }

  public setPrimaryCooldown(ms: number): void {
    this.primaryCooldownUntil = Date.now() + ms;
  }

  private getIpv6Pool(): string[] {
    const poolPath = process.env.IPV6_POOL_PATH || '/app/ipv6_pool.txt';
    if (fs.existsSync(poolPath)) {
      const lines = fs.readFileSync(poolPath, 'utf8')
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0 && l.startsWith('2603:'));
      if (lines.length > 0) return lines;
    }
    return ['2603:c021:4002:937e:0:67fa:8c45:4f1a'];
  }

  private getRandomIpv6(): string {
    const pool = this.getIpv6Pool();
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  }

  public async getCaBundlePath(): Promise<string> {
    if (this.caBundlePath && fs.existsSync(this.caBundlePath)) {
      return this.caBundlePath;
    }
    const certsDir = process.env.CERTS_DIR || '/app/certs';
    const { bundlePath } = await getTrustedCaBundle(certsDir);
    this.caBundlePath = bundlePath;
    return bundlePath;
  }

  /**
   * Parses stderr / stdout error messages from yt-dlp into typed domain errors.
   */
  public classifyYtDlpError(errText: string, urlInfo: InstagramUrlInfo): ExtractionError {
    const text = errText || '';

    // 1. HTTP 429 - Rate limit
    if (/HTTP\s+Error\s+429|Too\s+Many\s+Requests/i.test(text)) {
      if (urlInfo.type === 'STORY' || urlInfo.type === 'HIGHLIGHT') {
        // Instagram returns 429 or login wall to unauthenticated requests for stories
        return new AuthenticationRequiredError(
          'Instagram requires viewer authentication to access this Story. Unauthenticated downloads are restricted by Instagram.'
        );
      }
      return new RateLimitError();
    }

    // 2. TLS verification failure
    if (/SSL:\s*CERTIFICATE_VERIFY_FAILED|certificate\s+verify\s+failed|unable\s+to\s+get\s+local\s+issuer/i.test(text)) {
      return new TlsError('TLS certificate validation failed during proxy communication', sanitizeLog(text));
    }

    // 3. Authentication required / login wall
    if (
      /empty\s+media\s+response|Check\s+if\s+this\s+post\s+is\s+accessible.*logged-in|--cookies|login_required|Please\s+log\s+in|HTTP\s+Error\s+401|HTTP\s+Error\s+403/i.test(text)
    ) {
      if (urlInfo.type === 'STORY' || urlInfo.type === 'HIGHLIGHT') {
        return new AuthenticationRequiredError(
          'Instagram requires viewer authentication to view this Story. Unauthenticated downloads are not permitted.'
        );
      }
      return new AuthenticationRequiredError('This Instagram post is private or requires authentication to access.');
    }

    // 4. Media expired or not found (404)
    if (/HTTP\s+Error\s+404|no\s+longer\s+available|Video\s+unavailable|Post\s+not\s+found/i.test(text)) {
      return new MediaNotFoundError();
    }

    // 5. Timeouts
    if (/timed?\s*out|ETIMEDOUT|ESOCKETTIMEDOUT/i.test(text)) {
      return new ProviderTimeoutError();
    }

    return new ProviderUnavailableError('Extraction service error', sanitizeLog(text));
  }

  async getMediaUrl(rawUrl: string): Promise<string> {
    const urlInfo = parseInstagramUrl(rawUrl);
    if (!urlInfo || urlInfo.type === 'UNKNOWN') {
      throw new UnsupportedUrlError();
    }

    const postUrl = urlInfo.cleanUrl;

    // Stories and Highlights require authentication by platform design
    // Check if unauthenticated requests are expected to fail for Stories
    if (urlInfo.type === 'STORY' || urlInfo.type === 'HIGHLIGHT') {
      console.log(`[YtDlpProvider] Processing Story/Highlight request: ${sanitizeLog(postUrl)}`);
    }

    let lastError: ExtractionError | null = null;

    // -------------------------------------------------------------
    // Route 1: Free Rotating IPv6 from VPS pool (for public Reels)
    // -------------------------------------------------------------
    const now = Date.now();
    const canAttemptPrimary = now >= this.primaryCooldownUntil;

    if (canAttemptPrimary) {
      const selectedIp = this.getRandomIpv6();
      console.log(`[YtDlpProvider] Primary Attempt: Rotated to IPv6 ${selectedIp} for: ${sanitizeLog(postUrl)}`);

      try {
        const command = `yt-dlp --source-address "${selectedIp}" --force-ipv6 --no-warnings -f b --dump-json "${postUrl}"`;
        const { stdout } = await this.executor(command, { timeout: 25000 });
        const data = JSON.parse(stdout);

        if (data.url) {
          console.log(`[YtDlpProvider] Primary Success! URL extracted using IPv6: ${selectedIp}`);
          return data.url;
        }
      } catch (primaryErr: any) {
        const errMessage = primaryErr.stderr || primaryErr.message || '';
        console.warn(`[YtDlpProvider] Primary IPv6 attempt failed: ${sanitizeLog(errMessage)}`);
        
        const classified = this.classifyYtDlpError(errMessage, urlInfo);
        lastError = classified;

        // If rate limited, trigger exponential cooldown instead of evading via rotation
        if (classified instanceof RateLimitError) {
          console.warn('[YtDlpProvider] Primary route hit HTTP 429. Setting 60s cooldown.');
          this.primaryCooldownUntil = Date.now() + 60000;
          throw classified;
        }

        // If story authentication is required, fail fast
        if (classified instanceof AuthenticationRequiredError && (urlInfo.type === 'STORY' || urlInfo.type === 'HIGHLIGHT')) {
          console.warn('[YtDlpProvider] Instagram Story requires viewer credentials. Skipping proxy hammering.');
          throw classified;
        }
      }
    } else {
      console.warn(`[YtDlpProvider] Primary route in rate-limit cooldown until ${new Date(this.primaryCooldownUntil).toISOString()}`);
    }

    // -------------------------------------------------------------
    // Route 2: Fallback via ScraperAPI Residential Proxy with TLS Trust
    // -------------------------------------------------------------
    const canAttemptFallback = Date.now() >= this.fallbackCooldownUntil;
    if (!canAttemptFallback) {
      console.warn(`[YtDlpProvider] Fallback route in rate-limit cooldown until ${new Date(this.fallbackCooldownUntil).toISOString()}`);
      if (lastError) throw lastError;
      throw new RateLimitError();
    }

    try {
      console.log(`[YtDlpProvider] Fallback Attempt: Using ScraperAPI Proxy for: ${sanitizeLog(postUrl)}`);
      
      const caBundle = await this.getCaBundlePath();
      const proxyUrl = `http://scraperapi:${this.scraperApiKey}@proxy-server.scraperapi.com:8001`;
      
      // Strict TLS verification: pass SSL_CERT_FILE containing system CA + ScraperAPI Proxy CA
      const proxyCommand = `yt-dlp --proxy "${proxyUrl}" --no-warnings -f b --dump-json "${postUrl}"`;
      
      const env = {
        ...process.env,
        SSL_CERT_FILE: caBundle
      };

      const { stdout } = await this.executor(proxyCommand, { timeout: 35000, env });
      const data = JSON.parse(stdout);

      if (data.url) {
        console.log('[YtDlpProvider] Fallback Success! URL extracted via ScraperAPI proxy.');
        return data.url;
      }
      throw new ProviderUnavailableError('No direct stream URL returned from proxy fallback');
    } catch (fallbackErr: any) {
      const errMessage = fallbackErr.stderr || fallbackErr.message || '';
      console.error(`[YtDlpProvider] ScraperAPI Proxy Error: ${sanitizeLog(errMessage)}`);

      const classified = this.classifyYtDlpError(errMessage, urlInfo);
      
      if (classified instanceof RateLimitError) {
        this.fallbackCooldownUntil = Date.now() + 60000;
      }

      throw classified;
    }
  }
}

export const provider = new YtDlpProvider();
