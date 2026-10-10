import fs from 'fs';
import path from 'path';
import { getTrustedCaBundle, SCRAPERAPI_CA_URL } from '../src/tlsConfig';
import { YtDlpProvider } from '../src/provider';
import { TlsError } from '../src/errors';
import { parseInstagramUrl } from '../src/utils';

describe('SSL / TLS Trust Verification Tests', () => {
  const testCertsDir = path.join(__dirname, '../temp/test-certs');

  beforeAll(() => {
    if (!fs.existsSync(testCertsDir)) {
      fs.mkdirSync(testCertsDir, { recursive: true });
    }
  });

  afterAll(() => {
    if (fs.existsSync(testCertsDir)) {
      fs.rmSync(testCertsDir, { recursive: true, force: true });
    }
  });

  it('should generate a combined CA bundle without disabling TLS verification', async () => {
    // Provide a dummy proxyca.pem in test directory
    const dummyProxyCa = '-----BEGIN CERTIFICATE-----\nTEST_SCRAPERAPI_CA\n-----END CERTIFICATE-----\n';
    fs.writeFileSync(path.join(testCertsDir, 'proxyca.pem'), dummyProxyCa, 'utf8');

    const result = await getTrustedCaBundle(testCertsDir);
    expect(result.bundlePath).toBe(path.join(testCertsDir, 'ca_bundle.pem'));
    expect(result.hasProxyCa).toBe(true);

    const bundleContent = fs.readFileSync(result.bundlePath, 'utf8');
    expect(bundleContent).toContain('TEST_SCRAPERAPI_CA');
  });

  it('should never contain --no-check-certificates in provider execution commands', async () => {
    const executedCommands: string[] = [];
    const mockExec = jest.fn().mockImplementation(async (cmd: string) => {
      executedCommands.push(cmd);
      return {
        stdout: JSON.stringify({ url: 'https://example.com/video.mp4' })
      };
    });

    const provider = new YtDlpProvider(mockExec, path.join(testCertsDir, 'ca_bundle.pem'));
    await provider.getMediaUrl('https://www.instagram.com/reel/DEn1e46TX8J/');

    for (const cmd of executedCommands) {
      expect(cmd).not.toContain('--no-check-certificates');
      expect(cmd).not.toContain('--insecure');
    }
  });

  it('should classify upstream SSL handshake verification errors into TlsError (502)', () => {
    const provider = new YtDlpProvider();
    const reelInfo = parseInstagramUrl('https://www.instagram.com/reel/DEn1e46TX8J/')!;

    const rawSslErr =
      'ERROR: [Instagram] DEn1e46TX8J: Unable to download webpage: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1010)';

    const err = provider.classifyYtDlpError(rawSslErr, reelInfo);
    expect(err).toBeInstanceOf(TlsError);
    expect(err.statusCode).toBe(502);
    expect(err.code).toBe('TLS_TRUST_ERROR');
  });
});
