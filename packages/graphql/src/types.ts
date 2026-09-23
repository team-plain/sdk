import type { RetryOptions } from "./graphql-client.js";

export interface PlainClientOptions {
  apiKey: string;
  apiUrl?: string;
  retry?: RetryOptions;
}
