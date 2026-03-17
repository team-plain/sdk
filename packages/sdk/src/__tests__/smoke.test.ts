import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import {
  PlainClient,
  PlainGraphQLClient,
  PlainSdk,
  PlainConnection,
  PlainError,
  AuthenticationError,
  ForbiddenError,
  NetworkError,
  RateLimitError,
  InternalError,
  PlainGraphQLError,
} from "../index.js";

describe("Exports", () => {
  it("exports all public classes", () => {
    expect(PlainClient).toBeDefined();
    expect(PlainGraphQLClient).toBeDefined();
    expect(PlainSdk).toBeDefined();
    expect(PlainConnection).toBeDefined();
  });

  it("exports all error classes", () => {
    expect(PlainError).toBeDefined();
    expect(AuthenticationError).toBeDefined();
    expect(ForbiddenError).toBeDefined();
    expect(NetworkError).toBeDefined();
    expect(RateLimitError).toBeDefined();
    expect(InternalError).toBeDefined();
    expect(PlainGraphQLError).toBeDefined();
  });
});

describe("Instantiation", () => {
  it("creates a PlainClient with an API key", () => {
    const client = new PlainClient({ apiKey: "test" });
    expect(client).toBeInstanceOf(PlainClient);
    expect(client).toBeInstanceOf(PlainSdk);
  });

  it("accepts a custom apiUrl", () => {
    const client = new PlainClient({ apiKey: "test", apiUrl: "https://custom.api/graphql" });
    expect(client).toBeInstanceOf(PlainClient);
  });
});

describe("Error classes", () => {
  it("PlainError extends Error", () => {
    const err = new PlainError("test");
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(PlainError);
    expect(err.message).toBe("test");
    expect(err.name).toBe("PlainError");
  });

  it("subclasses extend PlainError", () => {
    expect(new AuthenticationError("x")).toBeInstanceOf(PlainError);
    expect(new ForbiddenError("x")).toBeInstanceOf(PlainError);
    expect(new NetworkError("x")).toBeInstanceOf(PlainError);
    expect(new RateLimitError("x")).toBeInstanceOf(PlainError);
    expect(new InternalError("x")).toBeInstanceOf(PlainError);
  });

  it("PlainGraphQLError joins error messages", () => {
    const err = new PlainGraphQLError([{ message: "first error" }, { message: "second error" }]);
    expect(err.message).toBe("first error; second error");
    expect(err.errors).toHaveLength(2);
    expect(err).toBeInstanceOf(PlainError);
  });
});

describe("HTTP error handling", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  // Minimal stub that satisfies TypedDocumentNode without `any`
  const doc = { kind: "Document" as const, definitions: [] } as TypedDocumentNode<
    Record<string, unknown>,
    Record<string, never>
  >;

  function mockFetchResponse(status: number, body: unknown) {
    vi.mocked(globalThis.fetch).mockResolvedValue(
      new Response(JSON.stringify(body), {
        status,
        statusText: status === 200 ? "OK" : "Error",
        headers: { "Content-Type": "application/json" },
      }),
    );
  }

  it("throws AuthenticationError on 401", async () => {
    mockFetchResponse(401, {});
    const client = new PlainGraphQLClient({ apiKey: "bad" });
    await expect(client.request(doc)).rejects.toThrow(AuthenticationError);
  });

  it("throws ForbiddenError on 403", async () => {
    mockFetchResponse(403, {});
    const client = new PlainGraphQLClient({ apiKey: "test" });
    await expect(client.request(doc)).rejects.toThrow(ForbiddenError);
  });

  it("throws RateLimitError on 429", async () => {
    mockFetchResponse(429, {});
    const client = new PlainGraphQLClient({ apiKey: "test" });
    await expect(client.request(doc)).rejects.toThrow(RateLimitError);
  });

  it("throws PlainGraphQLError on GraphQL errors", async () => {
    mockFetchResponse(200, { errors: [{ message: "Something went wrong" }] });
    const client = new PlainGraphQLClient({ apiKey: "test" });
    await expect(client.request(doc)).rejects.toThrow(PlainGraphQLError);
  });

  it("returns data on success", async () => {
    mockFetchResponse(200, { data: { viewer: { id: "123" } } });
    const client = new PlainGraphQLClient({ apiKey: "test" });
    const result = await client.request(doc);
    expect(result).toEqual({ viewer: { id: "123" } });
  });
});

describe("PlainConnection", () => {
  it("exposes nodes and pagination info", () => {
    const conn = new PlainConnection({
      nodes: [{ id: "1" }, { id: "2" }],
      pageInfo: {
        hasNextPage: true,
        hasPreviousPage: false,
        startCursor: "c1",
        endCursor: "c2",
      },
      totalCount: 10,
      fetch: async () => conn,
    });

    expect(conn.nodes).toHaveLength(2);
    expect(conn.hasNextPage).toBe(true);
    expect(conn.hasPreviousPage).toBe(false);
    expect(conn.totalCount).toBe(10);
  });
});
