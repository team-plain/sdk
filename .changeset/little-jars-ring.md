---
"@team-plain/graphql": minor
---

Regenerate against the current API schema.

**Deprecated fields stay in the SDK.** The SDK now keeps fields the API deprecates, instead of dropping them, and marks them `@deprecated` with the API's reason. The API keeps deprecated fields working; the marker is there to discourage new use. Fields the API deprecated since 3.2.0, such as `Customer.company`, `Thread.tenant` and `Task.tenant`, are therefore still in the result types and models, and code that uses them keeps compiling. They are listed under "Deprecated fields, still available" below.

**Fields deprecated before 3.2.0 are now included.** Earlier releases left out fields that were already deprecated, so these are new in the result types and models, marked `@deprecated`:

- `BillingPlan`: `monthlyPrice`, `yearlyPrice`
- `ComponentDivider`: `spacingSize`
- `ComponentLinkButton`: `url`, `label`
- `ComponentSpacer`: `size`
- `ComponentText`: `color`, `size`
- `Customer`: `status`, `statusChangedAt`, `lastIdleAt`
- `CustomerCardInstanceResponseBodyErrorDetail` and `CustomerCardInstanceStatusCodeErrorDetail`: `responseBody`
- `GeneratedReply`: `text`
- `LinearIssueThreadLink`: `linearIssueUrl`
- `Role`: `isAssignableToCustomer`, `assignableBillingSeats`, `requiresBillableSeat`
- `ThreadDiscussion`: `type`, `slackTeamId`, `slackChannelId`, `slackChannelName`, `slackMessageLink`, `emailRecipients`
- `ThreadDiscussionAgentSessionChannelDetails`: `agentSessionId`
- `ThreadsDisplayOptions`: `hasLinearIssues`, `hasJiraIssues`
- `ThreadStatusDetailLinearUpdated`: `statusChangedAt`, `updatedAt`, `linearIssueId`
- `ThreadStatusDetailNewReply`: `newReplyAt`
- `ThreadStatusDetailReplied`: `repliedAt`, `statusChangedAt`
- `ThreadStatusDetailSnoozed`: `snoozedAt`, `snoozedUntil`, `statusChangedAt`
- `ThreadStatusDetailThreadLinkUpdated`: `updatedAt`
- `ThreadStatusDetailUnsnoozed`: `snoozedAt`, `statusChangedAt`
- `Tier`: `defaultPriority`
- `UpsertTenantFieldSchemaOutput`: `result`
- `Workspace`: `domainName`

`ComponentText.size`, `ComponentSpacer.size` and `ThreadStatusDetailLinearUpdated.linearIssueId` clash with fields of the same name on other members of their union, so in the raw query result types they appear as `componentTextSize`, `componentSpacerSize` and `threadStatusDetailLinearUpdatedLinearIssueId`. The model classes use the field names.

**Unions include their deprecated members.** Union members whose fields are all deprecated are now included: `ThreadStatusDetailSnoozed`, `ThreadStatusDetailUnsnoozed`, `ThreadStatusDetailReplied` and `ThreadStatusDetailLinearUpdated` on `Thread.statusDetail` and on `ThreadStatusTransitionedEntry`, and `ThreadDiscussionAgentSessionChannelDetails` on `ThreadDiscussion.channelDetails`. The API marks these types as no longer supported. An exhaustive `switch` on `__typename` now has to handle them.

**New members in returned unions and interfaces**

- `BillingCommittedCreditBalance` in `BillingCreditBalance` (`BillingSubscription.creditBalances`)
- `ThreadNotificationDetail` and `WebhookTargetNotificationDetail` in `InternalNotificationDetail`
- `TenantFieldTenantReferenceValue` in `TenantFieldValue`
- `ThreadDiscussionQuestionEntryPayload` in `ThreadDiscussionEntryPayload`
- `FirstResolutionTimeServiceLevelAgreement` and `TotalResolutionTimeServiceLevelAgreement`, which implement `ServiceLevelAgreement`

**New values in returned enums**

- Enum value 'CONNECTION_PENDING' was added to enum 'ThreadDiscussionAgentStatus'
- Enum value 'NOTE' was added to enum 'WorkflowStepType'
- Enum value 'USER_SEATS' was added to enum 'FeatureKey'
- Enum value 'committed' was added to enum 'BillingCreditBalanceType'

**New methods**

