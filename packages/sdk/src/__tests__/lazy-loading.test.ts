import { afterEach, describe, expect, it, vi } from "vitest";
import { CompanyModel } from "../_generated_sdk.js";
import { PlainClient } from "../client.js";
import { getRequestBody, graphqlResponse, mockFetch } from "./helpers.js";

describe("lazy-loading relations", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const customerData = {
    customer: {
      id: "c_123",
      externalId: null,
      fullName: "Jane Doe",
      shortName: null,
      avatarUrl: null,
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

  const companyData = {
    company: {
      id: "comp_1",
      name: "Acme Inc",
      logoUrl: null,
      domainName: "acme.com",
      contractValue: null,
      isDeleted: false,
      createdAt: { unixTimestamp: "1700000000", iso8601: "2023-11-14T22:13:20Z" },
      updatedAt: { unixTimestamp: "1700000001", iso8601: "2023-11-14T22:13:21Z" },
      tier: null,
      accountOwner: null,
      deletedAt: null,
    },
  };

  it("lazy-loads a relation via a separate fetch call", async () => {
    fetchMock = mockFetch();
    // First call: fetch customer
    fetchMock.mockResolvedValueOnce(graphqlResponse(customerData));
    // Second call: fetch company (lazy-loaded)
    fetchMock.mockResolvedValueOnce(graphqlResponse(companyData));

    const client = new PlainClient({ apiKey: "test-key" });
    const customer = await client.customer({ customerId: "c_123" });

    const company = await customer.company;

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(company).toBeInstanceOf(CompanyModel);
    expect(company!.id).toBe("comp_1");
    expect(company!.name).toBe("Acme Inc");
    expect(company!.domainName).toBe("acme.com");
  });

  it("sends correct variables for the lazy-loaded query", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(customerData));
    fetchMock.mockResolvedValueOnce(graphqlResponse(companyData));

    const client = new PlainClient({ apiKey: "test-key" });
    const customer = await client.customer({ customerId: "c_123" });

    await customer.company;

    const secondCallBody = getRequestBody(fetchMock, 1);
    expect(secondCallBody.variables).toEqual({ companyId: "comp_1" });
    expect(secondCallBody.query).toContain("company");
  });

  it("returns undefined when relation id is null", async () => {
    fetchMock = mockFetch();
    const customerWithNoCompany = {
      customer: {
        ...customerData.customer,
        company: null,
      },
    };
    fetchMock.mockResolvedValueOnce(graphqlResponse(customerWithNoCompany));

    const client = new PlainClient({ apiKey: "test-key" });
    const customer = await client.customer({ customerId: "c_123" });

    const company = await customer.company;

    expect(company).toBeUndefined();
    // Should not have made a second fetch call
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
