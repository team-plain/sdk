import { afterEach, describe, expect, it, vi } from "vitest";
import { PlainClient } from "../client.js";
import { getRequestBody, graphqlResponse, mockFetch } from "./helpers.js";

describe("mutation execution", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns output with data on success", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      graphqlResponse({
        addLabels: {
          labels: [
            {
              id: "label_1",
              labelType: { id: "lt_1" },
              createdAt: { unixTimestamp: "1700000000", iso8601: "2023-11-14T22:13:20Z" },
              updatedAt: { unixTimestamp: "1700000001", iso8601: "2023-11-14T22:13:21Z" },
            },
          ],
          thread: null,
          error: null,
        },
      }),
    );
    const client = new PlainClient({ apiKey: "test-key" });

    const result = await client.mutation.addLabels({
      input: { threadId: "th_1", labelTypeIds: ["lt_1"] },
    });

    expect(result.labels).toHaveLength(1);
    expect(result.labels[0].id).toBe("label_1");
    expect(result.error).toBeNull();
  });

  it("returns output with error on mutation failure (error is data, not thrown)", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      graphqlResponse({
        addLabels: {
          labels: [],
          thread: null,
          error: {
            message: "Thread not found",
            type: "NOT_FOUND",
            code: "thread_not_found",
            fields: [],
          },
        },
      }),
    );
    const client = new PlainClient({ apiKey: "test-key" });

    const result = await client.mutation.addLabels({
      input: { threadId: "th_nonexistent", labelTypeIds: ["lt_1"] },
    });

    expect(result.error).not.toBeNull();
    expect(result.error!.message).toBe("Thread not found");
    expect(result.error!.type).toBe("NOT_FOUND");
    expect(result.error!.code).toBe("thread_not_found");
  });

  it("passes mutation variables correctly in request body", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      graphqlResponse({
        addLabels: { labels: [], thread: null, error: null },
      }),
    );
    const client = new PlainClient({ apiKey: "test-key" });

    await client.mutation.addLabels({
      input: { threadId: "th_1", labelTypeIds: ["lt_1", "lt_2"] },
    });

    const body = getRequestBody(fetchMock);
    expect(body.variables).toEqual({
      input: { threadId: "th_1", labelTypeIds: ["lt_1", "lt_2"] },
    });
    expect(body.query).toContain("addLabels");
  });

  it("sends a well-formed GraphQL mutation with the expected operation and fragment fields", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(
      graphqlResponse({
        addLabels: { labels: [], thread: null, error: null },
      }),
    );
    const client = new PlainClient({ apiKey: "test-key" });

    await client.mutation.addLabels({
      input: { threadId: "th_1", labelTypeIds: ["lt_1"] },
    });

    const body = getRequestBody(fetchMock);
    const query = body.query as string;

    // Operation definition
    expect(query).toMatch(/mutation AddLabels\(\$input: AddLabelsInput!\)/);
    expect(query).toContain("addLabels(input: $input)");

    // Uses fragments for the return fields
    expect(query).toMatch(/fragment LabelFields on Label/);
    expect(query).toContain("...LabelFields");
    expect(query).toMatch(/fragment ThreadFields on Thread/);
    expect(query).toContain("...ThreadFields");

    // Label fragment scalar fields
    expect(query).toContain("createdAt");
    expect(query).toContain("updatedAt");
    expect(query).toContain("unixTimestamp");
    expect(query).toContain("iso8601");

    // Label relations only select { id } (lazy-loading pattern)
    expect(query).toMatch(/labelType\s*\{\s*id\s*\}/);

    // Error fields are selected
    expect(query).toContain("error");
    expect(query).toContain("message");
    expect(query).toContain("type");
    expect(query).toContain("code");
  });
});
