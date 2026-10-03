---
"@team-plain/graphql": minor
---

Regenerate against the current API schema. New method `mutation.createThreadFromSlackMessage`. **No method was removed.**

`createThreadFromSlackMessage({ input: { slackChannelId, slackMessageTimestamp } })` creates a thread from a top-level message in a connected customer Slack channel. It is the trigger for the new `API_ONLY` ingestion mode (`SlackIngestionMode`) and works in every other mode too. Ingestion is asynchronous: `thread` is returned only when the message had already been ingested; otherwise it is null and the thread arrives later via `query.threadBySlackPermalink` or the `thread.thread_created` webhook. Requires `thread:create`. Replies are rejected.

Three other additive fields come along with this snapshot:

- `MachineUser.isAssignableToThreads` — false when custom-agent pricing is on and this machine user is neither a custom agent nor Ari
- `SidekickAvailableTool.configurableArgs[].isMultiValued` — when true the builder may pin several values for that arg
- `isWorkflowTask` on the discussions filter — when true, only the bounded Sidekick tasks started by an `ask_sidekick` workflow step
