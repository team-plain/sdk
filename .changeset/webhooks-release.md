---
"@team-plain/webhooks": minor
---

Update the webhook schema from `2026-09-11` to `2026-10-26`.

The package bundles one schema version at a time, so this release only parses payloads whose `webhookMetadata.webhookTargetVersion` is `2026-10-26`. Move your webhook target to `2026-10-26` when you upgrade, or `parsePlainWebhook` returns `PlainWebhookVersionMismatchError`.

**New events**

- `account.account_created`, `account.account_updated`, `account.account_deleted`
- `account.account_field_created`, `account.account_field_updated`, `account.account_field_deleted`
- `account.account_membership_changed`
- `discussion.question_resolved`: a person answered or dismissed a question a connected agent asked with `requestDiscussionQuestion`
- `discussion.turn_stop_requested`: someone asked to stop a connected agent's in-flight turn

**Service level agreements**

- `ServiceLevelAgreement` has two new variants, `FIRST_RESOLUTION_TIME` and `TOTAL_RESOLUTION_TIME`, with `firstResolutionTimeMinutes` and `totalResolutionTimeMinutes`. An exhaustive `switch` on `type` has to handle them.
- `tier` can now be `null`, for an SLA that belongs to a policy. Code that reads `sla.tier.id` needs a null check.
- New optional fields: `policy` and `businessHoursSchedules`. `useBusinessHoursOnly` is deprecated in favour of `businessHoursSchedules`.

**Build and dependencies**

- `ajv` is now `^8.20.0` and `ajv-formats` is `^3.0.1`.
- `require()` users get CommonJS type declarations (`dist/cjs/*.d.ts`). With `moduleResolution: node16` or `nodenext`, TypeScript used to resolve the ESM declarations for the CommonJS build.
- The package is marked `"sideEffects": false`, so bundlers can drop what you don't use.
- Sourcemaps embed their sources. Declaration maps are no longer published.
