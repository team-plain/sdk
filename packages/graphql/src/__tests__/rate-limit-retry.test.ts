import { afterEach, describe, expect, it, vi } from "vitest";
import { PlainClient } from "../client.js";
import { AuthenticationError, NetworkError, RateLimitError } from "../error.js";
import { parseRetryAfterSeconds } from "../retry.js";
import { errorResponse, graphqlResponse, mockFetch } from "./helpers.js";

const customer = {
  id: "c_1",
  externalId: null,
  fullName: "Grace Hopper",
  shortName: "Grace",
  email: { email: "grace@example.com", isVerified: true, verifiedAt: null },
  avatarUrl: null,
  assignedToUser: null,
  isAnonymous: false,
  status: "ACTIVE",
  assignedAt: null,
  company: null,
  createdAt: { unixTimestamp: "1700000000", iso8601: "2023-11-14T22:13:20Z" },
  createdBy: { __typename: "UserActor", userId: "u_1", user: { id: "u_1" } },
  updatedAt: { unixTimestamp: "1700000001", iso8601: "2023-11-14T22:13:21Z" },
  updatedBy: { __typename: "UserActor", userId: "u_1", user: { id: "u_1" } },
  markedAsSpamAt: null,
  markedAsSpamBy: null,
  statusChangedAt: null,
  lastIdleAt: null,
  identities: [],
};

function rateLimited(headers: Record<string, string> = {}): Response {
  return new Response("Too Many Requests", {
    status: 429,
    statusText: "Too Many Requests",
    headers,
  });
}

describe("rate limit retries", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("exposes Retry-After on RateLimitError", async () => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(rateLimited({ "retry-after": "7" }));
    const client = new PlainClient({ apiKey: "k" });

    const error = await client.query.customer({ customerId: "c_1" }).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(RateLimitError);
    expect((error as RateLimitError).retryAfterSeconds).toBe(7);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("does not retry unless configured", async () => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValue(rateLimited());
    const client = new PlainClient({ apiKey: "k" });

    await expect(client.query.customer({ customerId: "c_1" })).rejects.toThrow(RateLimitError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("retries a rate limited request and returns the eventual success", async () => {
    const fetchMock = mockFetch();
    fetchMock
      .mockResolvedValueOnce(rateLimited({ "retry-after": "0" }))
      .mockResolvedValueOnce(rateLimited())
      .mockResolvedValueOnce(graphqlResponse({ customer }));
    const client = new PlainClient({
      apiKey: "k",
      retry: { maxRetries: 3, initialDelayMs: 1, maxDelayMs: 5 },
    });

    const result = await client.query.customer({ customerId: "c_1" });
    expect(result?.id).toBe("c_1");
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it("gives up after maxRetries and rethrows the last RateLimitError", async () => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValue(rateLimited());
    const client = new PlainClient({
      apiKey: "k",
      retry: { maxRetries: 2, initialDelayMs: 1, maxDelayMs: 5 },
    });

    await expect(client.query.customer({ customerId: "c_1" })).rejects.toThrow(RateLimitError);
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it("does not retry non-retryable errors", async () => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValue(errorResponse(401));
    const client = new PlainClient({ apiKey: "k", retry: { maxRetries: 3, initialDelayMs: 1 } });

    await expect(client.query.customer({ customerId: "c_1" })).rejects.toThrow(AuthenticationError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("only retries NetworkError when retryOnNetworkError is set", async () => {
    const fetchMock = mockFetch();
    fetchMock
      .mockResolvedValueOnce(errorResponse(503))
      .mockResolvedValueOnce(graphqlResponse({ customer }));

    const withoutOptIn = new PlainClient({
      apiKey: "k",
      retry: { maxRetries: 3, initialDelayMs: 1 },
    });
    await expect(withoutOptIn.query.customer({ customerId: "c_1" })).rejects.toThrow(NetworkError);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    fetchMock.mockReset();
    fetchMock
      .mockResolvedValueOnce(errorResponse(503))
      .mockResolvedValueOnce(graphqlResponse({ customer }));

    const withOptIn = new PlainClient({
      apiKey: "k",
      retry: { maxRetries: 3, initialDelayMs: 1, retryOnNetworkError: true },
    });
    const result = await withOptIn.query.customer({ customerId: "c_1" });
    expect(result?.id).toBe("c_1");
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});

describe("fetch failures", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("wraps a rejected fetch in NetworkError with the original cause", async () => {
    const fetchMock = mockFetch();
    const boom = new TypeError("fetch failed");
    fetchMock.mockRejectedValue(boom);
    const client = new PlainClient({ apiKey: "k" });

    const error = await client.query.customer({ customerId: "c_1" }).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(NetworkError);
    expect((error as NetworkError).message).toContain("fetch failed");
    expect((error as NetworkError).cause).toBe(boom);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("retries a rejected fetch when retryOnNetworkError is set", async () => {
    const fetchMock = mockFetch();
    fetchMock
      .mockRejectedValueOnce(new TypeError("fetch failed"))
      .mockResolvedValueOnce(graphqlResponse({ customer }));
    const client = new PlainClient({
      apiKey: "k",
      retry: { maxRetries: 2, initialDelayMs: 1, retryOnNetworkError: true },
    });

    const result = await client.query.customer({ customerId: "c_1" });
    expect(result?.id).toBe("c_1");
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});

describe("parseRetryAfterSeconds", () => {
  it("parses delay-seconds", () => {
    expect(parseRetryAfterSeconds("12")).toBe(12);
    expect(parseRetryAfterSeconds("0")).toBe(0);
  });

  it("parses HTTP dates relative to now", () => {
    const inTenSeconds = new Date(Date.now() + 10_000).toUTCString();
    const parsed = parseRetryAfterSeconds(inTenSeconds) ?? -1;
    expect(parsed).toBeGreaterThanOrEqual(9);
    expect(parsed).toBeLessThanOrEqual(11);
  });

  it("returns undefined for missing or garbage values", () => {
    expect(parseRetryAfterSeconds(null)).toBeUndefined();
    expect(parseRetryAfterSeconds("soon")).toBeUndefined();
    expect(parseRetryAfterSeconds("-3")).toBeUndefined();
  });
});
