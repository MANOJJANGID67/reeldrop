import fs from 'fs';
import path from 'path';
import https from 'https';

export const SCRAPERAPI_CA_URL = 'https://api.scraperapi.com/proxyca.pem';

export interface CaConfigResult {
  bundlePath: string;
  hasProxyCa: boolean;
}

/**
 * Downloads a remote file over standard HTTPS with strict certificate validation.
 */
export function downloadFile(url: string, destPath: string, timeoutMs: number = 5000): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download CA cert: status ${res.statusCode}`));
      }
      const dir = path.dirname(destPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    });

    req.setTimeout(timeoutMs, () => {
      req.destroy(new Error(`Download timed out after ${timeoutMs}ms`));
    });

    req.on('error', reject);
  });
}

/**
 * Prepares a trusted CA bundle combining system root certificates with
 * ScraperAPI's official Proxy CA.
 */
export async function getTrustedCaBundle(certsDir: string = '/app/certs'): Promise<CaConfigResult> {
  const proxyCaPath = path.join(certsDir, 'proxyca.pem');
  const bundlePath = path.join(certsDir, 'ca_bundle.pem');

  // If bundle already exists and is non-empty, reuse it
  if (fs.existsSync(bundlePath) && fs.statSync(bundlePath).size > 10) {
    return { bundlePath, hasProxyCa: fs.existsSync(proxyCaPath) };
  }

  // Attempt to download proxy CA if not present and not in test mode
  if (!fs.existsSync(proxyCaPath) && process.env.NODE_ENV !== 'test') {
    try {
      await downloadFile(SCRAPERAPI_CA_URL, proxyCaPath, 4000);
    } catch (e: any) {
      console.warn(`[TLSConfig] Notice: Could not download ScraperAPI proxy CA: ${e.message}`);
    }
  }

  // Find system CA bundle
  const systemCaCandidates = [
    '/etc/ssl/certs/ca-certificates.crt',
    '/etc/ssl/cert.pem',
    '/etc/pki/tls/certs/ca-bundle.crt'
  ];

  let systemCa = '';
  for (const candidate of systemCaCandidates) {
    if (fs.existsSync(candidate)) {
      systemCa = fs.readFileSync(candidate, 'utf8');
      break;
    }
  }

  let hasProxyCa = false;
  let combined = systemCa;
  if (fs.existsSync(proxyCaPath)) {
    const proxyCa = fs.readFileSync(proxyCaPath, 'utf8');
    combined = `${systemCa}\n# ScraperAPI Proxy CA\n${proxyCa}`;
    hasProxyCa = true;
  }

  if (!fs.existsSync(certsDir)) {
    fs.mkdirSync(certsDir, { recursive: true });
  }
  fs.writeFileSync(bundlePath, combined || '# Default CA Bundle\n', 'utf8');

  return { bundlePath, hasProxyCa };
}
