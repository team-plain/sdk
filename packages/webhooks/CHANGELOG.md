# @team-plain/webhooks

## 1.9.0

### Minor Changes

- 1f854d5: Update the webhook schema to `2026-09-02`. Adds `workspaceFiles` to the message on `discussion.message_created`, so a handler can see the files a custom agent attached to the message it just sent.

  Each entry carries `id`, `fileName`, `fileExtension`, `fileMimeType` and `fileSizeBytes`, all required on an entry. **The array itself is optional and the parser does not fill it in.** The schema declares `default: []`, but `parsePlainWebhook` builds Ajv without `useDefaults`, so an absent array stays absent and the generated type is `workspaceFiles?`. Read it as `message.workspaceFiles ?? []`.

  The package bundles one schema version at a time, so this release only parses payloads whose `webhookMetadata.webhookTargetVersion` is the version below. Move your webhook target forward when you upgrade, or `parsePlainWebhook` returns `PlainWebhookVersionMismatchError`.

- 1f854d5: Update the webhook schema to `2026-09-06`, which carries the custom-agent tool call approval flow. Two new events, and one new field on the discussion that every discussion event already reports. **Nothing was removed.**

  `discussion.tool_call_approval_requested` fires when an agent asks a human to gate a tool call: `approvalId`, `toolCallId`, `justification`, `requestedAt`, `requestedBy`, plus the `discussion`. `discussion.tool_call_approval_resolved` fires on the decision and adds `status`, `resolvedAt`, `resolvedBy` and `reviewerNote`. `status` is `APPROVED`, `DENIED` or the forward-compatible `UNKNOWN_APPROVAL_STATUS`. **`reviewerNote` is required but nullable**, so the key is always present and is `null` when the reviewer left no note; do not test for its absence. Their types are exported as `DiscussionToolCallApprovalRequestedPublicEventPayload` and `DiscussionToolCallApprovalResolvedPublicEventPayload`.

  **The field worth reading carefully is `discussion.agentStatus`, because all four discussion events carry it, not only the new two.** It is `UNKNOWN`, `IDLE`, `IN_PROGRESS`, `TOOL_CALL_APPROVAL_PENDING` or `UNKNOWN_DISCUSSION_AGENT_STATUS`. It is optional and the parser does not fill it in: the schema declares `default: "UNKNOWN"`, but Ajv is built without `useDefaults`, so treat an absent value as `UNKNOWN` yourself rather than expecting the string.

  On the resolved event `agentStatus` reports the status **after** the decision settled, so an approved call reads `IN_PROGRESS` and not the pending state that the decision just cleared.

  The package bundles one schema version at a time, so this release only parses payloads whose `webhookMetadata.webhookTargetVersion` is `2026-09-06`. Move your webhook target to `2026-09-06` when you upgrade, or `parsePlainWebhook` returns `PlainWebhookVersionMismatchError`.

## 1.8.0

### Minor Changes

- 469ce0c: Update webhook schema to 2026-08-25. Adds the `thread.thread_locked` event and exports its `ThreadLockedPublicEventPayload` type.
- 3af0c54: Update webhook schema to 2026-08-31. Adds the `discussion.discussion_created` event and exports its `DiscussionCreatedPublicEventPayload` and `Discussion` types.

## 1.7.1

### Patch Changes

- d1726e2: Compare webhook signatures with `timingSafeEqual` instead of `!==`, so verification no longer leaks how many leading bytes of a guess were correct.

## 1.7.0

### Minor Changes

- a02211a: Export every type generated from the webhook schema. The barrel export named them by hand and had fallen 83 types behind `webhook-schema.ts`, so `Actor`, `Thread`, `Customer`, and 11 payload types shipped in the build but could not be imported.
- a02211a: Name the Slack reaction type `SlackReaction` instead of `Items`. The shape is an inline anonymous object in the schema, so codegen had been naming it after the JSON Schema `items` keyword.

## 1.6.0

### Minor Changes

- d8ef453: Update webhook schema to 2026-08-19. Adds the `discussion.message_created` event and exports its `DiscussionMessageCreatedPublicEventPayload` type.

## 1.5.0

### Minor Changes

- 0a0de6d: Update webhook schema to 2026-07-14. Adds the `thread.note_mention_created` event.

## 1.4.0

### Minor Changes

- edef4d2: Update webhook schema to 2026-07-07.

## 1.3.0

### Minor Changes

- cdf2f42: Update webhook schema.

## 1.2.0

### Minor Changes

- ea8afe4: Update graphql schema

### Patch Changes

- ea8afe4: Correct documentation and node version requirements to allow for node 24

## 1.1.0

### Minor Changes

- 9ae69c6: Update webhook schema to version `2026-04-21`. The `thread.slack_message_updated` payload now includes an optional `reactionChange` field (`{ changeType: 'ADDED' | 'REMOVED' | 'UNKNOWN_SLACK_REACTION_CHANGE_TYPE'; reaction }`) describing which reaction was added or removed. Webhook targets must be on version `2026-04-21` to parse with this SDK.

## 1.0.1

### Patch Changes

- 7335db4: Add CommonJS support alongside existing ESM output.

## 1.0.0

### Major Changes

- 5a6cf0b: Initial release

## 0.2.0

### Minor Changes

- af22f5f: Update webhooks parsing to latest webhook version.

## 0.1.1

### Patch Changes

- 823bc91: Test automated release flow.
