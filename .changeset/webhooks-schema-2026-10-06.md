---
"@team-plain/webhooks": minor
---

Update the webhook schema to `2026-10-06`, which adds accounts. Eight new events, nothing removed:

- `account.account_created`, `account.account_updated`, `account.account_deleted`
- `account.account_field_created`, `account.account_field_updated`, `account.account_field_deleted`
- `account.account_membership_changed`
- `discussion.turn_stop_requested`

Service level agreements gain two types, `FIRST_RESOLUTION_TIME` (with `firstResolutionTimeMinutes`) and `TOTAL_RESOLUTION_TIME` (with `totalResolutionTimeMinutes`), so handle them in any exhaustive switch on `type`. Every SLA type also gains optional `policy` and `businessHoursSchedules`; `useBusinessHoursOnly` stays but is deprecated in favour of `businessHoursSchedules`.

The package bundles one schema version at a time, so this release only parses payloads whose `webhookMetadata.webhookTargetVersion` is `2026-10-06`. Move your webhook target to `2026-10-06` when you upgrade, or `parsePlainWebhook` returns `PlainWebhookVersionMismatchError`.
