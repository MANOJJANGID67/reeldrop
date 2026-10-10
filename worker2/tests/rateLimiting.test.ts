import { YtDlpProvider } from '../src/provider';
import { RateLimitError, AuthenticationRequiredError } from '../src/errors';

describe('HTTP 429 Handling and Cooldown', () => {
  it('should trigger RateLimitError and set cooldown without evading restrictions', async () => {
    let callCount = 0;
    const mockExec = jest.fn().mockImplementation(async () => {
      callCount++;
      const error: any = new Error('Command failed');
      error.stderr = 'ERROR: Unable to download webpage: HTTP Error 429: Too Many Requests';
      throw error;
    });

    const provider = new YtDlpProvider(mockExec, '/fake/ca_bundle.pem');

    await expect(provider.getMediaUrl('https://www.instagram.com/reel/DEn1e46TX8J/')).rejects.toThrow(RateLimitError);

    // Verify cooldown is active
    expect(provider.getPrimaryCooldown()).toBeGreaterThan(Date.now());
    expect(callCount).toBe(1);

    // Second call while in cooldown should skip Primary route
    await expect(provider.getMediaUrl('https://www.instagram.com/reel/DEn1e46TX8J/')).rejects.toThrow();

    // The primary route was NOT invoked again during cooldown (no evasion/hammering)
    // Only the fallback was called on the second attempt
    expect(callCount).toBe(2);
  });

  it('should immediately fail with AuthenticationRequiredError for Stories without proxy spamming', async () => {
    let callCount = 0;
    const mockExec = jest.fn().mockImplementation(async () => {
      callCount++;
      const error: any = new Error('Command failed');
      error.stderr = 'ERROR: [instagram:story] 4004176263425626709: Unable to download webpage: HTTP Error 429: Too Many Requests';
      throw error;
    });

    const provider = new YtDlpProvider(mockExec, '/fake/ca_bundle.pem');

    await expect(
      provider.getMediaUrl('https://www.instagram.com/stories/username/4004176263425626709/')
    ).rejects.toThrow(AuthenticationRequiredError);

    // Did not retry/spam proxy because story authentication is missing
    expect(callCount).toBe(1);
  });
});
