---
"@team-plain/graphql": minor
---

Add `mutation.changeThreadDiscussionStatus` for moving a thread discussion between `OPEN` and `RESOLVED`, and deprecate `mutation.markThreadDiscussionAsResolved` in favour of it.

Caveat, `WorkflowModel.order` is gone. The API deprecated `Workflow.order` and the SDK does not select deprecated fields, so the regen dropped it. Read `WorkflowModel.position` instead, an opaque lexicographic sort key, and reorder with `mutation.moveWorkflow`. The connection is already returned in `position` order.

Caveat, the broadcast surface changed: the `BroadcastSendTargetScope` value `ALL_TENANTS` is renamed `ALL_RECIPIENTS` (same meaning, rename it at the call site), and `BroadcastSendTargetInput.recipients` is now optional, so it can be left out when `filters` already names the audience. Broadcasts are pre-release, so this ships as a minor.
