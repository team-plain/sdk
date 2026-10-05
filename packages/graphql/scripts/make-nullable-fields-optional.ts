// GraphQL Codegen 6 only marks a result field optional when it carries @include or @skip, while
// @team-plain/graphql 3.x shipped every nullable field as optional (`reason?: string | null`).
// Applied to the types output only, so the documents sent to the API stay free of the directive.
import type { Types } from "@graphql-codegen/plugin-helpers";
import {
  buildASTSchema,
  type DirectiveNode,
  type DocumentNode,
  isNonNullType,
  Kind,
  TypeInfo,
  visit,
  visitWithTypeInfo,
} from "graphql";

const INCLUDE: DirectiveNode = {
  kind: Kind.DIRECTIVE,
  name: { kind: Kind.NAME, value: "include" },
  arguments: [
    {
      kind: Kind.ARGUMENT,
      name: { kind: Kind.NAME, value: "if" },
      value: { kind: Kind.BOOLEAN, value: true },
    },
  ],
};

export function transform({
  documents,
  schema,
}: {
  documents: Types.DocumentFile[];
  schema: DocumentNode;
}): Types.DocumentFile[] {
  const typeInfo = new TypeInfo(buildASTSchema(schema));
  return documents.map((file) => {
    if (file.document === undefined) return file;
    const document = visit(
      file.document,
      visitWithTypeInfo(typeInfo, {
        Field(node) {
          const field = typeInfo.getFieldDef();
          if (field === null || field === undefined || isNonNullType(field.type)) return undefined;
          return { ...node, directives: [...(node.directives ?? []), INCLUDE] };
        },
      }),
    );
    return { ...file, document };
  });
}
