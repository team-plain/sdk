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

export interface PlainGraphQLClientOptions {
  apiKey: string;
  apiUrl?: string;
}

export class PlainGraphQLClient {
  private apiKey: string;
  private apiUrl: string;

  constructor(options: PlainGraphQLClientOptions) {
    this.apiKey = options.apiKey;
    this.apiUrl = options.apiUrl ?? "https://core-api.uk.plain.com/graphql/v1";
  }

  async request<TData, TVariables extends Record<string, unknown>>(
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
        "User-Agent": `plain-typescript-sdk/0.1.0`,
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
