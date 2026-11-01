# @team-plain/graphql

## 3.3.0

### Minor Changes

- 58dfbb4: Regenerate against the current API schema, add accounts and connected-agent operations, and ship smaller, side-effect-free builds with CommonJS type declarations.
  
  **New queries**
  
  - Accounts: `account`, `accounts`, `searchAccounts`, `accountFieldSchemas`, `importerAccountLists`
  - Business hours overrides: `businessHoursOverride`, `businessHoursOverrides`
  - Broadcasts: `broadcastRecipientUnsubscribes`
  - OAuth apps: `oauthApp`, `oauthApps`
  - Threads: `threadByMSTeamsMessage`, `threadTimelineEntry`
  - Other: `generatedReplyState`, `interpolationVariables`, `testChannel`, `workflowBuilderGuide`
  
  **New mutations**
  
  - Accounts: `createAccount`, `upsertAccount`, `deleteAccount`, `updateAccountTier`, `addCustomerToAccounts`, `removeCustomerFromAccounts`, `setCustomerAccounts`, `updateThreadAccount`, `updateThreadChannelAssociationAccountMembershipPolicy`, `importAccounts`
  - Account fields: `upsertAccountField`, `deleteAccountField`, `upsertAccountFieldSchema`, `deleteAccountFieldSchema`, `importAccountFieldSchemas`, `importAccountFieldSchemasFromService`, `setupAccountFieldSchemaMapping`, `removeAccountFieldSchemaMapping`
  - Connected agents: `requestDiscussionQuestion` asks the people in a discussion a question and resolves through the `discussion.question_resolved` webhook; `stopDiscussionTurn` records a stop request for an agent's in-flight turn and emits `discussion.turn_stop_requested`
  - Question cards: `answerSidekickQuestion`, `dismissSidekickQuestion`
  - Business hours overrides: `createBusinessHoursOverride`, `updateBusinessHoursOverride`, `deleteBusinessHoursOverride`
  - Broadcasts: `duplicateBroadcast`, `importBroadcastAudienceChannels`, `importBroadcastRecipientUnsubscribes`
  - OAuth apps: `createOAuthApp`, `updateOAuthApp`, `enableOAuthApp`, `disableOAuthApp`, `deleteOAuthApp`
  - Other: `createThreadFromMSTeamsMessage`, `requestGeneratedReply`, `createMcpFeedback`, `createWorkspaceSlackIntegrationFromAuth`, `updateAllMyInternalNotifications`, `updateRolePriorityOrder`
  
  `mutation.createTestThread` takes an optional `input` (`{ channel }`). Calling it with no arguments still works.
  
  **Deprecated, still available**
  
  The API now models tenants and companies as accounts. These keep working and are marked `@deprecated` with the replacement to use:
  
  - Queries: `tenant`, `tenants`, `searchTenants`, `tenantFieldSchemas`, `importerTenantLists`, `company`, `companies`, `searchCompanies`
  - Mutations: `createTenant`, `upsertTenant`, `deleteTenant`, `updateTenantTier`, `addCustomerToTenants`, `removeCustomerFromTenants`, `setCustomerTenants`, `updateThreadTenant`, `updateThreadChannelAssociationTenantMembershipPolicy`, `importTenants`, `upsertTenantField`, `deleteTenantField`, `upsertTenantFieldSchema`, `deleteTenantFieldSchema`, `importTenantFieldSchemas`, `importTenantFieldSchemasFromService`, `setupTenantFieldSchemaMapping`, `removeTenantFieldSchemaMapping`, `upsertCompany`, `deleteCompany`, `updateCompanyTier`, `updateCustomerCompany`
  - Model fields: `Customer.company`, `Thread.tenant`, `Task.tenant`, `Task.company`, `SlackThreadChannelAssociation.tenantId`, `.companyId` and `.tenantMembershipPolicy`
  
  **Deprecated fields are now included**
  
  Up to 3.2.0, the SDK left out fields the API had deprecated. From this release it includes them, marked `@deprecated` with the API's reason, so a field no longer disappears from the SDK when the API deprecates it. Fields that 3.2.0 left out are therefore new in the result types and models, for example `useBusinessHoursOnly` on service level agreements, `BillingPlan.monthlyPrice` and `.yearlyPrice`, `ComponentText.color` and `.size`, `ComponentLinkButton.url` and `.label`, `Customer.status`, `Tier.defaultPriority` and `Workspace.domainName`. Where such a field clashes with a field of the same name on another member of its union, the raw query result types alias it (for example `componentTextSize`); the model classes use the field name.
  
  **New members of returned unions and enums**
  
  An exhaustive `switch` over these now has more cases to handle:
  
  - New model types in unions: `McpFeedbackDetails` (`AiFeedback.details`), `BillingCommittedCreditBalance` (`BillingSubscription.creditBalances`), `KnowledgeGapNotificationDetail`, `ThreadNotificationDetail` and `WebhookTargetNotificationDetail` (`InternalNotification.details`), `TenantFieldTenantReferenceValue` (`TenantField.value`), `ThreadDiscussionQuestionEntryPayload` (`ThreadDiscussionMessage.entry`), `ThreadDiscussionAgentSessionChannelDetails` (`ThreadDiscussion.channelDetails`), and `ThreadStatusDetailLinearUpdated`, `ThreadStatusDetailReplied`, `ThreadStatusDetailSnoozed` and `ThreadStatusDetailUnsnoozed` (`Thread.statusDetail` and the status transition timeline entry)
  - New enum values: `AiFeedbackFeature.MCP`, `BillingCreditBalanceType.committed`, `BroadcastSendDeliveryStatus.SKIPPED_UNSUBSCRIBED`, `BroadcastSendTargetRecipientsEmptyReason.ALL_RECIPIENTS_UNSUBSCRIBED`, `CreditSpendKind.AI_TRIAGE`, `CreditSpendStatus.FREE_BETA`, `DiscussionSourceEntityType.ACCOUNT`, `FeatureKey.HELP_CENTERS` and `USER_SEATS`, `MetricDimensionType.ACCOUNT_FIELD`, `TenantFieldType.TENANT_REFERENCE_TYPE`, `ThreadDiscussionAgentStatus.CONNECTION_PENDING`, `ThreadMetricGroupBy.ACCOUNT` and `ACCOUNT_FIELD`, `ThreadScopePrimitiveType.ACCOUNT`, `ThreadsGroupBy.ACCOUNT`, `TimeSeriesMetricDimensionType.ACCOUNT_FIELD`, `TimeSeriesMetricName.threads_status_reopened_count`, `WorkflowStepType.NOTE`
  - `FeatureKey.DATA_IMPORTERS` is no longer returned by the API and is removed from the type
  
  **Requests, builds and dependencies**
  
  - `PlainGraphQLClient.request()` accepts any `GraphQLDocument`: a generated document, a document from `parse()`, a typed document string, or query text as a plain string. `GraphQLDocument` is exported.
  - Generated documents hold compact query text and are parsed only when their `definitions` are read, so the published package is about half the size (1.1 MB packed instead of 2.1 MB). They are still `DocumentNode` objects.
  - The package is marked `"sideEffects": false`, so bundlers can drop what you don't use.
  - `require()` users get CommonJS type declarations (`dist/cjs/*.d.ts`). With `moduleResolution: node16` or `nodenext`, TypeScript used to resolve the ESM declarations for the CommonJS build.
  - Sourcemaps embed their sources. Sourcemaps for the generated code, and declaration maps, are no longer published.
  - `graphql` is now `^16.14.2 || ^17.0.2` (was `^16.9.0`), so both graphql 16 and 17 are supported.
  - New dependency: `@0no-co/graphql.web`, used to parse and print documents.

