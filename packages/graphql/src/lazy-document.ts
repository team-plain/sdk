// graphql.web parses and prints like graphql-js at under half the bundle size; its AST omits empty
// arrays, as the SDK's earlier inlined ASTs did.
import { Kind, parse, print } from "@0no-co/graphql.web";
import type { DefinitionNode, DocumentNode, Location } from "graphql";

// Symbol.for so the ESM and CommonJS builds, which each load their own copy of this module, still
// recognise each other's documents.
const unchangedQueryText = Symbol.for("@team-plain/graphql/unchangedQueryText");

const definitionTexts = new WeakMap<DocumentNode, () => ReadonlySet<string>>();

/**
 * Builds a generated document from its own definition and the fragment documents it uses. A
 * fragment used along several paths is sent once.
 */
export function gql(definition: string, ...fragments: DocumentNode[]): DocumentNode {
  let texts: Set<string> | undefined;
  const collect = () => {
    if (texts === undefined) {
      texts = new Set([definition]);
      for (const fragment of fragments) {
        for (const text of definitionTexts.get(fragment)?.() ?? [print(fragment)]) {
          texts.add(text);
        }
      }
    }
    return texts;
  };
  const document = lazyDocument(() => [...collect()].join(""));
  definitionTexts.set(document, collect);
  return document;
}

/**
 * A plain `DocumentNode` object, like the SDK's earlier inlined ASTs: its own enumerable keys are
 * `kind` and `definitions`, so spreading, cloning or serialising it still gives a document.
 * `definitions` is parsed on first access, so documents only ever sent as text never pay for it.
 */
function lazyDocument(source: () => string): DocumentNode {
  let text: string | undefined;
  let definitions: ReadonlyArray<DefinitionNode> | undefined;
  let loc: Location | undefined;
  const queryText = () => (text ??= source());
  const document = { kind: Kind.DOCUMENT } as unknown as DocumentNode;

  Object.defineProperties(document, {
    definitions: {
      enumerable: true,
      configurable: true,
      get: () => (definitions ??= parse(queryText(), { noLocation: true }).definitions),
      set: (value: ReadonlyArray<DefinitionNode>) => {
        definitions = value;
      },
    },
    // graphql-tag reads loc.source.body when a document is interpolated into a gql template, and
    // urql reads it instead of printing the document.
    loc: {
      configurable: true,
      get: () =>
        (loc ??= { start: 0, end: queryText().length, source: { body: queryText() } } as Location),
    },
    toString: {
      configurable: true,
      writable: true,
      value: () => (definitions === undefined ? queryText() : print(document)),
    },
    // Once definitions has been read, it may have been edited in place, so only the untouched text
    // is safe to send without printing.
    [unchangedQueryText]: {
      value: () => (definitions === undefined ? queryText() : undefined),
    },
  });

  return document;
}

/** The query text of a generated document whose definitions have never been read, if it is one. */
export function unchangedQueryTextOf(document: object): string | undefined {
  const read = (document as { [unchangedQueryText]?: unknown })[unchangedQueryText];
  return typeof read === "function" ? read() : undefined;
}
