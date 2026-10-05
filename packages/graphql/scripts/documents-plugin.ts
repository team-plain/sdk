// Codegen plugin for _generated_documents.ts: typed-document-node's output, with each document built
// by src/lazy-document.ts from its query text instead of inlined as an AST. Codegen's own modes
// can't produce it:
//
// - string mode hard-codes its own TypedDocumentString class;
// - graphQLTag mode pretty-prints the text, emits tagged templates, on which bundlers ignore
//   /*#__PURE__*/ so no unused document is dropped, and gives fragment documents none of the
//   fragments they spread, so Apollo Client's readFragment can't use them.
//
// Each document here is /*#__PURE__*/ gql("<text without whitespace>", ...fragmentDocuments), typed
// as a TypedDocumentNode as typed-document-node does.
import type { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import { oldVisit } from "@graphql-codegen/plugin-helpers";
import {
  ClientSideBaseVisitor,
  DocumentMode,
  type LoadedFragment,
  type RawClientSideBasePluginConfig,
} from "@graphql-codegen/visitor-plugin-common";
import {
  concatAST,
  type FragmentDefinitionNode,
  type GraphQLSchema,
  Kind,
  type OperationDefinitionNode,
  print,
  stripIgnoredCharacters,
} from "graphql";

class LazyDocumentsVisitor extends ClientSideBaseVisitor {
  constructor(
    schema: GraphQLSchema,
    fragments: LoadedFragment[],
    config: RawClientSideBasePluginConfig,
    documents: Types.DocumentFile[],
  ) {
    super(
      schema,
      fragments,
      {
        ...config,
        documentMode: DocumentMode.graphQLTag,
        gqlImport: "./lazy-document.js#gql",
        documentNodeImport: "@graphql-typed-document-node/core#TypedDocumentNode",
        pureMagicComment: true,
        useTypeImports: true,
      },
      {},
      documents,
    );
    // graphQLTag mode imports the gql function but not the type the documents are cast to.
    this._imports.add(
      this._generateImport(this._parseImport(this.config.documentNodeImport), "DocumentNode", true),
    );
  }

  // gql gathers nested fragments through these, sending each one once.
  override _gql(node: FragmentDefinitionNode | OperationDefinitionNode): string {
    const fragments = this._transformFragments(this._extractFragments(node));
    const text = stripIgnoredCharacters(print(node));
    return `gql(${[JSON.stringify(text), ...fragments].join(", ")})`;
  }

  override getDocumentNodeSignature(resultType: string, variablesTypes: string): string {
    return ` as unknown as DocumentNode<${resultType}, ${variablesTypes}>`;
  }
}

export const plugin: PluginFunction<RawClientSideBasePluginConfig> = (
  schema,
  documents,
  config,
) => {
  const allAst = concatAST(documents.flatMap((file) => (file.document ? [file.document] : [])));
  const fragments: LoadedFragment[] = allAst.definitions
    .filter(
      (definition): definition is FragmentDefinitionNode =>
        definition.kind === Kind.FRAGMENT_DEFINITION,
    )
    .map((fragment) => ({
      node: fragment,
      name: fragment.name.value,
      onType: fragment.typeCondition.name.value,
      isExternal: false,
    }));
  const visitor = new LazyDocumentsVisitor(schema, fragments, config, documents);
  const result = oldVisit(allAst, { leave: visitor });
  return {
    prepend: allAst.definitions.length === 0 ? [] : visitor.getImports(),
    content: [
      visitor.fragments,
      ...result.definitions.filter((definition: unknown) => typeof definition === "string"),
    ].join("\n"),
  };
};
