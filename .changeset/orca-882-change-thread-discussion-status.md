---
"@team-plain/graphql": major
---

Add `mutation.changeThreadDiscussionStatus` for moving a thread discussion between `OPEN` and `RESOLVED`, and deprecate `mutation.markThreadDiscussionAsResolved` in favour of it.

Breaking: `WorkflowModel.order` is gone. The API deprecated `Workflow.order` and the SDK does not select deprecated fields, so the regen dropped it. Read `WorkflowModel.position` instead, an opaque lexicographic sort key, and reorder with `mutation.moveWorkflow`. The connection is already returned in `position` order.

Breaking: the `BroadcastSendTargetScope` value `ALL_TENANTS` is renamed `ALL_RECIPIENTS`. Rename it at the call site; the meaning is unchanged.

`BroadcastSendTargetInput.recipients` is now optional, so it is safe to leave out when `filters` already names the audience. Existing calls that pass it keep working.
