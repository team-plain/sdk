---
"@team-plain/graphql": major
"@team-plain/ui-components": major
---

Regenerate against the current API schema.

**Breaking**

- Type 'DemoChannelType' was removed
- Type 'CreateDemoChannelInput' was removed
- Type 'CreateDemoChannelOutput' was removed
- Field 'createDemoChannel' was removed from object type 'Mutation'
- Enum value 'DATA_IMPORTERS' was removed from enum 'FeatureKey'

**New methods**

- Field 'interpolationVariables' was added to object type 'Query'
- Field 'duplicateBroadcast' was added to object type 'Mutation'
- Field 'importBroadcastRecipientUnsubscribes' was added to object type 'Mutation'
- Field 'answerSidekickQuestion' was added to object type 'Mutation'
- Field 'dismissSidekickQuestion' was added to object type 'Mutation'
