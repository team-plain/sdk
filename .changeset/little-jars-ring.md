---
"@team-plain/graphql": minor
---

Regenerate against the current API schema.

The SDK now keeps fields the API deprecates, marked `@deprecated`, instead of dropping them, so this release adds them back to the result types and models (for example `Customer.company`). Unions also gain their deprecated member types, such as `ThreadStatusDetailLinearUpdated` on `Thread.statusDetail`. The API no longer returns those types, but an exhaustive `switch` on `__typename` sees the new members.

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

- Field 'Customer.tenantMemberships' is deprecated
- Field 'Customer.company' is deprecated
- Field 'ThreadsDisplayOptions.hasCompany' is deprecated
- Field 'ThreadsDisplayOptions.hasTenants' is deprecated
- Field 'ThreadsDisplayOptions.hasTenantFieldExternalIds' is deprecated
- Field 'SavedThreadsViewNestedFilter.companies' is deprecated
- Field 'SavedThreadsViewNestedFilter.tenants' is deprecated
- Field 'SavedThreadsViewNestedFilter.tenantFields' is deprecated
- Field 'SavedThreadsViewFilter.companies' is deprecated
- Field 'SavedThreadsViewFilter.tenants' is deprecated
- Field 'SavedThreadsViewFilter.tenantFields' is deprecated
- Field 'Task.company' is deprecated
- Field 'Task.tenant' is deprecated
- Field 'BroadcastAudienceFilter.tenantIds' is deprecated
- Field 'BroadcastAudienceFilter.tenantFields' is deprecated
- Field 'ThreadLinkGroup.companyMetrics' is deprecated
- Field 'ThreadLinkGroup.tenantMetrics' is deprecated
- Field 'ThreadChannelAssociation.companyId' is deprecated
- Field 'ThreadChannelAssociation.tenantId' is deprecated
- Field 'ThreadChannelAssociation.tenantMembershipPolicy' is deprecated
- Field 'SlackThreadChannelAssociation.companyId' is deprecated
- Field 'SlackThreadChannelAssociation.tenantId' is deprecated
- Field 'SlackThreadChannelAssociation.tenantMembershipPolicy' is deprecated
- Field 'Thread.tenant' is deprecated
- Field 'HelpCenterAccessSettings.tenantIds' is deprecated
- Field 'HelpCenterAccessSettings.companyIds' is deprecated
- Field 'HelpCenterPortalSettingsThreadVisibility.customerCompany' is deprecated
- Field 'HelpCenterPortalSettingsThreadVisibility.overrideCustomerCompany' is deprecated
- Field 'HelpCenterPortalSettingsThreadVisibility.customerTenants' is deprecated
- Field 'HelpCenterPortalSettingsThreadVisibility.overrideCustomerTenants' is deprecated
