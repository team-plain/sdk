import type { RetryOptions } from "./retry.js";

export interface PlainClientOptions {
  apiKey: string;
  apiUrl?: string;
  /**
   * Automatically retry rate limited (HTTP 429) requests with Retry-After-aware
   * exponential backoff. Disabled unless provided. See `RetryOptions`.
   */
  retry?: RetryOptions;
}
