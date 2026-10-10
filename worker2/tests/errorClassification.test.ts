import { YtDlpProvider } from '../src/provider';
import { parseInstagramUrl } from '../src/utils';
import {
  RateLimitError,
  TlsError,
  AuthenticationRequiredError,
  MediaNotFoundError,
  ProviderTimeoutError
} from '../src/errors';

describe('Error Classification', () => {
  const provider = new YtDlpProvider();
  const reelInfo = parseInstagramUrl('https://www.instagram.com/reel/DEn1e46TX8J/')!;
  const storyInfo = parseInstagramUrl('https://www.instagram.com/stories/username/4004176263425626709/')!;

  it('should classify HTTP 429 on Reels as RateLimitError', () => {
    const err = provider.classifyYtDlpError('ERROR: Unable to download webpage: HTTP Error 429: Too Many Requests', reelInfo);
    expect(err).toBeInstanceOf(RateLimitError);
    expect(err.statusCode).toBe(429);
  });

  it('should classify HTTP 429 on Stories as AuthenticationRequiredError', () => {
    const err = provider.classifyYtDlpError('ERROR: Unable to download webpage: HTTP Error 429: Too Many Requests', storyInfo);
    expect(err).toBeInstanceOf(AuthenticationRequiredError);
    expect(err.statusCode).toBe(403);
    expect(err.message).toContain('Instagram requires viewer authentication');
  });

  it('should classify SSL certificate failures as TlsError', () => {
    const err = provider.classifyYtDlpError(
      'ERROR: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1010)',
      reelInfo
    );
    expect(err).toBeInstanceOf(TlsError);
    expect(err.statusCode).toBe(502);
  });

  it('should classify login wall / empty media response as AuthenticationRequiredError', () => {
    const err = provider.classifyYtDlpError(
      'ERROR: Instagram sent an empty media response. Check if this post is accessible in your browser without being logged-in.',
      reelInfo
    );
    expect(err).toBeInstanceOf(AuthenticationRequiredError);
    expect(err.statusCode).toBe(403);
  });

  it('should classify HTTP 404 / expired as MediaNotFoundError', () => {
    const err = provider.classifyYtDlpError('ERROR: Unable to download webpage: HTTP Error 404: Not Found', storyInfo);
    expect(err).toBeInstanceOf(MediaNotFoundError);
    expect(err.statusCode).toBe(404);
  });

  it('should classify timeouts as ProviderTimeoutError', () => {
    const err = provider.classifyYtDlpError('Command failed: timed out after 35000ms', reelInfo);
    expect(err).toBeInstanceOf(ProviderTimeoutError);
    expect(err.statusCode).toBe(504);
  });
});
