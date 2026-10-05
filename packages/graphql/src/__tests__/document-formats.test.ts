import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { Kind, parse, print } from "graphql";
import { afterEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import {
  MyWorkspaceDocument,
  type MyWorkspaceQuery,
  type MyWorkspaceQueryVariables,
  PlainGraphQLClient,
  UpsertCustomerDocument,
} from "../index.js";
import { getRequestBody, graphqlResponse, mockFetch } from "./helpers.js";

describe("document formats", () => {
  let fetchMock: ReturnType<typeof mockFetch>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("sends a generated document's query text as is", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse({ myWorkspace: null }));
    const client = new PlainGraphQLClient({ apiKey: "test-key" });

    const data = await client.request(MyWorkspaceDocument);

    expectTypeOf(data).toEqualTypeOf<MyWorkspaceQuery>();
    expect(getRequestBody(fetchMock).query).toBe(MyWorkspaceDocument.toString());
  });

  it("prints a document from parse()", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse({ myWorkspace: { id: "w_1" } }));
    const client = new PlainGraphQLClient({ apiKey: "test-key" });

    await client.request(parse("query Mine { myWorkspace { id } }"));

    expect(getRequestBody(fetchMock).query).toBe("query Mine {\n  myWorkspace {\n    id\n  }\n}");
  });

  it("sends query text passed as a string", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse({ myWorkspace: { id: "w_1" } }));
    const client = new PlainGraphQLClient({ apiKey: "test-key" });

    const data = await client.request<{ myWorkspace: { id: string } }, Record<string, never>>(
      "query Mine { myWorkspace { id } }",
    );

    expect(data.myWorkspace.id).toBe("w_1");
    expect(getRequestBody(fetchMock).query).toBe("query Mine { myWorkspace { id } }");
  });
});

describe("generated documents read as an AST", () => {
  it("prints like the parsed query text, fragments included", () => {
    expect(UpsertCustomerDocument.kind).toBe(Kind.DOCUMENT);
    expect(print(UpsertCustomerDocument)).toBe(print(parse(UpsertCustomerDocument.toString())));
    expect(UpsertCustomerDocument.definitions.map((definition) => definition.kind)).toContain(
      Kind.FRAGMENT_DEFINITION,
    );
  });

  it("is typed as a TypedDocumentNode", () => {
    expectTypeOf(MyWorkspaceDocument).toExtend<
      TypedDocumentNode<MyWorkspaceQuery, MyWorkspaceQueryVariables>
    >();
  });

  it("parses its query text once", () => {
    expect(MyWorkspaceDocument.definitions).toBe(MyWorkspaceDocument.definitions);
  });

  it("exposes the query text through loc, as graphql-tag interpolation expects", () => {
    expect(MyWorkspaceDocument.loc?.source.body).toBe(MyWorkspaceDocument.toString());
  });
});