## 3.2.0

### Minor Changes

- ffee322: Add opt-in automatic retries for rate limited requests and expose `Retry-After`.

  - `RateLimitError` now carries `retryAfterSeconds` and `limit`, parsed from the `Retry-After` and `X-RateLimit-Limit` response headers when present.
  - New `retry: { maxRetries }` option on `PlainClient` / `PlainGraphQLClient`. Rate limited (429) requests are retried after `Retry-After` plus up to a second of jitter, or with exponential backoff and full jitter when the header is missing. Other errors are never retried.
  - Disabled by default, so existing behaviour is unchanged.

## 3.1.1

### Patch Changes

- 3e77e40: Include the SDK package version in the User-Agent request header.

## 3.1.0

### Minor Changes

- 824fe05: Regenerate against the current API schema. The API removed the deprecated `isSuccess` field from `ThreadDiscussionToolCallEntryPayload`, so it is gone from the bundled schema and from the exported type of the same name.

  **Nothing a caller reads off a response changes, and this is not a second break.** 3.0.0 already stopped selecting `isSuccess`, which removed it from the generated result types and shipped as a major. What is left to remove here is the last two traces: the bundled schema copy and the field on the exported `ThreadDiscussionToolCallEntryPayload` type. No document selected it, so no result type changes.

  That exported type is still public API, so code naming `ThreadDiscussionToolCallEntryPayload['isSuccess']` stops compiling with TS2339. Read `status` instead, a `DiscussionToolCallStatus` of `PENDING`, `SUCCESS` or `ERROR`. Do not translate the old boolean as `status === 'SUCCESS'` and stop: `false` covered a call that was still running as well as one that failed, so code treating every `false` as a failure was already mislabelling pending calls.

