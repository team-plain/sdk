---
"@team-plain/webhooks": minor
---

Update the webhook schema to `2026-09-06`, which carries the custom-agent tool call approval flow. Two new events, and one new field on the discussion that every discussion event already reports. **Nothing was removed.**

`discussion.tool_call_approval_requested` fires when an agent asks a human to gate a tool call: `approvalId`, `toolCallId`, `justification`, `requestedAt`, `requestedBy`, plus the `discussion`. `discussion.tool_call_approval_resolved` fires on the decision and adds `status`, `resolvedAt`, `resolvedBy` and `reviewerNote`. `status` is `APPROVED`, `DENIED` or the forward-compatible `UNKNOWN_APPROVAL_STATUS`. **`reviewerNote` is required but nullable**, so the key is always present and is `null` when the reviewer left no note; do not test for its absence. Their types are exported as `DiscussionToolCallApprovalRequestedPublicEventPayload` and `DiscussionToolCallApprovalResolvedPublicEventPayload`.

**The field worth reading carefully is `discussion.agentStatus`, because all four discussion events carry it, not only the new two.** It is `UNKNOWN`, `IDLE`, `IN_PROGRESS`, `TOOL_CALL_APPROVAL_PENDING` or `UNKNOWN_DISCUSSION_AGENT_STATUS`. It is optional and the parser does not fill it in: the schema declares `default: "UNKNOWN"`, but Ajv is built without `useDefaults`, so treat an absent value as `UNKNOWN` yourself rather than expecting the string.

On the resolved event `agentStatus` reports the status **after** the decision settled, so an approved call reads `IN_PROGRESS` and not the pending state that the decision just cleared.

The package bundles one schema version at a time, so this release only parses payloads whose `webhookMetadata.webhookTargetVersion` is `2026-09-06`. Move your webhook target to `2026-09-06` when you upgrade, or `parsePlainWebhook` returns `PlainWebhookVersionMismatchError`.
