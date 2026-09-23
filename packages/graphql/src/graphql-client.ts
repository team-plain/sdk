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

export interface RetryOptions {
  // `0` distables retries
  maxRetries: number;
}

export interface PlainGraphQLClientOptions {
  apiKey: string;
  apiUrl?: string;
  retry?: RetryOptions;
}

const RETRY_AFTER_JITTER_MS = 1000;
const BACKOFF_BASE_MS = 500;
const BACKOFF_MAX_MS = 30_000;

export class PlainGraphQLClient {
  private apiKey: string;
  private apiUrl: string;
  private maxRetries: number;

  constructor(options: PlainGraphQLClientOptions) {
    this.apiKey = options.apiKey;
    this.apiUrl = options.apiUrl ?? "https://core-api.uk.plain.com/graphql/v1";
    this.maxRetries = options.retry?.maxRetries ?? 0;
  }

  async request<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    variables?: TVariables,
  ): Promise<TData> {
    for (let attempt = 0; ; attempt++) {
      try {
        return await this.requestOnce(document, variables);
      } catch (error) {
        if (!(error instanceof RateLimitError) || attempt >= this.maxRetries) {
          throw error;
        }
        await new Promise((resolve) => setTimeout(resolve, retryDelayMs(error, attempt)));
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

    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
        "User-Agent": `@team-plain/graphql`,
      },
      body,
    });

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
        const retryAfterSeconds = Number(response.headers.get("retry-after") ?? Number.NaN);
        throw new RateLimitError(
          errorDetail ? `Rate limit exceeded: ${errorDetail}` : "Rate limit exceeded",
          retryAfterSeconds >= 0 ? retryAfterSeconds : undefined,
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

function retryDelayMs(error: RateLimitError, attempt: number): number {
  if (error.retryAfterSeconds !== undefined) {
    return error.retryAfterSeconds * 1000 + Math.random() * RETRY_AFTER_JITTER_MS;
  }
  return Math.random() * Math.min(BACKOFF_BASE_MS * 2 ** attempt, BACKOFF_MAX_MS);
}
