import { NetworkError, type PlainError, RateLimitError } from "./error.js";

export interface RetryOptions {
  /**
   * Maximum number of retries after the initial attempt. `0` disables retries.
   */
  maxRetries: number;

  /**
   * Base delay for exponential backoff, in milliseconds. Defaults to 500.
   * The nth retry waits up to `initialDelayMs * 2^(n-1)` (with full jitter),
   * capped at `maxDelayMs`, unless the API sent a `Retry-After` header in
   * which case that is honoured instead.
   */
  initialDelayMs?: number;

  /**
   * Upper bound for a single wait between attempts, in milliseconds.
   * Defaults to 30000.
   */
  maxDelayMs?: number;

  /**
   * Also retry `NetworkError`s (5xx and other unexpected HTTP statuses, or a
   * failed fetch). Off by default: a mutation that hit a 5xx may or may not
   * have been applied. Rate limited (429) requests are always retried since
   * they were never processed.
   */
  retryOnNetworkError?: boolean;
}

export type ResolvedRetryOptions = Required<RetryOptions>;

export const DEFAULT_RETRY_OPTIONS: ResolvedRetryOptions = {
  maxRetries: 0,
  initialDelayMs: 500,
  maxDelayMs: 30_000,
  retryOnNetworkError: false,
};

export function resolveRetryOptions(options: RetryOptions | undefined): ResolvedRetryOptions {
  return { ...DEFAULT_RETRY_OPTIONS, ...options };
}

export function isRetryableError(
  error: unknown,
  options: ResolvedRetryOptions,
): error is PlainError {
  if (error instanceof RateLimitError) {
    return true;
  }
  return options.retryOnNetworkError && error instanceof NetworkError;
}

/**
 * Wait before the given (1-based) retry attempt. Prefers the server's
 * `Retry-After` when present, otherwise exponential backoff with full jitter.
 */
export function retryDelayMs(
  error: PlainError,
  attempt: number,
  options: ResolvedRetryOptions,
): number {
  if (error instanceof RateLimitError && typeof error.retryAfterSeconds === "number") {
    // A little jitter so many clients unblocked by the same window don't all
    // fire at the exact same instant.
    const jitter = Math.random() * 250;
    return Math.min(error.retryAfterSeconds * 1000 + jitter, options.maxDelayMs);
  }
  const exponential = options.initialDelayMs * 2 ** (attempt - 1);
  return Math.random() * Math.min(exponential, options.maxDelayMs);
}

/**
 * Parses a `Retry-After` header, which may be either delay-seconds or an
 * HTTP-date. Returns undefined when absent or unparseable.
 */
export function parseRetryAfterSeconds(header: string | null): number | undefined {
  if (!header) {
    return undefined;
  }
  const trimmed = header.trim();
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    const seconds = Number(trimmed);
    return seconds >= 0 ? seconds : undefined;
  }
  const dateMs = Date.parse(trimmed);
  if (Number.isNaN(dateMs)) {
    return undefined;
  }
  return Math.max(0, Math.ceil((dateMs - Date.now()) / 1000));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
