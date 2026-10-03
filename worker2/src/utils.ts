export const isValidInstagramUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) return false;
    if (!parsed.hostname.endsWith('instagram.com')) return false;
    if (!/^\/(reel|p|tv)\//.test(parsed.pathname)) return false;
    return true;
  } catch (e) {
    return false;
  }
};
