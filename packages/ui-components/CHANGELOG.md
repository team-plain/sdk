# @team-plain/ui-components

## 14.0.0

### Major Changes

- 04354f1: Regenerate against the current API schema.
  
  **No longer in the generated result types**
  
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
- 2f61447: Requires `@team-plain/graphql` 4.0.0. The peer dependency moves from 3.2.0 to ^4.0.0, so upgrade both packages together.

### Patch Changes

- Updated dependencies [b9757b8]
- Updated dependencies [700285e]
- Updated dependencies [4eae2d5]
- Updated dependencies [04354f1]
- Updated dependencies [3abc931]
- Updated dependencies [3e418a2]
  - @team-plain/graphql@4.0.0

## 13.0.0

### Patch Changes

- Updated dependencies [ffee322]
  - @team-plain/graphql@3.2.0

## 12.0.1

### Patch Changes

- Updated dependencies [3e77e40]
  - @team-plain/graphql@3.1.1

## 12.0.0

### Patch Changes

- Updated dependencies [824fe05]
  - @team-plain/graphql@3.1.0

## 11.0.0

### Patch Changes

- Updated dependencies [17852be]
  - @team-plain/graphql@3.0.0

## 10.0.0

### Patch Changes

- Updated dependencies [14fcc96]
  - @team-plain/graphql@2.0.0

## 9.0.0

### Patch Changes

- Updated dependencies [17d9f85]
  - @team-plain/graphql@1.7.0

## 8.0.0

### Patch Changes

- Updated dependencies [a22bcd6]
  - @team-plain/graphql@1.6.0

## 7.0.0

### Patch Changes

- Updated dependencies [63db2ef]
  - @team-plain/graphql@1.5.0

## 6.0.0

### Patch Changes

- Updated dependencies [d8ef453]
  - @team-plain/graphql@1.4.0

## 5.0.0

### Patch Changes

- Updated dependencies [52b348d]
  - @team-plain/graphql@1.3.0

## 4.0.1

### Patch Changes

- Updated dependencies [c177ae9]
  - @team-plain/graphql@1.2.1

## 4.0.0

### Minor Changes

- d4ba601: Add DateTime and User UI components

### Patch Changes

- Updated dependencies [d4ba601]
  - @team-plain/graphql@1.2.0

## 3.0.0

### Patch Changes

- Updated dependencies [ea8afe4]
- Updated dependencies [ea8afe4]
  - @team-plain/graphql@1.1.0

## 2.0.1

### Patch Changes

- 7335db4: Add CommonJS support alongside existing ESM output.
- Updated dependencies [7335db4]
  - @team-plain/graphql@1.0.1

## 2.0.0

### Major Changes

- 5a6cf0b: Initial release

### Patch Changes

- Updated dependencies [5a6cf0b]
- Updated dependencies [fa8a952]
  - @team-plain/graphql@1.0.0

## 1.0.0

### Patch Changes

- 823bc91: Test automated release flow.
- Updated dependencies [823bc91]
- Updated dependencies [823bc91]
  - @team-plain/graphql@0.3.0
