---
"@team-plain/graphql": minor
---

Add `mutation.changeThreadDiscussionStatus` for moving a thread discussion between `OPEN` and `RESOLVED`, and deprecate `mutation.markThreadDiscussionAsResolved` in favour of it.

Caveat, `WorkflowModel.order` is gone. The API deprecated `Workflow.order` and the SDK does not select deprecated fields, so the regen dropped it. Read `WorkflowModel.position` instead, an opaque lexicographic sort key, and reorder with `mutation.moveWorkflow`. The connection is already returned in `position` order.

Caveat, the regen also changes the broadcast types: `BroadcastSendTargetScope.ALL_TENANTS` becomes `ALL_RECIPIENTS`, and `BroadcastSendTargetInput.recipients` becomes optional. We are aware of this and are shipping it as a minor anyway, because nobody uses broadcasts yet. The types exist in GraphQL, but broadcasts are not a feature anyone should rely on at this point.
