export type InstagramUrlType = 'REEL' | 'POST' | 'STORY' | 'HIGHLIGHT' | 'UNKNOWN';

export interface InstagramUrlInfo {
  type: InstagramUrlType;
  id?: string;
  username?: string;
  cleanUrl: string;
}

/**
 * Parses and classifies an Instagram URL.
 * Recognizes Reels, Posts, Stories, and Highlights.
 */
export function parseInstagramUrl(rawUrl: string): InstagramUrlInfo | null {
  if (!rawUrl || typeof rawUrl !== 'string') return null;

  try {
    const parsed = new URL(rawUrl.trim());
    if (!['http:', 'https:'].includes(parsed.protocol)) return null;

    const host = parsed.hostname.toLowerCase();
    if (!host.endsWith('instagram.com') && host !== 'instagram.com') return null;

    const pathname = parsed.pathname;

    // Highlights: /stories/highlights/{id}/
    const highlightMatch = pathname.match(/^\/stories\/highlights\/([0-9]+)/i);
    if (highlightMatch) {
      return {
        type: 'HIGHLIGHT',
        id: highlightMatch[1],
        cleanUrl: `https://www.instagram.com/stories/highlights/${highlightMatch[1]}/`
      };
    }

    // Story item: /stories/{username}/{story_id}/
    const storyItemMatch = pathname.match(/^\/stories\/([a-zA-Z0-9._]+)\/([0-9]+)/i);
    if (storyItemMatch) {
      return {
        type: 'STORY',
        username: storyItemMatch[1],
        id: storyItemMatch[2],
        cleanUrl: `https://www.instagram.com/stories/${storyItemMatch[1]}/${storyItemMatch[2]}/`
      };
    }

    // General user story feed: /stories/{username}/
    const userStoryMatch = pathname.match(/^\/stories\/([a-zA-Z0-9._]+)\/?$/i);
    if (userStoryMatch) {
      return {
        type: 'STORY',
        username: userStoryMatch[1],
        cleanUrl: `https://www.instagram.com/stories/${userStoryMatch[1]}/`
      };
    }

    // Reels: /reel/{id}/ or /reels/{id}/
    const reelMatch = pathname.match(/^\/reels?\/([a-zA-Z0-9_-]+)/i);
    if (reelMatch) {
      return {
        type: 'REEL',
        id: reelMatch[1],
        cleanUrl: `https://www.instagram.com/reel/${reelMatch[1]}/`
      };
    }

    // Posts & IGTV: /p/{id}/ or /tv/{id}/
    const postMatch = pathname.match(/^\/(?:p|tv)\/([a-zA-Z0-9_-]+)/i);
    if (postMatch) {
      return {
        type: 'POST',
        id: postMatch[1],
        cleanUrl: `https://www.instagram.com/p/${postMatch[1]}/`
      };
    }

    return {
      type: 'UNKNOWN',
      cleanUrl: `${parsed.origin}${parsed.pathname}`
    };
  } catch {
    return null;
  }
}

export function isValidInstagramUrl(url: string): boolean {
  const info = parseInstagramUrl(url);
  return info !== null && info.type !== 'UNKNOWN';
}

/**
 * Sanitizes command strings or logs so secrets and credentials are not leaked.
 */
export function sanitizeLog(text: string): string {
  if (!text) return text;
  return text
    .replace(/scraperapi:[a-f0-9]{32}/gi, 'scraperapi:[REDACTED_API_KEY]')
    .replace(/Bearer\s+[a-zA-Z0-9_-]+/gi, 'Bearer [REDACTED_TOKEN]')
    .replace(/sessionid=[^;]+(;|$)/gi, 'sessionid=[REDACTED];');
}