- Field 'memberSeatCapCheck' was added to object type 'Query'
- Field 'threadTimelineEntry' was added to object type 'Query'
- Field 'oauthApp' was added to object type 'Query'
- Field 'oauthApps' was added to object type 'Query'
- Field 'importerAccountLists' was added to object type 'Query'
- Field 'businessHoursOverride' was added to object type 'Query'
- Field 'importBroadcastAudienceChannels' was added to object type 'Mutation'
- Field 'createOAuthApp' was added to object type 'Mutation'
- Field 'updateOAuthApp' was added to object type 'Mutation'
- Field 'enableOAuthApp' was added to object type 'Mutation'
- Field 'disableOAuthApp' was added to object type 'Mutation'
- Field 'deleteOAuthApp' was added to object type 'Mutation'
- Field 'importAccountFieldSchemasFromService' was added to object type 'Mutation'
- Field 'createBusinessHoursOverride' was added to object type 'Mutation'
- Field 'updateBusinessHoursOverride' was added to object type 'Mutation'
- Field 'deleteBusinessHoursOverride' was added to object type 'Mutation'
- Field 'importAccountFieldSchemas' was added to object type 'Mutation'
- Field 'importAccounts' was added to object type 'Mutation'

**Deprecated methods, still available**

- Field 'Query.companies' is deprecated
- Field 'Query.company' is deprecated
- Field 'Query.searchCompanies' is deprecated
- Field 'Query.tenants' is deprecated
- Field 'Query.tenant' is deprecated
- Field 'Query.tenantFieldSchemas' is deprecated
- Field 'Query.searchTenants' is deprecated
- Field 'Query.importerTenantLists' is deprecated
- Field 'Mutation.updateCustomerCompany' is deprecated
- Field 'Mutation.updateThreadTenant' is deprecated
- Field 'Mutation.createTenant' is deprecated
- Field 'Mutation.upsertTenant' is deprecated
- Field 'Mutation.deleteTenant' is deprecated
- Field 'Mutation.addCustomerToTenants' is deprecated
- Field 'Mutation.removeCustomerFromTenants' is deprecated
- Field 'Mutation.setCustomerTenants' is deprecated
- Field 'Mutation.upsertTenantFieldSchema' is deprecated
- Field 'Mutation.deleteTenantFieldSchema' is deprecated
- Field 'Mutation.upsertTenantField' is deprecated
- Field 'Mutation.deleteTenantField' is deprecated
- Field 'Mutation.setupTenantFieldSchemaMapping' is deprecated
- Field 'Mutation.removeTenantFieldSchemaMapping' is deprecated
- Field 'Mutation.upsertCompany' is deprecated
- Field 'Mutation.deleteCompany' is deprecated
- Field 'Mutation.importTenantFieldSchemasFromService' is deprecated
- Field 'Mutation.updateCompanyTier' is deprecated
- Field 'Mutation.updateTenantTier' is deprecated
- Field 'Mutation.updateThreadChannelAssociationTenantMembershipPolicy' is deprecated
- Field 'Mutation.importTenantFieldSchemas' is deprecated
- Field 'Mutation.importTenants' is deprecated

**Deprecated fields, still available**

- Field 'Customer.company' is deprecated
- Field 'ThreadsDisplayOptions.hasCompany' is deprecated
- Field 'ThreadsDisplayOptions.hasTenants' is deprecated
- Field 'ThreadsDisplayOptions.hasTenantFieldExternalIds' is deprecated
- Field 'SavedThreadsViewFilter.companies' is deprecated
- Field 'SavedThreadsViewFilter.tenants' is deprecated
- Field 'Task.company' is deprecated
- Field 'Task.tenant' is deprecated
- Field 'BroadcastAudienceFilter.tenantIds' is deprecated
- Field 'BroadcastAudienceFilter.tenantFields' is deprecated
- Field 'ThreadLinkGroup.companyMetrics' is deprecated
- Field 'ThreadLinkGroup.tenantMetrics' is deprecated
- Field 'SlackThreadChannelAssociation.companyId' is deprecated
- Field 'SlackThreadChannelAssociation.tenantId' is deprecated
- Field 'SlackThreadChannelAssociation.tenantMembershipPolicy' is deprecated
- Field 'Thread.tenant' is deprecated
- Field 'HelpCenterAccessSettings.tenantIds' is deprecated
- Field 'HelpCenterAccessSettings.companyIds' is deprecated