## 3.0.0

### Major Changes

- 17852be: The bundled documents no longer select deprecated fields on value-object types, so three fields are gone from the generated result types. **No method is removed, but this is breaking in both directions and you should read the table before upgrading.**

  | field                                            | TypeScript      | JavaScript  | replacement                               |
  | ------------------------------------------------ | --------------- | ----------- | ----------------------------------------- |
  | `ThreadDiscussionToolCallEntryPayload.isSuccess` | TS2339 at build | `undefined` | `status`: `PENDING`, `SUCCESS` or `ERROR` |
  | `ThreadsDisplayOptions.hasLinearIssues`          | TS2339 at build | `undefined` | `hasIssueTrackerIssues`                   |
  | `ThreadsDisplayOptions.hasJiraIssues`            | TS2339 at build | `undefined` | `hasIssueTrackerIssues`                   |

  **The compile error is the good outcome.** It names the field and finds every call site for you. Plain JavaScript gets no such warning and simply reads `undefined`, which is why this ships as a major: on a caret range `^2.0.0` would have resolved this automatically, and a build would have broken without anyone choosing to upgrade.

  `isSuccess` is the one most likely to be read. Do not translate it as `status === 'SUCCESS'` and stop there: the old boolean read false for a call that was still running as well as one that failed, so any code treating `false` as failure was already mislabelling pending calls. Read `status` and handle `PENDING` as its own case.

  The generator already skipped deprecated fields everywhere else; the value-object expansion was the one path that did not, which is why these three survived. Deprecated **operations** are untouched, so every method the SDK exposes today still exists.

## 2.0.0

### Major Changes

- 14fcc96: Regenerate against the current API schema. **Two things were removed, both of which can break a consumer, which is why this is a major.**

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

## 1.7.0

### Minor Changes

- 17d9f85: Regenerate against the current API schema, which now carries the custom-agent tool call approval flow. Two new methods, `mutation.requestDiscussionToolCallApproval` and `mutation.resolveDiscussionApproval`. **No method was removed.**

  A gate is asked for with `requestDiscussionToolCallApproval(discussionId, toolCallId, justification)`, naming a call the agent has already reported as `PENDING` through `upsertDiscussionToolCall`. It is **idempotent**: asking again for the same `toolCallId` returns the existing approval unchanged, so a retry does not open a second card. Several approvals can be open on one discussion at once. A human resolves one with `resolveDiscussionApproval(approvalId, decision, reviewerNote)`, where `decision` is the new `AgentApprovalDecision` (`APPROVED` or `DENIED`, `PENDING` is not accepted) and `reviewerNote` is optional and becomes the denied call's error.

  The discussion entry union gains `ThreadDiscussionToolCallApprovalEntryPayload`: `approvalId`, `toolCallId`, `justification`, `status` (`AgentApprovalStatus`: `PENDING`, `APPROVED`, `DENIED`), `reviewerNote`, `resolvedAt`, `resolvedBy`. It is returned by every operation that returns discussion messages.

  `ThreadDiscussionToolCallEntryPayload` gains `toolCallId`, and it is **nullable**. It is null on a Sidekick call, which Plain reports itself and does not key by an agent-supplied id, so an approval never matches one. Do not use it as a map key without a null check.

  **The change most likely to break a consumer: `ThreadDiscussionAgentStatus` gains `TOOL_CALL_APPROVAL_PENDING`.** It is accepted in filters, where it selects the same discussions as `NEEDS_INPUT`, but **reads still return `NEEDS_INPUT` this release**. A `switch` over this enum with no `default` stops compiling on upgrade even though the new value never arrives yet. Handle both names and map them to the same state.

  Note on the generated fragment types: `toolCallId` and `status` appear on the union members under prefixed aliases, for example `threadDiscussionToolCallEntryPayloadToolCallId`, because the two members disagree on those field types and an unaliased union selection fails GraphQL validation. The models un-alias them, so `ThreadDiscussionToolCallEntryPayloadModel.toolCallId` and `.status` read normally. Only code reading the raw fragment type sees the prefixed names.

