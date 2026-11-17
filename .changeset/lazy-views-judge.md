---
"@team-plain/graphql": major
"@team-plain/ui-components": major
---

Regenerate against the current API schema.

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
