import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { type DefinitionNode, type DocumentNode, Kind, parse, print } from "graphql";
import { afterEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import {
  type FirstResponseTimeServiceLevelAgreementFieldsFragment,
  FirstResponseTimeServiceLevelAgreementFieldsFragmentDoc,
  MyWorkspaceDocument,
  type MyWorkspaceQuery,
  type MyWorkspaceQueryVariables,
  PlainGraphQLClient,
  UpsertCustomerDocument,
} from "../index.js";
import { lazyDocument } from "../lazy-document.js";
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

  it("types query text by its result alone", async () => {
    fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse({ myWorkspace: { id: "w_1" } }));
    const client = new PlainGraphQLClient({ apiKey: "test-key" });

    const data = await client.request<{ myWorkspace: { id: string } }>(
      "query Mine($id: ID) { myWorkspace { id } }",
      { id: "w_1" },
    );

    expectTypeOf(data).toEqualTypeOf<{ myWorkspace: { id: string } }>();
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
    expectTypeOf(MyWorkspaceDocument).toEqualTypeOf<
      TypedDocumentNode<MyWorkspaceQuery, MyWorkspaceQueryVariables>
    >();
  });

  it("parses its query text once", () => {
    expect(MyWorkspaceDocument.definitions).toBe(MyWorkspaceDocument.definitions);
  });

  it("exposes the query text through loc, as graphql-tag interpolation expects", () => {
    const document = lazyDocument("query Mine{myWorkspace{id}}");

    expect(document.loc?.source.body).toBe("query Mine{myWorkspace{id}}");
    expect(document.toString()).toBe("query Mine{myWorkspace{id}}");
  });

  it("is a plain object with an AST's keys", () => {
    const document = lazyDocument("query Mine { myWorkspace { id } }");

    expect(Object.getPrototypeOf(document)).toBe(Object.prototype);
    expect(Object.keys(document)).toEqual(["kind", "definitions"]);
  });

  it.each([
    ["spread", (document: DocumentNode) => ({ ...document })],
    ["JSON", (document: DocumentNode) => JSON.parse(JSON.stringify(document))],
    ["structuredClone", (document: DocumentNode) => structuredClone(document)],
  ])("copies through %s into a document that prints the same", (_name, copy) => {
    const document = lazyDocument("query Mine { myWorkspace { id } }");

    expect(print(copy(document))).toBe(print(parse("query Mine { myWorkspace { id } }")));
  });

  it("takes assigned definitions", () => {
    const document = lazyDocument("query Mine { myWorkspace { id } }");
    const replaced = parse("query Other { myUser { id } }").definitions;

    (document as { definitions: DocumentNode["definitions"] }).definitions = replaced;

    expect(document.definitions).toBe(replaced);
  });

  it("parses once when frozen", () => {
    const document = Object.freeze(lazyDocument("query Mine { myWorkspace { id } }"));

    expect(document.definitions).toBe(document.definitions);
    expect(print(document)).toBe(print(parse("query Mine { myWorkspace { id } }")));
  });
});

describe("sending generated documents", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("prints a copy instead of sending the original's text", async () => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse({ myWorkspace: null }));
    const client = new PlainGraphQLClient({ apiKey: "test-key" });

    await client.request({ ...MyWorkspaceDocument });

    expect(getRequestBody(fetchMock).query).toBe(print(MyWorkspaceDocument));
  });

  it("prints a document whose definitions were edited", async () => {
    const fetchMock = mockFetch();
    fetchMock.mockResolvedValueOnce(graphqlResponse({ myUser: null }));
    const client = new PlainGraphQLClient({ apiKey: "test-key" });
    const document = lazyDocument("query Mine { myWorkspace { id } }");
    (document.definitions as DefinitionNode[]).splice(
      0,
      1,
      ...parse("query Other { myUser { id } }").definitions,
    );

    await client.request(document);

    expect(getRequestBody(fetchMock).query).toBe("query Other {\n  myUser {\n    id\n  }\n}");
  });
});

describe("deprecated fields a release selected", () => {
  it("are still selected, so their result types keep them", () => {
    expect(print(FirstResponseTimeServiceLevelAgreementFieldsFragmentDoc)).toContain(
      "useBusinessHoursOnly",
    );
    expectTypeOf<FirstResponseTimeServiceLevelAgreementFieldsFragment>().toHaveProperty(
      "useBusinessHoursOnly",
    );
  });
});
