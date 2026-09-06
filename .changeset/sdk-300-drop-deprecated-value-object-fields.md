---
"@team-plain/graphql": major
---

The bundled documents no longer select deprecated fields on value-object types, so three fields are gone from the generated result types. **No method is removed, but this is breaking in both directions and you should read the table before upgrading.**

| field | TypeScript | JavaScript | replacement |
| --- | --- | --- | --- |
| `ThreadDiscussionToolCallEntryPayload.isSuccess` | TS2339 at build | `undefined` | `status`: `PENDING`, `SUCCESS` or `ERROR` |
| `ThreadsDisplayOptions.hasLinearIssues` | TS2339 at build | `undefined` | `hasIssueTrackerIssues` |
| `ThreadsDisplayOptions.hasJiraIssues` | TS2339 at build | `undefined` | `hasIssueTrackerIssues` |

**The compile error is the good outcome.** It names the field and finds every call site for you. Plain JavaScript gets no such warning and simply reads `undefined`, which is why this ships as a major: on a caret range `^2.0.0` would have resolved this automatically, and a build would have broken without anyone choosing to upgrade.

`isSuccess` is the one most likely to be read. Do not translate it as `status === 'SUCCESS'` and stop there: the old boolean read false for a call that was still running as well as one that failed, so any code treating `false` as failure was already mislabelling pending calls. Read `status` and handle `PENDING` as its own case.

The generator already skipped deprecated fields everywhere else; the value-object expansion was the one path that did not, which is why these three survived. Deprecated **operations** are untouched, so every method the SDK exposes today still exists.
