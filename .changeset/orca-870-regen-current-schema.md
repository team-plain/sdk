---
"@team-plain/graphql": minor
---

Regenerate against the current API schema. Five new methods: `mutation.upsertDiscussionToolCall`, `query.businessHoursSchedule`, `query.businessHoursSchedules`, `mutation.updateBusinessHoursSchedule`, `mutation.deleteBusinessHoursSchedule`. No method was removed.

Tool call entries changed shape. `ThreadDiscussionToolCallEntryPayloadModel.isSuccess` is gone, replaced by `status`, a `DiscussionToolCallStatus` of `PENDING`, `SUCCESS` or `ERROR`. A boolean cannot express a call that is still running, which is what `upsertDiscussionToolCall` now reports. Map `isSuccess === true` to `SUCCESS` and `false` to `ERROR`.

`service` and `op` on the same model become nullable. They are null on a call an agent reported, because Plain has no name for it. Both were previously non-null, so a consumer reading them needs a null check.

Caveat, unchanged from 1.5.0 and repeated here because it still applies: the broadcast types (`BroadcastSendTargetScope.ALL_RECIPIENTS`, optional `BroadcastSendTargetInput.recipients`) are shipped as a minor because nobody uses broadcasts yet. They did not change again in this regen.
