---
"@team-plain/graphql": major
---

Add `mutation.changeThreadDiscussionStatus` for moving a thread discussion between `OPEN` and `RESOLVED`, and deprecate `mutation.markThreadDiscussionAsResolved` in favour of it.

Breaking: `WorkflowModel.order` is gone. The API deprecated `Workflow.order` and the SDK does not select deprecated fields, so the regen dropped it. Read `WorkflowModel.position` instead, an opaque lexicographic sort key, and reorder with `mutation.moveWorkflow`. The connection is already returned in `position` order.
