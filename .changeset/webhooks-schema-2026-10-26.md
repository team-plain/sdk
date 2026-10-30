---
"@team-plain/webhooks": minor
---

Update the webhook schema to `2026-10-26`, which adds accounts and agent questions. Nine new events, nothing removed:

- `account.account_created`, `account.account_updated`, `account.account_deleted`
- `account.account_field_created`, `account.account_field_updated`, `account.account_field_deleted`
- `account.account_membership_changed`
- `discussion.turn_stop_requested`
- `discussion.question_resolved`: a person answered or dismissed the card a connected agent opened with `requestDiscussionQuestion`. It carries `questionRequestId`, `status` (`ANSWERED`, `DISMISSED` or `UNKNOWN_QUESTION_STATUS`), the `questions` with their options, the `selections` (`questionId`, `optionIds`, `otherText`), `resolvedBy` and `resolvedAt`.

Service level agreements gain two types, `FIRST_RESOLUTION_TIME` (with `firstResolutionTimeMinutes`) and `TOTAL_RESOLUTION_TIME` (with `totalResolutionTimeMinutes`), so handle them in any exhaustive switch on `type`. Every SLA type also gains optional `policy` and `businessHoursSchedules`; `useBusinessHoursOnly` stays but is deprecated in favour of `businessHoursSchedules`.

The package bundles one schema version at a time, so this release only parses payloads whose `webhookMetadata.webhookTargetVersion` is `2026-10-26`. Move your webhook target to `2026-10-26` when you upgrade, or `parsePlainWebhook` returns `PlainWebhookVersionMismatchError`.
