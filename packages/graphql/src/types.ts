import type { RetryOptions } from "./retry.js";

export interface PlainClientOptions {
  apiKey: string;
  apiUrl?: string;
  retry?: RetryOptions;
}
