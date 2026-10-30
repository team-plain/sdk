---
"@team-plain/graphql": major
---

Regenerate against the current API schema. Adds the Account queries and mutations plus every other operation shipped since the last codegen. No method is removed, but **one field is gone from the generated result types, which is why this is a major.**

| field                                                        | TypeScript      | JavaScript  | replacement              |
| ------------------------------------------------------------ | --------------- | ----------- | ------------------------ |
| `FirstResponseTimeServiceLevelAgreement.useBusinessHoursOnly` | TS2339 at build | `undefined` | `businessHoursSchedules` |
| `NextResponseTimeServiceLevelAgreement.useBusinessHoursOnly`  | TS2339 at build | `undefined` | `businessHoursSchedules` |

The API deprecated `useBusinessHoursOnly` because an SLA can now be tracked against several named business hours schedules rather than a single on/off flag. The bundled documents skip deprecated fields, so it drops out wherever an SLA is returned: `query.tier` and `query.tiers`, the tier and SLA create, update and delete mutations, and SLA status transitions in timeline entries and `importThreadMessages`.

`businessHoursSchedules` is not selected by the bundled documents yet. Until it is, read it with your own query through `PlainGraphQLClient`. An empty list means the SLA is tracked 24/7, the old `useBusinessHoursOnly: false`:

```ts
import { PlainGraphQLClient } from "@team-plain/graphql";
import { parse } from "graphql";

const client = new PlainGraphQLClient({ apiKey });
const data = await client.request(
  parse(`
    query TierSlaSchedules($tierId: ID!) {
      tier(tierId: $tierId) {
        serviceLevelAgreements {
          ... on FirstResponseTimeServiceLevelAgreement { id businessHoursSchedules { id name } }
          ... on NextResponseTimeServiceLevelAgreement { id businessHoursSchedules { id name } }
        }
      }
    }
  `),
  { tierId },
);
```

`mutation.createTestThread` gains an optional `input` (`{ channel }`, defaulting to `CHAT` on the API). Calling it with no arguments still works: the generator now treats an argument with a schema default as optional instead of required.
