import type { Types } from "@graphql-codegen/plugin-helpers";
import { type GraphQLSchema, parse } from "graphql";
// TypeScript 7 ships no JS compiler API, so type-checking generated code needs the 6.x line.
import ts from "typescript6";
import { plugin } from "../index.js";

/**
 * Run the plugin. It returns its output synchronously, as a string, but its `PluginFunction` type
 * also allows a promise or an object.
 */
export function generate(schema: GraphQLSchema, documents: Types.DocumentFile[]): string {
  const output = plugin(schema, documents, {});
  if (typeof output !== "string") throw new Error("Expected the plugin to return a string");
  return output;
}

/**
 * Parse a GraphQL string into the `Types.DocumentFile[]` format that `plugin()` expects.
 */
export function createDocuments(gqlString: string): Types.DocumentFile[] {
  return [
    {
      document: parse(gqlString),
      location: "test.graphql",
    },
  ];
}

/**
 * Stub declarations prepended to generated code so TypeScript can compile it
 * without the real SDK imports.
 */
const STUB_DECLARATIONS = `
type TypedDocumentNode<TData = any, TVariables = Record<string, any>> = any;

declare class PlainGraphQLClient {
  request<TData, TVariables extends Record<string, unknown>>(
    document: TypedDocumentNode<TData, TVariables>,
    variables?: TVariables
  ): Promise<TData>;
}

declare class PlainConnection<N> {
  readonly nodes: N[];
  readonly pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; startCursor?: string | null; endCursor?: string | null };
  readonly totalCount?: number;
  constructor(config: {
    nodes: N[];
    pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; startCursor?: string | null; endCursor?: string | null };
    totalCount?: number;
    fetch: (cursor: { after?: string; before?: string }) => Promise<PlainConnection<N>>;
  });
}
`;

/**
 * Compile generated TypeScript code in-memory and return diagnostics.
 * `extraDeclarations` lets tests declare fragment/document types that the generated code references.
 */
export function compileTypeScript(code: string, extraDeclarations?: string): ts.Diagnostic[] {
  // Strip the real imports — we replace them with stubs
  const strippedCode = code
    .replace(/import type \{[^}]*\} from "\.\/graphql-client\.js";?\n?/g, "")
    .replace(/import \{[^}]*\} from "\.\/connection\.js";?\n?/g, "")
    .replace(/import \{[^}]*\} from "\.\/_generated_documents\.js";?\n?/g, "")
    .replace(/import type \{[^}]*\} from "\.\/_generated_documents\.js";?\n?/g, "");

  const fullSource = `${STUB_DECLARATIONS}\n${extraDeclarations ?? ""}\n${strippedCode}`;

  const fileName = "test.ts";
  const sourceFile = ts.createSourceFile(fileName, fullSource, ts.ScriptTarget.ESNext, true);

  const host = ts.createCompilerHost({});
  const originalGetSourceFile = host.getSourceFile.bind(host);
  host.getSourceFile = (name, languageVersion) => {
    if (name === fileName) return sourceFile;
    return originalGetSourceFile(name, languageVersion);
  };

  const program = ts.createProgram(
    [fileName],
    {
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      types: [],
    },
    host,
  );

  return [...program.getSemanticDiagnostics(), ...program.getSyntacticDiagnostics()];
}

/**
 * Format diagnostics into readable strings for assertion messages.
 */
export function formatDiagnostics(diagnostics: ts.Diagnostic[]): string {
  return ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCurrentDirectory: () => "/",
    getCanonicalFileName: (f) => f,
    getNewLine: () => "\n",
  });
}
