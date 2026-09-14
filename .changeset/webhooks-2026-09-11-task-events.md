---
"@team-plain/webhooks": minor
---

Update the webhook schema to `2026-09-11`, which adds tasks. Four new events, nothing removed: `task.task_created` (`task`), `task.task_updated` and `task.task_status_transitioned` (both carry `task` and `previousTask`), and `task.task_deleted` (`previousTask` only, no `task`).

`task` carries `id`, `ref`, `title`, `description` (nullable), `status` (`TODO`, `IN_PROGRESS`, `DONE`, `CANCELLED` or the forward-compatible `UNKNOWN_TASK_STATUS`), `priority`, `companyId` and `tenantId` (both nullable), `assignee`, `assignedAt` (nullable), `sourceLinks`, plus the usual `createdAt`/`createdBy`/`updatedAt`/`updatedBy`. **`deletedAt` and `deletedBy` are required but nullable on every task event, not only `task.task_deleted`**, so the keys are always present and are `null` until the task is deleted; do not test for their absence.

`assignee` is `TaskAssignee`: `null`, the forward-compatible `{ type: "UNKNOWN" }`, a full `User`, a full `MachineUser`, or a catch-all `{ id }` shape for assignee kinds the SDK doesn't model yet. `sourceLinks` is an array of `{ id, sourceType, sourceId }`; `sourceType` is `knowledge_gap` or `UNKNOWN_TASK_LINK_SOURCE_TYPE` today, so treat unrecognised values as forward-compatible rather than rejecting them.

Their types are exported as `TaskCreatedPublicEventPayload`, `TaskUpdatedPublicEventPayload`, `TaskStatusTransitionedPublicEventPayload`, `TaskDeletedPublicEventPayload`, `Task`, `TaskAssignee` and `TaskSourceLink`.

The package bundles one schema version at a time, so this release only parses payloads whose `webhookMetadata.webhookTargetVersion` is `2026-09-11`. Move your webhook target to `2026-09-11` when you upgrade, or `parsePlainWebhook` returns `PlainWebhookVersionMismatchError`.
