---
"@team-plain/graphql": minor
---

Regenerate against the current API schema, add accounts and connected-agent operations, and ship smaller, side-effect-free builds with CommonJS type declarations.

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

**Deprecated fields are kept**

The SDK now keeps fields the API deprecates, marked `@deprecated` with the API's reason, instead of leaving them out. Fields that earlier releases left out are now in the result types and models, for example `useBusinessHoursOnly` on service level agreements, `BillingPlan.monthlyPrice` and `.yearlyPrice`, `ComponentText.color` and `.size`, `ComponentLinkButton.url` and `.label`, `Customer.status`, `Tier.defaultPriority` and `Workspace.domainName`. Where such a field clashes with a field of the same name on another member of its union, the raw query result types alias it (for example `componentTextSize`); the model classes use the field name.

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
