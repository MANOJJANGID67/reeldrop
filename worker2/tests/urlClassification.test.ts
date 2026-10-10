import { parseInstagramUrl, isValidInstagramUrl, sanitizeLog } from '../src/utils';

describe('Instagram URL Classification & Validation', () => {
  it('should correctly classify public Reels', () => {
    const info = parseInstagramUrl('https://www.instagram.com/reel/DEn1e46TX8J/?igsh=azFzNTRrcXVheGJs');
    expect(info).not.toBeNull();
    expect(info?.type).toBe('REEL');
    expect(info?.id).toBe('DEn1e46TX8J');
    expect(info?.cleanUrl).toBe('https://www.instagram.com/reel/DEn1e46TX8J/');
    expect(isValidInstagramUrl('https://www.instagram.com/reel/DEn1e46TX8J/')).toBe(true);
  });

  it('should correctly classify feed Posts', () => {
    const info = parseInstagramUrl('https://instagram.com/p/C8xyz123abc/');
    expect(info).not.toBeNull();
    expect(info?.type).toBe('POST');
    expect(info?.id).toBe('C8xyz123abc');
    expect(isValidInstagramUrl('https://instagram.com/p/C8xyz123abc/')).toBe(true);
  });

  it('should correctly classify ephemeral Stories', () => {
    const info = parseInstagramUrl(
      'https://www.instagram.com/stories/swapsays_wtf/4004176263425626709?utm_source=ig_story_item_share&vrfl=MXUwY3ZqbWtqaDFkOA=='
    );
    expect(info).not.toBeNull();
    expect(info?.type).toBe('STORY');
    expect(info?.username).toBe('swapsays_wtf');
    expect(info?.id).toBe('4004176263425626709');
    expect(info?.cleanUrl).toBe('https://www.instagram.com/stories/swapsays_wtf/4004176263425626709/');
    expect(isValidInstagramUrl(info!.cleanUrl)).toBe(true);
  });

  it('should correctly classify Highlights', () => {
    const info = parseInstagramUrl('https://www.instagram.com/stories/highlights/17899821288109309/');
    expect(info).not.toBeNull();
    expect(info?.type).toBe('HIGHLIGHT');
    expect(info?.id).toBe('17899821288109309');
    expect(isValidInstagramUrl('https://www.instagram.com/stories/highlights/17899821288109309/')).toBe(true);
  });

  it('should reject invalid or non-Instagram URLs', () => {
    expect(parseInstagramUrl('https://www.youtube.com/watch?v=123')).toBeNull();
    expect(parseInstagramUrl('https://facebook.com/watch/?v=123')).toBeNull();
    expect(isValidInstagramUrl('https://malicious.com/reel/123')).toBe(false);
    expect(isValidInstagramUrl('')).toBe(false);
  });

  it('should sanitize credentials and keys in logs', () => {
    const log1 = 'yt-dlp --proxy "http://scraperapi:cad7ecf7d1f925847946d50cde03d710@proxy-server.scraperapi.com:8001"';
    const sanitized1 = sanitizeLog(log1);
    expect(sanitized1).not.toContain('cad7ecf7d1f925847946d50cde03d710');
    expect(sanitized1).toContain('[REDACTED_API_KEY]');

    const log2 = 'Authorization: Bearer secret_12345_token; sessionid=123456789;';
    const sanitized2 = sanitizeLog(log2);
    expect(sanitized2).not.toContain('secret_12345_token');
    expect(sanitized2).not.toContain('123456789');
  });
});
