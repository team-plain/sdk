import { afterEach, describe, expect, it, vi } from "vitest";
import { CustomerModel } from "../_generated_sdk.js";
import { PlainClient } from "../client.js";
import {
  getRequestBody,
  getRequestHeaders,
  getRequestUrl,
  graphqlResponse,
  mockFetch,
} from "./helpers.js";

describe("query execution", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const customerData = {
    customer: {
      id: "c_123",
      externalId: "ext_1",
      fullName: "Jane Doe",
      shortName: "Jane",
      avatarUrl: "https://example.com/avatar.png",
      isAnonymous: false,
      status: "ACTIVE",
      assignedAt: null,
      company: { id: "comp_1" },
      createdAt: { unixTimestamp: "1700000000", iso8601: "2023-11-14T22:13:20Z" },
      updatedAt: { unixTimestamp: "1700000001", iso8601: "2023-11-14T22:13:21Z" },
      markedAsSpamAt: null,
      statusChangedAt: null,
      lastIdleAt: null,
    },
  };

  it("returns a model instance with correct properties", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(customerData));
    const client = new PlainClient({ apiKey: "test-key" });

    const customer = await client.customer({ customerId: "c_123" });

    expect(customer).toBeInstanceOf(CustomerModel);
    expect(customer.id).toBe("c_123");
    expect(customer.fullName).toBe("Jane Doe");
    expect(customer.shortName).toBe("Jane");
    expect(customer.isAnonymous).toBe(false);
    expect(customer.status).toBe("ACTIVE");
    expect(customer.createdAt).toEqual({
      unixTimestamp: "1700000000",
      iso8601: "2023-11-14T22:13:20Z",
    });
  });

  it("sends correct variables in request body", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(customerData));
    const client = new PlainClient({ apiKey: "test-key" });

    await client.customer({ customerId: "c_123" });

    const body = getRequestBody(fetchMock);
    expect(body.variables).toEqual({ customerId: "c_123" });
    expect(body.query).toContain("customer");
  });

  it("sends correct auth header", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(customerData));
    const client = new PlainClient({ apiKey: "my-secret-key" });

    await client.customer({ customerId: "c_123" });

    const headers = getRequestHeaders(fetchMock);
    expect(headers.Authorization).toBe("Bearer my-secret-key");
    expect(headers["Content-Type"]).toBe("application/json");
  });

  it("sends request to default API URL", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(customerData));
    const client = new PlainClient({ apiKey: "test-key" });

    await client.customer({ customerId: "c_123" });

    expect(getRequestUrl(fetchMock)).toBe("https://core-api.uk.plain.com/graphql/v1");
  });

  it("sends request to custom API URL", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(customerData));
    const client = new PlainClient({
      apiKey: "test-key",
      apiUrl: "https://custom.api.com/graphql",
    });

    await client.customer({ customerId: "c_123" });

    expect(getRequestUrl(fetchMock)).toBe("https://custom.api.com/graphql");
  });

  it("throws when nullable query returns null", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse({ customer: null }));
    const client = new PlainClient({ apiKey: "test-key" });

    await expect(client.customer({ customerId: "nonexistent" })).rejects.toThrow(
      "customer not found",
    );
  });
});
