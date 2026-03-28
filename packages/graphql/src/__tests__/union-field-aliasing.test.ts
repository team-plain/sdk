import { afterEach, describe, expect, it, vi } from "vitest";
import { NoteEntryModel, TimelineEntryModel } from "../_generated_sdk.js";
import { PlainClient } from "../client.js";
import { getRequestBody, graphqlResponse, mockFetch } from "./helpers.js";

/**
 * The Entry union has members (NoteEntry, ChatEntry, CustomEntry, etc.) that share
 * field names like "text" with different types (e.g., NoteEntry.text: String! vs
 * ChatEntry.text: String). GraphQL's SameResponseShape rule forbids selecting
 * fields with the same name but different types in a union spread, so the generated
 * documents alias them (e.g., `noteEntryText: text`). The SDK must remap these
 * aliases back to the canonical field names when constructing model instances.
 */
describe("union field aliasing", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const timelineEntryData = {
    timelineEntry: {
      id: "te_123",
      customerId: "c_456",
      threadId: "th_789",
      llmText: null,
      timestamp: { unixTimestamp: "1700000000", iso8601: "2023-11-14T22:13:20Z" },
      actor: {
        __typename: "UserActor",
        userId: "u_1",
        user: { id: "u_1" },
      },
      entry: {
        __typename: "NoteEntry",
        noteId: "n_1",
        isEdited: false,
        editedAt: null,
        editedBy: null,
        // These are the aliased field names as they come back from the GraphQL query.
        // The generated documents use `noteEntryText: text` and `noteEntryMarkdown: markdown`
        // to avoid collisions with other Entry union members.
        noteEntryText: "Hello, world!",
        noteEntryMarkdown: "Hello, **world**!",
      },
    },
  };

  it("remaps aliased union fields to their canonical names on the model", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(timelineEntryData));
    const client = new PlainClient({ apiKey: "test-key" });

    const timelineEntry = await client.query.timelineEntry({
      timelineEntryId: "te_123",
    });

    expect(timelineEntry).toBeInstanceOf(TimelineEntryModel);
    expect(timelineEntry.entry).toBeInstanceOf(NoteEntryModel);

    const noteEntry = timelineEntry.entry as NoteEntryModel;
    // The aliased fields (noteEntryText, noteEntryMarkdown) should be remapped to
    // the canonical field names (text, markdown) on the model instance.
    expect(noteEntry.text).toBe("Hello, world!");
    expect(noteEntry.markdown).toBe("Hello, **world**!");
  });

  it("sends a query with aliased fields for conflicting union member fields", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse(timelineEntryData));
    const client = new PlainClient({ apiKey: "test-key" });

    await client.query.timelineEntry({ timelineEntryId: "te_123" });

    const body = getRequestBody(fetchMock);
    const query = body.query as string;

    // The generated query should use aliases for the conflicting "text" field
    // across different Entry union members
    expect(query).toContain("noteEntryText: text");
    expect(query).toContain("chatEntryText: text");
    expect(query).toContain("slackMessageEntryText: text");
  });
});