## 1.6.0

### Minor Changes

- a22bcd6: Regenerate against the current API schema. Five new methods: `mutation.upsertDiscussionToolCall`, `query.businessHoursSchedule`, `query.businessHoursSchedules`, `mutation.updateBusinessHoursSchedule`, `mutation.deleteBusinessHoursSchedule`. No method was removed.

  Tool call entries changed shape. `ThreadDiscussionToolCallEntryPayloadModel.isSuccess` is gone, replaced by `status`, a `DiscussionToolCallStatus` of `PENDING`, `SUCCESS` or `ERROR`. A boolean cannot express a call that is still running, which is what `upsertDiscussionToolCall` now reports.

  Read `status` directly. Do not translate the old boolean: `isSuccess === true` was `SUCCESS`, but `false` now covers `ERROR` **and** `PENDING`, because an entry used to be written only once the call had finished and an in-flight call now reads false too. Treating every `false` as a failure mislabels running calls as failed.

  `service` and `op` on the same model become nullable. They are null on a call an agent reported, because Plain has no name for it. Both were previously non-null, so a consumer reading them needs a null check.

  Caveat, unchanged from 1.5.0 and repeated here because it still applies: the broadcast types (`BroadcastSendTargetScope.ALL_RECIPIENTS`, optional `BroadcastSendTargetInput.recipients`) are shipped as a minor because nobody uses broadcasts yet. They did not change again in this regen.

## 1.5.0

### Minor Changes

- 63db2ef: Add `mutation.changeThreadDiscussionStatus` for moving a thread discussion between `OPEN` and `RESOLVED`, and deprecate `mutation.markThreadDiscussionAsResolved` in favour of it.

  Caveat, `WorkflowModel.order` is gone. The API deprecated `Workflow.order` and the SDK does not select deprecated fields, so the regen dropped it. Read `WorkflowModel.position` instead, an opaque lexicographic sort key, and reorder with `mutation.moveWorkflow`. The connection is already returned in `position` order.

  Caveat, the regen also changes the broadcast types: `BroadcastSendTargetScope.ALL_TENANTS` becomes `ALL_RECIPIENTS`, and `BroadcastSendTargetInput.recipients` becomes optional. We are aware of this and are shipping it as a minor anyway, because nobody uses broadcasts yet. The types exist in GraphQL, but broadcasts are not a feature anyone should rely on at this point.

## 1.4.0

### Minor Changes

- d8ef453: Update GraphQL schema and regenerate the client, documents, and SDK. Adds the `updateDiscussionAgentStatus` mutation and the `MachineUser.isCustomAgent` field, both needed to build a custom agent.

## 1.3.0

### Minor Changes

- 52b348d: Update GraphQL schema and regenerate the client, documents, and SDK.

## 1.2.1

### Patch Changes

- c177ae9: Fix searchKnowledgeSources missing helpCenterArticle, helpCenter, and indexedDocument fields

## 1.2.0

### Minor Changes

- d4ba601: Add DateTime and User UI components

## 1.1.0

### Minor Changes

- ea8afe4: Update graphql schema

### Patch Changes

- ea8afe4: Correct documentation and node version requirements to allow for node 24

## 1.0.1

### Patch Changes

- 7335db4: Add CommonJS support alongside existing ESM output.

## 1.0.0

### Major Changes

- 5a6cf0b: Initial release

### Minor Changes

- fa8a952: Update GraphQL schema

## 0.3.0

### Minor Changes

- 823bc91: Testing automated release flow.

### Patch Changes

- 823bc91: Test automated release flow.

## 0.2.0

### Minor Changes

- c210b14: Make SDK public.

## 0.1.1

### Patch Changes

- 6ba526d: Test the release process.

  No changes in this release.
