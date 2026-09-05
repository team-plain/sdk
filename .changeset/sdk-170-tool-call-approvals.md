---
"@team-plain/graphql": minor
---

Regenerate against the current API schema, which now carries the custom-agent tool call approval flow. Two new methods, `mutation.requestDiscussionToolCallApproval` and `mutation.resolveDiscussionApproval`. **No method was removed.**

A gate is asked for with `requestDiscussionToolCallApproval(discussionId, toolCallId, justification)`, naming a call the agent has already reported as `PENDING` through `upsertDiscussionToolCall`. It is **idempotent**: asking again for the same `toolCallId` returns the existing approval unchanged, so a retry does not open a second card. Several approvals can be open on one discussion at once. A human resolves one with `resolveDiscussionApproval(approvalId, decision, reviewerNote)`, where `decision` is the new `AgentApprovalDecision` (`APPROVED` or `DENIED`, `PENDING` is not accepted) and `reviewerNote` is optional and becomes the denied call's error.

The discussion entry union gains `ThreadDiscussionToolCallApprovalEntryPayload`: `approvalId`, `toolCallId`, `justification`, `status` (`AgentApprovalStatus`: `PENDING`, `APPROVED`, `DENIED`), `reviewerNote`, `resolvedAt`, `resolvedBy`. It is returned by every operation that returns discussion messages.

`ThreadDiscussionToolCallEntryPayload` gains `toolCallId`, and it is **nullable**. It is null on a Sidekick call, which Plain reports itself and does not key by an agent-supplied id, so an approval never matches one. Do not use it as a map key without a null check.

**The change most likely to break a consumer: `ThreadDiscussionAgentStatus` gains `TOOL_CALL_APPROVAL_PENDING`.** It is accepted in filters, where it selects the same discussions as `NEEDS_INPUT`, but **reads still return `NEEDS_INPUT` this release**. A `switch` over this enum with no `default` stops compiling on upgrade even though the new value never arrives yet. Handle both names and map them to the same state.

Note on the generated fragment types: `toolCallId` and `status` appear on the union members under prefixed aliases, for example `threadDiscussionToolCallEntryPayloadToolCallId`, because the two members disagree on those field types and an unaliased union selection fails GraphQL validation. The models un-alias them, so `ThreadDiscussionToolCallEntryPayloadModel.toolCallId` and `.status` read normally. Only code reading the raw fragment type sees the prefixed names.
