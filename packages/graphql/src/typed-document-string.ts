import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
import { type DocumentNode, Kind, parse } from "graphql";

/**
 * A generated document: its query text, typed with the operation's result and variables.
 *
 * It also reads as a `DocumentNode`, so code written against the SDK's earlier AST documents, such
 * as another GraphQL client or a call to `print()`, keeps working. The AST is parsed on first
 * access, so documents only ever sent as text never pay for it.
 */
export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>, DocumentNode
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>["__apiType"]>;
  private value: string;
  public __meta__?: Record<string, unknown> | undefined;
  // An own field rather than a getter: graphql's visit() clones a node from its own properties, so
  // print() would lose a kind defined on the prototype.
  readonly kind: DocumentNode["kind"] = Kind.DOCUMENT;
  #ast: DocumentNode | undefined;

  constructor(value: string, __meta__?: Record<string, unknown> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  get definitions(): DocumentNode["definitions"] {
    return this.#parsed().definitions;
  }

  // graphql-tag reads loc.source.body when a document is interpolated into a gql template.
  get loc(): DocumentNode["loc"] {
    return this.#parsed().loc;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }

  #parsed(): DocumentNode {
    this.#ast ??= parse(this.value);
    return this.#ast;
  }
}
