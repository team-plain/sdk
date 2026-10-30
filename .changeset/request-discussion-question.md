---
"@team-plain/graphql": minor
---

Regenerate against the current API schema.

**Connected agents: ask questions and stop turns**

- `mutation.requestDiscussionQuestion({ input: { discussionId, questions } })` asks the people on an in-app discussion 1-4 multiple-choice questions, shown as a card above the message box. Each question takes `question`, `isMultiSelect` and `options: [{ label, description }]`. The discussion moves to `TOOL_CALL_APPROVAL_PENDING` until someone answers or dismisses the card, which emits the `discussion.question_resolved` webhook. Callable by the agent the discussion is bound to.
- `mutation.stopDiscussionTurn({ input })` stops the in-flight turn of an in-app discussion answered by your own agent and emits `discussion.turn_stop_requested`. It was generated earlier but ships for the first time in this release.

**New methods**

- `query.threadByMSTeamsMessage({ msTeamsMessageId })` and `mutation.createThreadFromMSTeamsMessage({ input: { msTeamsConversationId, msTeamsMessageId } })`
- `query.generatedReplyState({ threadId })` and `mutation.requestGeneratedReply({ input: { threadId, timelineEntryId } })`
- `mutation.updateRolePriorityOrder({ input: { roles } })`, with `priority` on `Role` and `CustomRole`
- `mutation.createMcpFeedback({ input: { reason, comment, toolName } })`
- `query.workflowBuilderGuide`

**New fields**

- `OAuthApp.allowedOrigins` and `OAuthApp.usesPkce`, settable on `createOAuthApp` (`allowedOrigins`, `usesPkce`) and `updateOAuthApp` (`allowedOrigins`)
- `ChatApp.businessHoursSchedules`, set with `businessHoursScheduleIds` on `updateChatApp`
- `WorkflowReferences.escalationPathIds`, with a matching `escalationPathIds` filter
- Help center homepage: link cards, popular topics, featured items and hero settings on `HelpCenter` and `updateHelpCenter`; `isFeatured` and `isPopularTopic` on articles; `description` and `icon` on article groups

**Lists the bundled documents used to skip**

Lists of plain objects that have no query of their own are now selected and exposed on the model classes, so these come back where they used to be missing:

- `ThreadDiscussionQuestionEntryPayload.questions`, with each option's `id`, so `requestDiscussionQuestion` returns the pending card
- `BusinessHoursSchedule.slots`
- `CustomRole.scopeDefinitions`
- `ThreadSingleValueMetric.values`, `ThreadTimeSeriesMetric.series` and `TimeSeriesMetric.series`
- `WorkflowExecution.stepExecutions` and `WorkflowTemplate.workflows`
- `ImportJob.importRuns` and `ImportBroadcastAudienceChannelsResult.rows`

**New values in returned unions and enums**

- `MCP` in `AiFeedbackFeature`, with `McpFeedbackDetails` in the `AiFeatureFeedbackDetails` union
- `KnowledgeGapNotificationDetail` in the `InternalNotificationDetail` union

`query.memberSeatCapCheck` is gone from the API. It was added after 3.2.0 and never shipped in a release, so nothing published loses it.
