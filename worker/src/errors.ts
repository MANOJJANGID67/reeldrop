export class ExtractionError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number,
    public readonly originalError?: string
  ) {
    super(message);
    this.name = 'ExtractionError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class UnsupportedUrlError extends ExtractionError {
  constructor(msg = 'Unsupported Instagram URL. Please provide a valid Instagram Reel, Post, or Story link.') {
    super(msg, 'UNSUPPORTED_URL', 400);
  }
}

export class AuthenticationRequiredError extends ExtractionError {
  constructor(
    msg = 'Instagram requires viewer authentication to access this Story or Highlight. Unauthenticated anonymous downloads are restricted by Instagram.'
  ) {
    super(msg, 'AUTHENTICATION_REQUIRED', 403);
  }
}

export class MediaNotFoundError extends ExtractionError {
  constructor(msg = 'The requested Instagram media was not found or has expired (Instagram Stories expire after 24 hours).') {
    super(msg, 'MEDIA_NOT_FOUND_OR_EXPIRED', 404);
  }
}

export class RateLimitError extends ExtractionError {
  constructor(
    msg = 'Instagram is temporarily rate-limiting requests. Exponential backoff/cooldown active. Please try again shortly.',
    public readonly retryAfterSeconds = 60
  ) {
    super(msg, 'RATE_LIMITED', 429);
  }
}

export class TlsError extends ExtractionError {
  constructor(msg = 'TLS/SSL certificate validation failed during upstream proxy handshake.', originalErr?: string) {
    super(msg, 'TLS_TRUST_ERROR', 502, originalErr);
  }
}

export class ProviderTimeoutError extends ExtractionError {
  constructor(msg = 'Extraction provider request timed out. Please try again.') {
    super(msg, 'PROVIDER_TIMEOUT', 504);
  }
}

export class ProviderUnavailableError extends ExtractionError {
  constructor(msg = 'Upstream extraction provider is temporarily unavailable.', originalErr?: string) {
    super(msg, 'PROVIDER_UNAVAILABLE', 503, originalErr);
  }
}
