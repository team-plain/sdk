---
"@team-plain/graphql": minor
---

Merged-thread timeline entries now include the child message's content.

`MergedThreadMessageEntry.childTimelineEntry` was selected as `{ id }` only, and the
generated lazy-loading getter for it could never resolve — it passed the timeline entry's
id as `customerId` and omitted the required `timelineEntryId`. Reading a parent thread's
timeline therefore surfaced merged replies with no message content, and there was no way
to reach it from the parent.

`childTimelineEntry` is now inlined and exposed as a plain property on
`MergedThreadMessageEntryModel`, so the child message (subject, text, markdown, actor)
arrives with the parent thread's timeline.

More generally, a relation is only lazy-loaded when its root query is satisfiable from an
id alone. Root queries taking several required arguments are inlined instead of emitting a
getter that cannot resolve.
