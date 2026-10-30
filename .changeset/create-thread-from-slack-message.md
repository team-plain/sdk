---
"@team-plain/graphql": minor
---

New method `mutation.createThreadFromSlackMessage({ input: { slackChannelId, slackMessageTimestamp } })` creates a thread from a top-level message in a connected customer Slack channel. It triggers the new `API_ONLY` ingestion mode (`SlackIngestionMode`) and works in the other modes too. Ingestion is asynchronous: `thread` is returned only when the message was already ingested; otherwise it is null and the thread arrives later through `query.threadBySlackPermalink` or the `thread.thread_created` webhook. Requires `thread:create`. Replies are rejected.

Also new in this schema:

- `MachineUser.isAssignableToThreads`: false when custom-agent pricing is on and the machine user is neither a custom agent nor Ari
- `SidekickAvailableTool.configurableArgs[].isMultiValued`: when true, the builder may pin several values for that arg
- `isWorkflowTask` on the discussions filter: when true, only the Sidekick tasks started by an `ask_sidekick` workflow step
