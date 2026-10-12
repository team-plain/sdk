---
"@team-plain/graphql": minor
---

Regenerate against the current API schema.

**Enum values the API no longer returns**

- Enum value 'DATA_IMPORTERS' was removed from enum 'FeatureKey'

**New values in returned enums**

- Enum value 'TENANT_REFERENCE_TYPE' was added to enum 'TenantFieldType'
- Enum value 'ACCOUNT_REFERENCE_TYPE' was added to enum 'AccountFieldType'
- Enum value 'HELP_CENTERS' was added to enum 'FeatureKey'
- Enum value 'AI_TRIAGE' was added to enum 'CreditSpendKind'
- Enum value 'FREE_BETA' was added to enum 'CreditSpendStatus'

**New methods**

- Field 'interpolationVariables' was added to object type 'Query'
- Field 'duplicateBroadcast' was added to object type 'Mutation'
- Field 'importBroadcastRecipientUnsubscribes' was added to object type 'Mutation'
- Field 'answerSidekickQuestion' was added to object type 'Mutation'
- Field 'dismissSidekickQuestion' was added to object type 'Mutation'
