import { Kind, type OperationDefinitionNode, parse, print } from "graphql";
import { describe, expect, it } from "vitest";
import {
  ThreadDiscussionMessageFieldsFragmentDoc,
  ThreadParticipantsDocument,
  ThreadTimelineEntriesDocument,
} from "../index.js";

const rootField = (document: { toString(): string }) => {
  const operation = parse(document.toString()).definitions.find(
    (d): d is OperationDefinitionNode => d.kind === Kind.OPERATION_DEFINITION,
  );
  const field = operation?.selectionSet.selections[0];
  return field?.kind === Kind.FIELD
    ? { name: field.name.value, args: field.arguments?.map((a) => a.name.value) }
    : undefined;
};

describe("sub-connection documents", () => {
  // Thread models page through thread(threadId:), not a lookup like threadByMSTeamsMessage(ID!).
  it.each([
    ["ThreadTimelineEntries", ThreadTimelineEntriesDocument],
    ["ThreadParticipants", ThreadParticipantsDocument],
  ])("%s goes through the canonical root query", (_, document) => {
    expect(rootField(document)).toEqual({ name: "thread", args: ["threadId"] });
  });
});

describe("union member selections", () => {
  // The model for a question card entry reads questions, so the inline union selection needs it too.
  it("selects a question card's questions and option ids in a discussion message entry", () => {
    const fragment = print(parse(ThreadDiscussionMessageFieldsFragmentDoc.toString()));
    expect(fragment).toMatch(
      /on ThreadDiscussionQuestionEntryPayload \{[^}]*questions \{\s+id\s+question\s+isMultiSelect\s+options \{\s+id\s+label/,
    );
  });
});
