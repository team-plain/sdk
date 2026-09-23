import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PlainClient } from "../client.js";
import { AuthenticationError, NetworkError, RateLimitError } from "../error.js";
import { errorResponse, graphqlResponse, mockFetch } from "./helpers.js";

function rateLimited(headers: Record<string, string> = {}): Response {
  return new Response("Too Many Requests", {
    status: 429,
    statusText: "Too Many Requests",
    headers,
  });
}

function deleted(): Response {
  return graphqlResponse({ deleteCustomer: { error: null } });
}

function deleteCustomer(client: PlainClient) {
  return client.mutation.deleteCustomer({ input: { customerId: "c_1" } });
}

describe("rate limit retries", () => {
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it.each([
    [{ "retry-after": "7", "x-ratelimit-limit": "450" }, 7, 450],
    [{}, undefined, undefined],
    [{ "retry-after": "soon", "x-ratelimit-limit": "lots" }, undefined, undefined],
  ])("reads rate limit headers %o and does not retry by default", async (headers, retryAfterSeconds, limit) => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(rateLimited(headers));
    const client = new PlainClient({ apiKey: "k" });

    const error = await deleteCustomer(client).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(RateLimitError);
    expect((error as RateLimitError).retryAfterSeconds).toBe(retryAfterSeconds);
    expect((error as RateLimitError).limit).toBe(limit);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("waits the full Retry-After before retrying", async () => {
    vi.useFakeTimers({ toFake: ["setTimeout"] });
    const fetchMock = mockFetch();
    fetchMock
      .mockResolvedValueOnce(rateLimited({ "retry-after": "60" }))
      .mockResolvedValueOnce(deleted());
    const client = new PlainClient({ apiKey: "k", retry: { maxRetries: 1 } });

    const result = deleteCustomer(client);
    await vi.advanceTimersByTimeAsync(59_999);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(1);
    await expect(result).resolves.toEqual({ error: null });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("retries a rate limited request and returns the eventual success", async () => {
    const fetchMock = mockFetch();
    fetchMock
      .mockResolvedValueOnce(rateLimited({ "retry-after": "0" }))
      .mockResolvedValueOnce(rateLimited())
      .mockResolvedValueOnce(deleted());
    const client = new PlainClient({ apiKey: "k", retry: { maxRetries: 3 } });

    await expect(deleteCustomer(client)).resolves.toEqual({ error: null });
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it("gives up after maxRetries and rethrows the last RateLimitError", async () => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValue(rateLimited());
    const client = new PlainClient({ apiKey: "k", retry: { maxRetries: 2 } });

    await expect(deleteCustomer(client)).rejects.toThrow(RateLimitError);
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it.each([
    [401, AuthenticationError],
    [503, NetworkError],
  ])("does not retry HTTP %i", async (status, errorClass) => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValue(errorResponse(status));
    const client = new PlainClient({ apiKey: "k", retry: { maxRetries: 3 } });

    await expect(deleteCustomer(client)).rejects.toThrow(errorClass);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
