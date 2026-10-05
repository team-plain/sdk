---
"@team-plain/graphql": minor
---

Regenerate against the current API schema. Adds the Account queries and mutations plus every other operation shipped since the last codegen. No method or result field is removed.

`useBusinessHoursOnly` on `FirstResponseTimeServiceLevelAgreement` and `NextResponseTimeServiceLevelAgreement` is now deprecated in the API, because an SLA can be tracked against several named business hours schedules rather than a single on/off flag. The bundled documents still select it so existing code keeps working. Its replacement, `businessHoursSchedules`, is not selected yet; until it is, read it with your own query through `PlainGraphQLClient`. An empty list means the SLA is tracked 24/7, the old `useBusinessHoursOnly: false`:

```ts
import { PlainGraphQLClient } from "@team-plain/graphql";

const client = new PlainGraphQLClient({ apiKey });
const data = await client.request<{
  tier: { serviceLevelAgreements: Array<{ id: string; businessHoursSchedules?: Array<{ id: string; name: string }> }> } | null;
}>(
  `query TierSlaSchedules($tierId: ID!) {
    tier(tierId: $tierId) {
      serviceLevelAgreements {
        ... on FirstResponseTimeServiceLevelAgreement { id businessHoursSchedules { id name } }
        ... on NextResponseTimeServiceLevelAgreement { id businessHoursSchedules { id name } }
      }
    }
  }`,
  { tierId },
);
```

`mutation.createTestThread` gains an optional `input` (`{ channel }`, defaulting to `CHAT` on the API). Calling it with no arguments still works: the generator now treats an argument with a schema default as optional instead of required.
