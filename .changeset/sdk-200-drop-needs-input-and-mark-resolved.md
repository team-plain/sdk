---
"@team-plain/graphql": major
---

Regenerate against the current API schema. **Two things were removed, both of which can break a consumer, which is why this is a major.**

**`ThreadDiscussionAgentStatus.NEEDS_INPUT` is gone. Use `TOOL_CALL_APPROVAL_PENDING`.** It was deprecated in 1.7.0 and the API has now stopped returning it, so the value can no longer arrive. If you took 1.7.0's advice and handled both names mapped to one state, delete the `NEEDS_INPUT` arm; it is unreachable. A `switch` that still names it stops compiling, which is the loud failure and the one you want. The state itself did not go away, only the old spelling of it.

**`mutation.markThreadDiscussionAsResolved` is gone. Use `mutation.changeThreadDiscussionStatus` with `status: RESOLVED`.** It was deprecated in favour of that method, which does the same thing and can also reopen. `MarkThreadDiscussionAsResolvedInput` and `MarkThreadDiscussionAsResolvedOutput` are removed with it. The replacement takes `threadDiscussionId` and `status`, so a call site migrates by adding the status argument:

```ts
// before
await client.mutations.markThreadDiscussionAsResolved({
  input: { threadDiscussionId },
});

// after
await client.mutations.changeThreadDiscussionStatus({
  input: { threadDiscussionId, status: "RESOLVED" },
});
```

One field was added. `BroadcastSendDeliveriesFilter.searchQuery` narrows a send's deliveries to those whose recipient matches the given text. It is matched case-insensitively and unanchored against the recorded Slack channel name, the Slack channel id and the email address, so a delivery is found by whichever of those identifies it. Additive and optional; omitting it leaves the delivery list unconstrained on that dimension.
