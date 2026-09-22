import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";

import {
  AuthenticationError,
  ForbiddenError,
  NetworkError,
  PlainError,
  PlainGraphQLError,
  RateLimitError,
} from "./error.js";
import {
  isRetryableError,
  parseRetryAfterSeconds,
  type ResolvedRetryOptions,
  type RetryOptions,
  resolveRetryOptions,
  retryDelayMs,
  sleep,
} from "./retry.js";

export interface GraphQLResponse<TData> {
  data?: TData;
  errors?: Array<{
    message: string;
    extensions?: {
      code?: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  }>;
}

export interface PlainGraphQLClientOptions {
  apiKey: string;
  apiUrl?: string;
  /**
   * Automatically retry requests that were rate limited (HTTP 429), honouring
   * the API's `Retry-After` header and otherwise backing off exponentially.
   * Retries are disabled unless this is provided.
   */
  retry?: RetryOptions;
}

export class PlainGraphQLClient {
  private apiKey: string;
  private apiUrl: string;
  private retry: ResolvedRetryOptions;

  constructor(options: PlainGraphQLClientOptions) {
    this.apiKey = options.apiKey;
    this.apiUrl = options.apiUrl ?? "https://core-api.uk.plain.com/graphql/v1";
    this.retry = resolveRetryOptions(options.retry);
  }

  async request<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    variables?: TVariables,
  ): Promise<TData> {
    for (let attempt = 0; ; attempt++) {
      try {
        return await this.requestOnce(document, variables);
      } catch (error) {
        if (attempt >= this.retry.maxRetries || !isRetryableError(error, this.retry)) {
          throw error;
        }
        await sleep(retryDelayMs(error, attempt + 1, this.retry));
      }
    }
  }

  private async requestOnce<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    variables?: TVariables,
  ): Promise<TData> {
    const body = JSON.stringify({
      query: print(document),
      variables: variables ?? undefined,
    });

    let response: Response;
    try {
      response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
          "User-Agent": `@team-plain/graphql`,
        },
        body,
      });
    } catch (cause) {
      // fetch rejects with a bare TypeError (DNS, connection reset, aborted
      // signal…). Surface it as a NetworkError so callers get the typed
      // exception the README promises and `retryOnNetworkError` can act on it.
      const detail = cause instanceof Error ? cause.message : String(cause);
      throw new NetworkError(`Network request failed: ${detail}`, { cause });
    }

    if (!response.ok) {
      const errorDetail = await this.extractErrorMessage(response);

      if (response.status === 401) {
        throw new AuthenticationError(
          errorDetail ? `Authentication error: ${errorDetail}` : "Authentication error",
        );
      }
      if (response.status === 403) {
        throw new ForbiddenError(
          errorDetail ? `Insufficient permissions: ${errorDetail}` : "Insufficient permissions",
        );
      }
      if (response.status === 429) {
        throw new RateLimitError(
          errorDetail ? `Rate limit exceeded: ${errorDetail}` : "Rate limit exceeded",
          parseRetryAfterSeconds(response.headers.get("retry-after")),
        );
      }
      throw new NetworkError(
        errorDetail
          ? `HTTP ${response.status}: ${response.statusText}: ${errorDetail}`
          : `HTTP ${response.status}: ${response.statusText}`,
      );
    }

    const json = (await response.json()) as GraphQLResponse<TData>;

    if (json.errors && json.errors.length > 0) {
      throw new PlainGraphQLError(json.errors);
    }

    if (!json.data) {
      throw new PlainError("No data in response");
    }

    return json.data;
  }

  private async extractErrorMessage(response: Response): Promise<string | undefined> {
    try {
      const json = (await response.json()) as GraphQLResponse<unknown>;
      if (json.errors && json.errors.length > 0) {
        return json.errors.map((e) => e.message).join("; ");
      }
    } catch {
      // Response body wasn't valid JSON — fall back to default message
    }
    return undefined;
  }
}
