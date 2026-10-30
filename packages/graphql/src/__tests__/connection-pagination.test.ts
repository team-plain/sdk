import { afterEach, describe, expect, it, vi } from "vitest";
import type { CustomersQueryVariables } from "../_generated_documents.js";
import { CustomerGroupMembershipModel, CustomerModel } from "../_generated_sdk.js";
import { PlainClient } from "../client.js";
import { PlainConnection } from "../connection.js";
import { getRequestBody, graphqlResponse, mockFetch } from "./helpers.js";

describe("connection pagination", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // Helper functions
  function makeCustomersResponse(
    customers: Array<{ id: string; fullName: string; shortName: string }>,
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string | null;
      endCursor: string | null;
    },
  ) {
    return {
      customers: {
        edges: customers.map((c) => ({
          cursor: `cursor_${c.id}`,
          node: {
            id: c.id,
            fullName: c.fullName,
            shortName: c.shortName,
            externalId: null,
            email: null,
            status: "ACTIVE",
            isAnonymous: false,
            avatarUrl: null,
            assignedToUser: null,
            assignedAt: null,
            lastIdleAt: null,
            markedAsSpamAt: null,
            markedAsSpamBy: null,
            statusChangedAt: null,
            company: { id: "comp_1" },
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
            identities: [],
          },
        })),
        pageInfo,
        totalCount: customers.length,
      },
    };
  }
  // End helper functions

  it.each([
    { initial: { first: 2, after: "old_after" }, direction: "previous" },
    { initial: { last: 2, before: "old_before" }, direction: "next" },
    { initial: { first: 2, after: "old_after" }, direction: "next" },
    { initial: { last: 2, before: "old_before" }, direction: "previous" },
  ] as const)("switches root query direction from $initial", async ({ initial, direction }) => {
    fetchMock = mockFetch();
    const response = makeCustomersResponse(
      [{ id: "c_1", fullName: "Alice Smith", shortName: "Alice" }],
      {
        hasNextPage: true,
        hasPreviousPage: true,
        startCursor: "cursor_start",
        endCursor: "cursor_end",
      },
    );
    const filters = { isMarkedAsSpam: false };
    const sortBy = { field: "FULL_NAME", direction: "ASC" } as const;
    const variables = Object.freeze({ ...initial, filters, sortBy });
    fetchMock.mockImplementation(async () => graphqlResponse(response));
    const client = new PlainClient({ apiKey: "test-key" });
    const page = await client.query.customers(variables);
    const next = direction === "next" ? await page.fetchNext() : await page.fetchPrevious();
    const expected =
      direction === "next"
        ? { first: 2, after: "cursor_end", filters, sortBy }
        : { last: 2, before: "cursor_start", filters, sortBy };

    expect(getRequestBody(fetchMock, 0).variables).toEqual(variables);
    expect(getRequestBody(fetchMock, 1).variables).toEqual(expected);
    expect(next!.nodes[0]).toBeInstanceOf(CustomerModel);
    expect(next!.totalCount).toBe(page.totalCount);
    expect(fetchMock).toHaveBeenCalledTimes(2);

    const returned = direction === "next" ? await next!.fetchPrevious() : await next!.fetchNext();
    expect(getRequestBody(fetchMock, 2).variables).toEqual(
      direction === "next"
        ? { last: 2, before: "cursor_start", filters, sortBy }
        : { first: 2, after: "cursor_end", filters, sortBy },
    );
    expect(returned!.nodes[0].id).toBe("c_1");
    expect(variables).toEqual({ ...initial, filters, sortBy });
  });

  it.each([
    { initial: { first: 2, after: "old_after" }, direction: "previous" },
    { initial: { last: 2, before: "old_before" }, direction: "next" },
  ] as const)(
    "switches model connection direction from $initial",
    async ({ initial, direction }) => {
      fetchMock = mockFetch();
      const customerData = makeCustomersResponse(
        [{ id: "c_1", fullName: "Alice Smith", shortName: "Alice" }],
        {
          hasNextPage: true,
          hasPreviousPage: true,
          startCursor: "cursor_start",
          endCursor: "cursor_end",
        },
      );
      const customer = customerData.customers.edges[0].node;
      const actor = { __typename: "SystemActor", systemId: "sys" };
      fetchMock.mockResolvedValueOnce(graphqlResponse({ customer }));
      fetchMock.mockImplementation(async () =>
        graphqlResponse({
          customer: {
            customerGroupMemberships: {
              edges: [
                {
                  node: {
                    customerId: "c_1",
                    customerGroup: { id: "cg_1" },
                    createdAt: customer.createdAt,
                    updatedAt: customer.updatedAt,
                    createdBy: actor,
                    updatedBy: actor,
                  },
                },
              ],
              pageInfo: customerData.customers.pageInfo,
            },
          },
        }),
      );
      const client = new PlainClient({ apiKey: "test-key" });
      const model = await client.query.customer({ customerId: "c_1" });
      expect(fetchMock).toHaveBeenCalledTimes(1);
      const filters = { customerGroupExternalIds: ["group_1"] };
      const variables = Object.freeze({ ...initial, filters });
      const page = await model.customerGroupMemberships(variables);
      expect(fetchMock).toHaveBeenCalledTimes(2);
      expect(page.nodes[0]).toBeInstanceOf(CustomerGroupMembershipModel);
      const next = direction === "next" ? await page.fetchNext() : await page.fetchPrevious();
      expect(getRequestBody(fetchMock, 2).variables).toEqual({
        customerId: "c_1",
        filters,
        ...(direction === "next"
          ? { first: 2, after: "cursor_end" }
          : { last: 2, before: "cursor_start" }),
      });
      expect(next!.nodes[0]).toBeInstanceOf(CustomerGroupMembershipModel);
      const returned = direction === "next" ? await next!.fetchPrevious() : await next!.fetchNext();
      expect(getRequestBody(fetchMock, 3).variables).toEqual({
        customerId: "c_1",
        filters,
        ...(direction === "next"
          ? { last: 2, before: "cursor_start" }
          : { first: 2, after: "cursor_end" }),
      });
      expect(returned!.nodes[0].customerId).toBe("c_1");
      expect(fetchMock).toHaveBeenCalledTimes(4);
      expect(variables).toEqual({ ...initial, filters });
    },
  );

  it.each([undefined, { first: null, last: null, before: null, after: null }] satisfies (
    | CustomersQueryVariables
    | undefined
  )[])("keeps default page sizes when navigating without a count: %j", async (variables) => {
    fetchMock = mockFetch();
    const response = makeCustomersResponse([], {
      hasNextPage: true,
      hasPreviousPage: true,
      startCursor: "cursor_start",
      endCursor: "cursor_end",
    });
    fetchMock.mockImplementation(async () => graphqlResponse(response));
    const client = new PlainClient({ apiKey: "test-key" });
    const page = await client.query.customers(variables);
    const previous = await page.fetchPrevious();
    expect(getRequestBody(fetchMock, 1).variables).toEqual({
      before: "cursor_start",
      ...(variables ? { last: null } : {}),
    });
    await previous!.fetchNext();
    expect(getRequestBody(fetchMock, 2).variables).toEqual({
      after: "cursor_end",
      ...(variables ? { first: null } : {}),
    });
  });

  it("returns a PlainConnection with model instances", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      graphqlResponse(
        makeCustomersResponse(
          [
            { id: "c_1", fullName: "Alice Smith", shortName: "Alice" },
            { id: "c_2", fullName: "Bob Jones", shortName: "Bob" },
          ],
          {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "cursor_c_1",
            endCursor: "cursor_c_2",
          },
        ),
      ),
    );
    const client = new PlainClient({ apiKey: "test-key" });

    const connection = await client.query.customers({ first: 10 });

    expect(connection).toBeInstanceOf(PlainConnection);
    expect(connection.nodes).toHaveLength(2);
    expect(connection.nodes[0]).toBeInstanceOf(CustomerModel);
    expect(connection.nodes[0].id).toBe("c_1");
    expect(connection.nodes[0].fullName).toBe("Alice Smith");
    expect(connection.nodes[1].id).toBe("c_2");
  });

  it("populates pageInfo correctly", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      graphqlResponse(
        makeCustomersResponse([{ id: "c_1", fullName: "Alice Smith", shortName: "Alice" }], {
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: "cursor_start",
          endCursor: "cursor_end",
        }),
      ),
    );
    const client = new PlainClient({ apiKey: "test-key" });

    const connection = await client.query.customers({ first: 1 });

    expect(connection.hasNextPage).toBe(true);
    expect(connection.hasPreviousPage).toBe(false);
    expect(connection.pageInfo.startCursor).toBe("cursor_start");
    expect(connection.pageInfo.endCursor).toBe("cursor_end");
  });

  it("fetchNext sends request with after cursor", async () => {
    fetchMock = mockFetch();
    // First page
    fetchMock.mockResolvedValueOnce(
      graphqlResponse(
        makeCustomersResponse([{ id: "c_1", fullName: "Alice Smith", shortName: "Alice" }], {
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: "cursor_start",
          endCursor: "cursor_end",
        }),
      ),
    );
    // Second page
    fetchMock.mockResolvedValueOnce(
      graphqlResponse(
        makeCustomersResponse([{ id: "c_2", fullName: "Bob Jones", shortName: "Bob" }], {
          hasNextPage: false,
          hasPreviousPage: true,
          startCursor: "cursor_c_2",
          endCursor: "cursor_c_2",
        }),
      ),
    );

    const client = new PlainClient({ apiKey: "test-key" });
    const firstPage = await client.query.customers({ first: 1 });
    const secondPage = await firstPage.fetchNext();

    expect(secondPage).toBeInstanceOf(PlainConnection);
    expect(secondPage!.nodes).toHaveLength(1);
    expect(secondPage!.nodes[0].id).toBe("c_2");

    const secondCallBody = getRequestBody(fetchMock, 1);
    expect(secondCallBody.variables.after).toBe("cursor_end");
  });

  it("fetchNext returns undefined when hasNextPage is false", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      graphqlResponse(
        makeCustomersResponse([{ id: "c_1", fullName: "Alice Smith", shortName: "Alice" }], {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: "cursor_start",
          endCursor: "cursor_end",
        }),
      ),
    );
    const client = new PlainClient({ apiKey: "test-key" });

    const connection = await client.query.customers({ first: 10 });
    const nextPage = await connection.fetchNext();

    expect(nextPage).toBeUndefined();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("fetchPrevious sends request with before cursor", async () => {
    fetchMock = mockFetch();
    // First call returns a page with hasPreviousPage: true
    fetchMock.mockResolvedValueOnce(
      graphqlResponse(
        makeCustomersResponse([{ id: "c_2", fullName: "Bob Jones", shortName: "Bob" }], {
          hasNextPage: false,
          hasPreviousPage: true,
          startCursor: "cursor_start",
          endCursor: "cursor_end",
        }),
      ),
    );
    // Second call: previous page
    fetchMock.mockResolvedValueOnce(
      graphqlResponse(
        makeCustomersResponse([{ id: "c_1", fullName: "Alice Smith", shortName: "Alice" }], {
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: "cursor_first",
          endCursor: "cursor_first",
        }),
      ),
    );

    const client = new PlainClient({ apiKey: "test-key" });
    const page = await client.query.customers({ first: 1 });
    const prevPage = await page.fetchPrevious();

    expect(prevPage).toBeInstanceOf(PlainConnection);
    expect(prevPage!.nodes[0].id).toBe("c_1");

    const secondCallBody = getRequestBody(fetchMock, 1);
    expect(secondCallBody.variables.before).toBe("cursor_start");
  });
});
