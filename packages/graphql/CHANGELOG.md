# @team-plain/graphql

## 1.6.0

### Minor Changes

- a22bcd6: Regenerate against the current API schema. Five new methods: `mutation.upsertDiscussionToolCall`, `query.businessHoursSchedule`, `query.businessHoursSchedules`, `mutation.updateBusinessHoursSchedule`, `mutation.deleteBusinessHoursSchedule`. No method was removed.

  Tool call entries changed shape. `ThreadDiscussionToolCallEntryPayloadModel.isSuccess` is gone, replaced by `status`, a `DiscussionToolCallStatus` of `PENDING`, `SUCCESS` or `ERROR`. A boolean cannot express a call that is still running, which is what `upsertDiscussionToolCall` now reports.

  Read `status` directly. Do not translate the old boolean: `isSuccess === true` was `SUCCESS`, but `false` now covers `ERROR` **and** `PENDING`, because an entry used to be written only once the call had finished and an in-flight call now reads false too. Treating every `false` as a failure mislabels running calls as failed.

  `service` and `op` on the same model become nullable. They are null on a call an agent reported, because Plain has no name for it. Both were previously non-null, so a consumer reading them needs a null check.

  Caveat, unchanged from 1.5.0 and repeated here because it still applies: the broadcast types (`BroadcastSendTargetScope.ALL_RECIPIENTS`, optional `BroadcastSendTargetInput.recipients`) are shipped as a minor because nobody uses broadcasts yet. They did not change again in this regen.

## 1.5.0

### Minor Changes

- 63db2ef: Add `mutation.changeThreadDiscussionStatus` for moving a thread discussion between `OPEN` and `RESOLVED`, and deprecate `mutation.markThreadDiscussionAsResolved` in favour of it.

  Caveat, `WorkflowModel.order` is gone. The API deprecated `Workflow.order` and the SDK does not select deprecated fields, so the regen dropped it. Read `WorkflowModel.position` instead, an opaque lexicographic sort key, and reorder with `mutation.moveWorkflow`. The connection is already returned in `position` order.

  Caveat, the regen also changes the broadcast types: `BroadcastSendTargetScope.ALL_TENANTS` becomes `ALL_RECIPIENTS`, and `BroadcastSendTargetInput.recipients` becomes optional. We are aware of this and are shipping it as a minor anyway, because nobody uses broadcasts yet. The types exist in GraphQL, but broadcasts are not a feature anyone should rely on at this point.

## 1.4.0

### Minor Changes

- d8ef453: Update GraphQL schema and regenerate the client, documents, and SDK. Adds the `updateDiscussionAgentStatus` mutation and the `MachineUser.isCustomAgent` field, both needed to build a custom agent.

## 1.3.0

### Minor Changes

- 52b348d: Update GraphQL schema and regenerate the client, documents, and SDK.

## 1.2.1

### Patch Changes

- c177ae9: Fix searchKnowledgeSources missing helpCenterArticle, helpCenter, and indexedDocument fields

## 1.2.0

### Minor Changes

- d4ba601: Add DateTime and User UI components

## 1.1.0

### Minor Changes

- ea8afe4: Update graphql schema

### Patch Changes

- ea8afe4: Correct documentation and node version requirements to allow for node 24

## 1.0.1

### Patch Changes

- 7335db4: Add CommonJS support alongside existing ESM output.

## 1.0.0

### Major Changes

- 5a6cf0b: Initial release

### Minor Changes

- fa8a952: Update GraphQL schema

## 0.3.0

### Minor Changes

- 823bc91: Testing automated release flow.

### Patch Changes

- 823bc91: Test automated release flow.

## 0.2.0

### Minor Changes

- c210b14: Make SDK public.

## 0.1.1

### Patch Changes

- 6ba526d: Test the release process.

  No changes in this release.
