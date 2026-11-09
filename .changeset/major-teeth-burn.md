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
- Field 'workflowRule' was removed from object type 'Query'
- Field 'workflowRules' was removed from object type 'Query'
- Field 'pendingDnsRecords' was removed from object type 'AddWorkspaceAlternateSupportEmailAddressOutput'
- Field 'createWorkflowRule' was removed from object type 'Mutation'
- Field 'updateWorkflowRule' was removed from object type 'Mutation'
- Field 'toggleWorkflowRulePublished' was removed from object type 'Mutation'
- Field 'deleteWorkflowRule' was removed from object type 'Mutation'
- Field 'triggerWorkflowRule' was removed from object type 'Mutation'

**New methods**

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
