---
"@team-plain/graphql": minor
---

Regenerate against the current API schema. The API removed the deprecated `isSuccess` field from `ThreadDiscussionToolCallEntryPayload`, so it is gone from the bundled schema and from the exported type of the same name.

**Nothing a caller reads off a response changes, and this is not a second break.** 3.0.0 already stopped selecting `isSuccess`, which removed it from the generated result types and shipped as a major. What is left to remove here is the last two traces: the bundled schema copy and the field on the exported `ThreadDiscussionToolCallEntryPayload` type. No document selected it, so no result type changes.

That exported type is still public API, so code naming `ThreadDiscussionToolCallEntryPayload['isSuccess']` stops compiling with TS2339. Read `status` instead, a `DiscussionToolCallStatus` of `PENDING`, `SUCCESS` or `ERROR`. Do not translate the old boolean as `status === 'SUCCESS'` and stop: `false` covered a call that was still running as well as one that failed, so code treating every `false` as a failure was already mislabelling pending calls.
