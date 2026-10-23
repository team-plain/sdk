import { afterEach, describe, expect, it, vi } from "vitest";
import { UserModel } from "../_generated_sdk.js";
import { PlainClient } from "../client.js";
import { getRequestBody, graphqlResponse, mockFetch } from "./helpers.js";

describe("lazy-loading relations", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const companyData = {
    company: {
      id: "comp_1",
      name: "Acme Inc",
      logoUrl: null,
      domainName: "acme.com",
      contractValue: null,
      isDeleted: false,
      createdAt: { unixTimestamp: "1700000000", iso8601: "2023-11-14T22:13:20Z" },
      createdBy: {
        __typename: "SystemActor",
        systemId: "sys",
        workflowExecutionId: null,
        workflow: null,
      },
      updatedAt: { unixTimestamp: "1700000001", iso8601: "2023-11-14T22:13:21Z" },
      updatedBy: {
        __typename: "SystemActor",
        systemId: "sys",
        workflowExecutionId: null,
        workflow: null,
      },
      tier: null,
      threadChannelAssociations: [],
      accountOwner: { id: "u_1" },
      deletedAt: null,
      deletedBy: null,
    },
  };

  const userData = {
    user: {
      id: "u_1",
      fullName: "Ada Owner",
      publicName: "Ada",
      email: "ada@acme.com",
      createdAt: { unixTimestamp: "1700000000", iso8601: "2023-11-14T22:13:20Z" },
      createdBy: {
        __typename: "SystemActor",
        systemId: "sys",
        workflowExecutionId: null,
        workflow: null,
      },
      updatedAt: { unixTimestamp: "1700000001", iso8601: "2023-11-14T22:13:21Z" },
      updatedBy: {
        __typename: "SystemActor",
        systemId: "sys",
        workflowExecutionId: null,
        workflow: null,
      },
      deletedBy: null,
    },
  };

  it("lazy-loads a relation via a separate fetch call", async () => {
    fetchMock = mockFetch();
    // First call: fetch company
    fetchMock.mockResolvedValueOnce(graphqlResponse(companyData));
    // Second call: fetch account owner (lazy-loaded)
    fetchMock.mockResolvedValueOnce(graphqlResponse(userData));

    const client = new PlainClient({ apiKey: "test-key" });
    const company = await client.query.company({ companyId: "comp_1" });

    const accountOwner = await company.accountOwner;

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(accountOwner).toBeInstanceOf(UserModel);
    expect(accountOwner!.id).toBe("u_1");
    expect(accountOwner!.fullName).toBe("Ada Owner");
    expect(accountOwner!.email).toBe("ada@acme.com");
  });

  it("sends correct variables for the lazy-loaded query", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(companyData));
    fetchMock.mockResolvedValueOnce(graphqlResponse(userData));

    const client = new PlainClient({ apiKey: "test-key" });
    const company = await client.query.company({ companyId: "comp_1" });

    await company.accountOwner;

    const secondCallBody = getRequestBody(fetchMock, 1);
    expect(secondCallBody.variables).toEqual({ userId: "u_1" });
    expect(secondCallBody.query).toContain("user");
  });

  it("returns undefined when relation id is null", async () => {
    fetchMock = mockFetch();
    const companyWithNoOwner = {
      company: {
        ...companyData.company,
        accountOwner: null,
      },
    };
    fetchMock.mockResolvedValueOnce(graphqlResponse(companyWithNoOwner));

    const client = new PlainClient({ apiKey: "test-key" });
    const company = await client.query.company({ companyId: "comp_1" });

    const accountOwner = await company.accountOwner;

    expect(accountOwner).toBeUndefined();
    // Should not have made a second fetch call
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
