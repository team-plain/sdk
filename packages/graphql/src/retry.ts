import type { RateLimitError } from "./error.js";

const RETRY_AFTER_JITTER_MS = 1000;
const BACKOFF_BASE_MS = 500;
const BACKOFF_MAX_MS = 30_000;

export interface RetryOptions {
  // `0` disables retries
  maxRetries: number;
}

export function retryDelayMs(error: RateLimitError, attempt: number): number {
  if (error.retryAfterSeconds !== undefined) {
    return error.retryAfterSeconds * 1000 + Math.random() * RETRY_AFTER_JITTER_MS;
  }
  return Math.random() * Math.min(BACKOFF_BASE_MS * 2 ** attempt, BACKOFF_MAX_MS);
}

export function numericHeader(response: Response, name: string): number | undefined {
  const value = Number(response.headers.get(name) ?? Number.NaN);
  return value >= 0 ? value : undefined;
}
