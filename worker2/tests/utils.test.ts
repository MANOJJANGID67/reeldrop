import { isValidInstagramUrl } from '../src/utils';

describe('isValidInstagramUrl', () => {
  it('should allow valid instagram reel urls', () => {
    expect(isValidInstagramUrl('https://www.instagram.com/reel/C123456789/')).toBe(true);
    expect(isValidInstagramUrl('http://instagram.com/p/C123456789/')).toBe(true);
  });

  it('should reject non-instagram urls', () => {
    expect(isValidInstagramUrl('https://www.youtube.com/watch?v=123')).toBe(false);
    expect(isValidInstagramUrl('https://evil.com/reel/123')).toBe(false);
    expect(isValidInstagramUrl('http://169.254.169.254/latest/meta-data/')).toBe(false);
  });

  it('should reject invalid paths on instagram', () => {
    expect(isValidInstagramUrl('https://www.instagram.com/about/')).toBe(false);
    expect(isValidInstagramUrl('https://www.instagram.com/developer/')).toBe(false);
  });
});
