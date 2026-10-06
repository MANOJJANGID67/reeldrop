import { exec } from 'child_process';
import util from 'util';
import fs from 'fs';

const execPromise = util.promisify(exec);

export interface MediaProvider {
  getMediaUrl(postUrl: string): Promise<string>;
}

export class YtDlpProvider implements MediaProvider {
  private scraperApiKey: string = 'cad7ecf7d1f925847946d50cde03d710';

  private getIpv6Pool(): string[] {
    const poolPath = '/app/ipv6_pool.txt';
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

  async getMediaUrl(postUrl: string): Promise<string> {
    const selectedIp = this.getRandomIpv6();
    console.log(`[YtDlpProvider] Primary Attempt: Rotated to IPv6 ${selectedIp} for: ${postUrl}`);

    // 1. PRIMARY: Try free rotating IPv6 from our 25-IP pool
    try {
      const command = `yt-dlp --source-address "${selectedIp}" --force-ipv6 --no-warnings -f b --dump-json "${postUrl}"`;
      const { stdout } = await execPromise(command, { timeout: 25000 });
      const data = JSON.parse(stdout);

      if (data.url) {
        console.log(`[YtDlpProvider] Primary Success! URL extracted using IPv6: ${selectedIp}`);
        return data.url;
      }
    } catch (primaryError: any) {
      console.warn(`[YtDlpProvider] Primary IPv6 attempt failed (${primaryError.message}). Triggering ScraperAPI Proxy Fallback...`);
    }

    // 2. FALLBACK: ScraperAPI Residential Proxy for 100% guarantee
    try {
      console.log(`[YtDlpProvider] Fallback Attempt: Using ScraperAPI Proxy for: ${postUrl}`);
      const proxyUrl = `http://scraperapi:${this.scraperApiKey}@proxy-server.scraperapi.com:8001`;
      const proxyCommand = `yt-dlp --proxy "${proxyUrl}" --no-warnings -f b --dump-json "${postUrl}"`;
      
      const { stdout } = await execPromise(proxyCommand, { timeout: 35000 });
      const data = JSON.parse(stdout);

      if (data.url) {
        console.log('[YtDlpProvider] Fallback Success! URL extracted via ScraperAPI proxy.');
        return data.url;
      }
      throw new Error('No direct stream URL returned from proxy fallback');
    } catch (proxyError: any) {
      console.error('[YtDlpProvider] ScraperAPI Proxy Error:', proxyError.message);
      throw new Error('Failed to fetch media using all available routes');
    }
  }
}

export const provider = new YtDlpProvider();
