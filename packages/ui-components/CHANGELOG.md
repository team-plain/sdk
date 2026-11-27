# @team-plain/ui-components

## 14.0.0

### Major Changes

- 314458c: Regenerate against the current API schema.
  
  **Breaking**
  
  - Type 'WorkflowRule' was removed
  - Type 'WorkflowRuleEdge' was removed
  - Type 'WorkflowRuleConnection' was removed
  - Type 'CreateWorkflowRuleInput' was removed
  - Type 'CreateWorkflowRuleOutput' was removed
  - Type 'UpdateWorkflowRuleInput' was removed
  - Type 'UpdateWorkflowRuleOutput' was removed
  - Type 'ToggleWorkflowRulePublishedInput' was removed
  - Type 'ToggleWorkflowRulePublishedOutput' was removed
  - Type 'DeleteWorkflowRuleInput' was removed
  - Type 'DeleteWorkflowRuleOutput' was removed
  - Type 'TriggerWorkflowRuleInput' was removed
  - Type 'TriggerWorkflowRuleOutput' was removed
  - Type 'PendingSenderDomainDnsRecords' was removed
  - Type 'HelpCenterHeroAlignment' was removed
  - Type 'HelpCenterLinkCard' was removed
  - Type 'HelpCenterLinkCardInput' was removed
  - Type 'HelpCenterPopularTopicColumns' was removed
  - Type 'HelpCenterPopularTopicColumnsInput' was removed
  - Type 'HelpCenterFeaturedHomepageItemType' was removed
  - Type 'HelpCenterFeaturedHomepageItem' was removed
  - Type 'HelpCenterFeaturedHomepageItemInput' was removed
  - Field 'workflowRule' was removed from object type 'Query'
  - Field 'workflowRules' was removed from object type 'Query'
  - Field 'pendingDnsRecords' was removed from object type 'AddWorkspaceAlternateSupportEmailAddressOutput'
  - Field 'createWorkflowRule' was removed from object type 'Mutation'
  - Field 'updateWorkflowRule' was removed from object type 'Mutation'
  - Field 'toggleWorkflowRulePublished' was removed from object type 'Mutation'
  - Field 'deleteWorkflowRule' was removed from object type 'Mutation'
  - Field 'triggerWorkflowRule' was removed from object type 'Mutation'
  - Field 'linkCardsHeading' was removed from object type 'HelpCenter'
  - Field 'linkCards' was removed from object type 'HelpCenter'
  - Field 'isLinkCardsEnabled' was removed from object type 'HelpCenter'
  - Field 'isPopularTopicsEnabled' was removed from object type 'HelpCenter'
  - Field 'popularTopicArticleIds' was removed from object type 'HelpCenter'
  - Field 'popularTopicColumns' was removed from object type 'HelpCenter'
  - Field 'featuredHomepageItems' was removed from object type 'HelpCenter'
  - Field 'heroHeading' was removed from object type 'HelpCenter'
  - Field 'heroSubheading' was removed from object type 'HelpCenter'
  - Field 'heroSearchPlaceholder' was removed from object type 'HelpCenter'
  - Field 'heroAlignment' was removed from object type 'HelpCenter'
  - Field 'isHomepageRedesignEnabled' was removed from object type 'HelpCenter'
  - Field 'isFeatured' was removed from object type 'HelpCenterIndexItem'
  - Field 'isPopularTopic' was removed from object type 'HelpCenterIndexItem'
  - Field 'description' was removed from object type 'HelpCenterArticleGroup'
  - Field 'icon' was removed from object type 'HelpCenterArticleGroup'
  - Field 'isFeatured' was removed from object type 'HelpCenterArticle'
  - Field 'isPopularTopic' was removed from object type 'HelpCenterArticle'
  - Input field 'linkCardsHeading' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'linkCards' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'isLinkCardsEnabled' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'isPopularTopicsEnabled' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'popularTopicArticleIds' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'popularTopicColumns' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'featuredHomepageItems' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'heroHeading' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'heroSubheading' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'heroSearchPlaceholder' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'heroAlignment' was removed from input object type 'UpdateHelpCenterInput'
  - Input field 'isFeatured' was removed from input object type 'UpsertHelpCenterArticleInput'
  - Input field 'isPopularTopic' was removed from input object type 'UpsertHelpCenterArticleInput'
  - Input field 'description' was removed from input object type 'UpdateHelpCenterArticleGroupInput'
  - Input field 'icon' was removed from input object type 'UpdateHelpCenterArticleGroupInput'
  - Input field 'UpdateHelpCenterArticleGroupInput.name' changed type from 'String' to 'String!'
  
  **New values in returned enums**
  
  - Enum value 'ALTERNATE_DOMAINS' was added to enum 'TenantFieldMappingConcept'
  - Enum value 'ALTERNATE_DOMAINS' was added to enum 'AccountFieldMappingConcept'
  
  **New methods**
  
  - Field 'slackUserGroups' was added to object type 'Query'
  - Field 'connectedSlackChannelIngestionSettings' was added to object type 'Query'
  - Field 'threadMetricCapabilities' was added to object type 'Query'
  - Field 'dashboards' was added to object type 'Query'
  - Field 'dashboard' was added to object type 'Query'
  - Field 'rearrangeLabelTypes' was added to object type 'Mutation'
  - Field 'createDashboard' was added to object type 'Mutation'
  - Field 'updateDashboard' was added to object type 'Mutation'
  - Field 'deleteDashboard' was added to object type 'Mutation'
  - Field 'cancelWorkflowExecution' was added to object type 'Mutation'
  - Field 'cancelPendingWorkflowExecutions' was added to object type 'Mutation'
  - Field 'archiveServiceLevelAgreementPolicy' was added to object type 'Mutation'
  - Field 'unarchiveServiceLevelAgreementPolicy' was added to object type 'Mutation'
  - Field 'dismissGeneratedReply' was added to object type 'Mutation'

### Patch Changes

- Updated dependencies [314458c]
  - @team-plain/graphql@4.0.0

## 13.1.0

### Minor Changes

- 58dfbb4: The peer dependency on `@team-plain/graphql` moves from exactly `3.2.0` to `^3.3.0`, so later minor releases of `@team-plain/graphql` install without a peer warning. Upgrade `@team-plain/graphql` to 3.3.0 with this release. The component builders are unchanged.
  
  - `require()` users get CommonJS type declarations (`dist/cjs/*.d.ts`). With `moduleResolution: node16` or `nodenext`, TypeScript used to resolve the ESM declarations for the CommonJS build.
  - The package is marked `"sideEffects": false`, so bundlers can drop what you don't use.
  - Sourcemaps embed their sources. Declaration maps are no longer published.

### Patch Changes

- Updated dependencies [58dfbb4]
  - @team-plain/graphql@3.3.0

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
