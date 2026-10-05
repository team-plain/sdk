import type { DocumentTypeDecoration, TypedDocumentNode } from "@graphql-typed-document-node/core";
import packageJson from "@team-plain/graphql/package.json" with { type: "json" };
import { type DocumentNode, print } from "graphql";

import {
  AuthenticationError,
  ForbiddenError,
  NetworkError,
  PlainError,
  PlainGraphQLError,
  RateLimitError,
} from "./error.js";
import { unchangedQueryTextOf } from "./lazy-document.js";
import { numericHeader, type RetryOptions, retryDelayMs } from "./retry.js";

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

/**
 * A GraphQL operation to send: one of the SDK's generated documents, a document from `parse()`,
 * or the query text itself.
 */
export type GraphQLDocument<TData = unknown, TVariables = Record<string, unknown>> =
  | TypedDocumentNode<TData, TVariables>
  | DocumentTypeDecoration<TData, TVariables>
  | string;

export interface PlainGraphQLClientOptions {
  apiKey: string;
  apiUrl?: string;
  retry?: RetryOptions;
}

export class PlainGraphQLClient {
  private apiKey: string;
  private apiUrl: string;
  private maxRetries: number;

  constructor(options: PlainGraphQLClientOptions) {
    this.apiKey = options.apiKey;
    this.apiUrl = options.apiUrl ?? "https://core-api.uk.plain.com/graphql/v1";
    this.maxRetries = options.retry?.maxRetries ?? 0;
  }

  // Defaults so a query string can be typed by its result alone: request<Result>(query, variables).
  async request<
    TData = unknown,
    TVariables extends Record<string, unknown> = Record<string, unknown>,
  >(document: GraphQLDocument<TData, TVariables>, variables?: TVariables): Promise<TData> {
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
    document: GraphQLDocument<TData, TVariables>,
    variables?: TVariables,
  ): Promise<TData> {
    const body = JSON.stringify({
      query: queryText(document),
      variables: variables ?? undefined,
    });

    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
        "User-Agent": `@team-plain/graphql/${packageJson.version}`,
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
        throw new RateLimitError(
          errorDetail ? `Rate limit exceeded: ${errorDetail}` : "Rate limit exceeded",
          numericHeader(response, "retry-after"),
          numericHeader(response, "x-ratelimit-limit"),
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

function queryText(document: GraphQLDocument<unknown, never>): string {
  if (typeof document === "string" || document instanceof String) {
    return document.toString();
  }
  return unchangedQueryTextOf(document) ?? print(document as DocumentNode);
}
