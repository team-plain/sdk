import { afterEach, describe, expect, it, vi } from "vitest";
import { CustomerModel } from "../_generated_sdk.js";
import { PlainClient } from "../client.js";
import { PlainConnection } from "../connection.js";
import { getRequestBody, graphqlResponse, mockFetch } from "./helpers.js";

describe("connection pagination", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

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
            status: "ACTIVE",
            isAnonymous: false,
            avatarUrl: null,
            assignedAt: null,
            lastIdleAt: null,
            markedAsSpamAt: null,
            statusChangedAt: null,
            company: { id: "comp_1" },
            createdAt: { unixTimestamp: "1700000000", iso8601: "2023-11-14T22:13:20Z" },
            updatedAt: { unixTimestamp: "1700000001", iso8601: "2023-11-14T22:13:21Z" },
          },
        })),
        pageInfo,
      },
    };
  }

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
