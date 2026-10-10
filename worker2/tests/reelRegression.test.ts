import { YtDlpProvider } from '../src/provider';

describe('Reel Regression Tests', () => {
  it('should successfully extract reel via Primary Route', async () => {
    const mockExec = jest.fn().mockResolvedValue({
      stdout: JSON.stringify({
        url: 'https://instagram.fccu3-1.fna.fbcdn.net/v/test_reel_stream.mp4'
      })
    });

    const provider = new YtDlpProvider(mockExec, '/fake/ca_bundle.pem');
    const url = await provider.getMediaUrl('https://www.instagram.com/reel/DEn1e46TX8J/');

    expect(url).toBe('https://instagram.fccu3-1.fna.fbcdn.net/v/test_reel_stream.mp4');
    expect(mockExec).toHaveBeenCalledTimes(1);
    expect(mockExec.mock.calls[0][0]).toContain('--source-address');
  });

  it('should fallback to ScraperAPI with strict TLS trust if Primary fails with general error', async () => {
    let call = 0;
    const mockExec = jest.fn().mockImplementation(async (cmd: string) => {
      call++;
      if (call === 1) {
        // Primary fails with connection reset
        const err: any = new Error('Connection reset by peer');
        err.stderr = 'Connection reset by peer';
        throw err;
      }
      // Fallback succeeds
      return {
        stdout: JSON.stringify({
          url: 'https://instagram.fccu3-1.fna.fbcdn.net/v/fallback_reel_stream.mp4'
        })
      };
    });

    const provider = new YtDlpProvider(mockExec, '/fake/ca_bundle.pem');
    const url = await provider.getMediaUrl('https://www.instagram.com/reel/DEn1e46TX8J/');

    expect(url).toBe('https://instagram.fccu3-1.fna.fbcdn.net/v/fallback_reel_stream.mp4');
    expect(call).toBe(2);

    // Verify proxy command was used and did NOT contain --no-check-certificates
    const fallbackCmd = mockExec.mock.calls[1][0];
    expect(fallbackCmd).toContain('--proxy');
    expect(fallbackCmd).not.toContain('--no-check-certificates');
  });
});
