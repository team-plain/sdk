import { afterEach, describe, expect, it, vi } from "vitest";
import { PlainClient } from "../client.js";
import {
  AuthenticationError,
  ForbiddenError,
  NetworkError,
  PlainGraphQLError,
  RateLimitError,
} from "../error.js";
import { errorResponse, graphqlErrorResponse, mockFetch } from "./helpers.js";

describe("error handling", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  function createClient() {
    return new PlainClient({ apiKey: "test-api-key" });
  }

  it("throws AuthenticationError on 401", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(errorResponse(401));
    const client = createClient();

    await expect(client.customer({ customerId: "c_1" })).rejects.toThrow(AuthenticationError);
  });

  it("throws ForbiddenError on 403", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(errorResponse(403));
    const client = createClient();

    await expect(client.customer({ customerId: "c_1" })).rejects.toThrow(ForbiddenError);
  });

  it("throws RateLimitError on 429", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(errorResponse(429));
    const client = createClient();

    await expect(client.customer({ customerId: "c_1" })).rejects.toThrow(RateLimitError);
  });

  it("throws NetworkError on 500", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(errorResponse(500));
    const client = createClient();

    await expect(client.customer({ customerId: "c_1" })).rejects.toThrow(NetworkError);
  });

  it("throws PlainGraphQLError on 200 with GraphQL errors", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlErrorResponse([{ message: "Something went wrong" }]));
    const client = createClient();

    await expect(client.customer({ customerId: "c_1" })).rejects.toThrow(PlainGraphQLError);
  });

  it("includes error message from JSON body in HTTP errors", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      errorResponse(401, { errors: [{ message: "Invalid API key" }] }),
    );
    const client = createClient();

    await expect(client.customer({ customerId: "c_1" })).rejects.toThrow("Invalid API key");
  });

  it("throws PlainGraphQLError with errors array", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      graphqlErrorResponse([{ message: "Field error" }, { message: "Another error" }]),
    );
    const client = createClient();

    try {
      await client.customer({ customerId: "c_1" });
      expect.fail("Should have thrown");
    } catch (e) {
      expect(e).toBeInstanceOf(PlainGraphQLError);
      const err = e as PlainGraphQLError;
      expect(err.errors).toHaveLength(2);
      expect(err.errors[0].message).toBe("Field error");
      expect(err.errors[1].message).toBe("Another error");
    }
  });
});
