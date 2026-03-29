# Migration Guide: `@team-plain/typescript-sdk` to `@team-plain/graphql`

This guide is intended for AI agents and developers migrating code from the old `@team-plain/typescript-sdk` package to the new `@team-plain/graphql` ecosystem. The new SDK is auto-generated from Plain's GraphQL schema and has a significantly different API surface.

## Package Changes

The old single package has been split into three:

| Old Package | New Package(s) |
|---|---|
| `@team-plain/typescript-sdk` | `@team-plain/graphql` (core SDK) |
| (included in above) | `@team-plain/webhooks` (webhook parsing/verification) |
| (included in above) | `@team-plain/ui-components` (UI component builders) |

### Install

```bash
# Remove old
npm uninstall @team-plain/typescript-sdk

# Install new (pick what you need)
npm install @team-plain/graphql
npm install @team-plain/webhooks        # only if using webhooks
npm install @team-plain/ui-components   # only if using uiComponent builder
```

### Import Changes

```typescript
// OLD: everything from one package
import {
  PlainClient,
  parsePlainWebhook,
  verifyPlainWebhook,
  uiComponent,
  ComponentTextColor,
  ThreadStatus,
  type CustomerPartsFragment,
} from '@team-plain/typescript-sdk';

// NEW: split across packages
import { PlainClient, type ComponentTextColor, type ThreadStatus } from '@team-plain/graphql';
import { parsePlainWebhook, verifyPlainWebhook } from '@team-plain/webhooks';
import { uiComponent } from '@team-plain/ui-components';
```

## Client Instantiation

**No change.** The constructor signature is identical:

```typescript
const client = new PlainClient({
  apiKey: 'your-api-key',
  apiUrl: 'https://core-api.uk.plain.com/graphql/v1', // optional
});
```

## Error Handling (Breaking Change)

This is the **most significant breaking change**. The old SDK used a `Result<T, PlainSDKError>` return type where all errors (including network, auth, and mutation errors) were returned as data. The new SDK **throws exceptions** for network/auth errors and returns **mutation errors as data fields** in the response.

### Old Pattern: Result Type (Never Throws)

```typescript
// OLD: All methods return { data, error } — never throws
const result = await client.getCustomerById({ customerId: '123' });

if (result.error) {
  // Could be: 'forbidden' | 'bad_request' | 'internal_server_error' | 'mutation_error' | 'unknown'
  console.error(result.error.type, result.error.message);
  return;
}

// Access data
const customer = result.data;
```

### New Pattern: Throws + Mutation Error Field

```typescript
// NEW: Network/auth errors throw. Wrap in try/catch.
try {
  const customer = await client.query.customer({ customerId: '123' });
  // customer is a CustomerModel directly — no .data wrapper
} catch (err) {
  if (err instanceof AuthenticationError) { /* 401 */ }
  if (err instanceof ForbiddenError) { /* 403 */ }
  if (err instanceof RateLimitError) { /* 429 */ }
  if (err instanceof NetworkError) { /* other HTTP errors */ }
  if (err instanceof PlainGraphQLError) { /* GraphQL errors */ }
}
```

For mutations, the response includes an `error` field:

```typescript
// NEW: Mutations return the output type directly (which may include error)
try {
  const result = await client.mutation.createThread({ input: { ... } });

  if (result.error) {
    // Mutation-level error (validation, forbidden, internal)
    console.error(result.error.message);
    console.error(result.error.type); // 'VALIDATION' | 'FORBIDDEN' | 'INTERNAL'
    console.error(result.error.fields); // field-level validation errors
    return;
  }

  const thread = result.thread; // success data
} catch (err) {
  // Network/auth errors only
}
```

### Migration Rules for Error Handling

When converting old `result.error` checks:

1. **Wrap the call in `try/catch`** to handle network/auth errors (previously `'forbidden'`, `'bad_request'`, `'internal_server_error'`, `'unknown'`).
2. **For queries:** Remove `result.error` / `result.data` — the return value is the data directly (or a Model instance).
3. **For mutations:** Check `result.error` on the returned output object (this replaces the old `'mutation_error'` type).
4. **Remove `PlainSDKError` type usage.** Replace with `try/catch` using the new error classes: `AuthenticationError`, `ForbiddenError`, `RateLimitError`, `NetworkError`, `PlainGraphQLError`, `InternalError`.

### Error Type Mapping

| Old Error Type (string) | New Equivalent |
|---|---|
| `'forbidden'` | `throw ForbiddenError` or `throw AuthenticationError` |
| `'bad_request'` | `throw PlainGraphQLError` |
| `'internal_server_error'` | `throw InternalError` |
| `'unknown'` | `throw NetworkError` or `throw PlainError` |
| `'mutation_error'` | `result.error` field on mutation response (not thrown) |

## Query Method Changes

### Naming Convention

Method names have changed. The `get` prefix is dropped, and methods use the GraphQL operation name directly:

| Old Method | New Method |
|---|---|
| `getCustomerById({ customerId })` | `client.query.customer({ customerId })` |
| `getCustomerByEmail({ email })` | `client.query.customerByEmail({ email })` |
| `getCustomerByExternalId({ externalId })` | `client.query.customerByExternalId({ externalId })` |
| `getCustomers({ ... })` | `client.query.customers({ ... })` |
| `getThread({ threadId })` | `client.query.thread({ threadId })` |
| `getThreadByRef({ threadRef })` | `client.query.threadByRef({ threadRef })` |
| `getThreadByExternalId({ externalId })` | `client.query.threadByExternalId({ externalId })` |
| `getThreads({ ... })` | `client.query.threads({ ... })` |
| `getUserByEmail({ email })` | `client.query.userByEmail({ email })` |
| `getUserById({ userId })` | `client.query.userById({ userId })` |
| `getLabelTypes({ ... })` | `client.query.labelTypes({ ... })` |
| `getLabelType({ labelTypeId })` | `client.query.labelType({ labelTypeId })` |
| `getMyWorkspace()` | `client.query.myWorkspace()` |
| `getTenantById({ tenantId })` | `client.query.tenant({ tenantId })` |
| `getTenants({ ... })` | `client.query.tenants({ ... })` |
| `searchTenants({ ... })` | `client.query.searchTenants({ ... })` |
| `getCompanies({ ... })` | `client.query.companies({ ... })` |
| `searchCompanies({ ... })` | `client.query.searchCompanies({ ... })` |
| `getTierById({ tierId })` | `client.query.tier({ tierId })` |
| `getTiers({ ... })` | `client.query.tiers({ ... })` |
| `getWebhookTargets({ ... })` | `client.query.webhookTargets({ ... })` |
| `getWebhookTargetById({ ... })` | `client.query.webhookTarget({ ... })` |
| `getCustomerGroupById({ ... })` | `client.query.customerGroup({ ... })` |
| `getCustomerGroups({ ... })` | `client.query.customerGroups({ ... })` |
| `rawRequest({ query, variables })` | Use `PlainGraphQLClient` directly |

### Return Type Changes for Queries

**Single-entity queries** now return Model instances instead of fragment types:

```typescript
// OLD
const result = await client.getCustomerById({ customerId: '123' });
const customer: CustomerPartsFragment | null = result.data;
customer?.fullName;

// NEW
const customer: CustomerModel = await client.query.customer({ customerId: '123' });
customer.fullName;
// Note: throws Error("customer not found") if null, no null return
```

**List queries** now return `PlainConnection<Model>` instead of `{ items, pageInfo, totalCount }`:

```typescript
// OLD
const result = await client.getCustomers({ first: 10 });
const customers: CustomerPartsFragment[] = result.data.customers;
const pageInfo: PageInfoPartsFragment = result.data.pageInfo;
const hasMore = pageInfo.hasNextPage;

// NEW
const connection = await client.query.customers({ first: 10 });
const customers: CustomerModel[] = connection.nodes;
const hasMore = connection.hasNextPage;

// Fetching next page:
// OLD: manually pass cursor
const page2 = await client.getCustomers({ first: 10, after: pageInfo.endCursor });

// NEW: use built-in pagination
const page2 = await connection.fetchNext();
```

## Mutation Method Changes

### Variable Passing Convention

The old SDK unwrapped the `input` field — you passed the input directly. The new SDK passes the full variables object including the `input` key:

```typescript
// OLD: Input is unwrapped — pass the input object directly
await client.createThread({
  customerIdentifier: { customerId: '123' },
  title: 'Help needed',
  components: [{ componentText: { text: 'Hello' } }],
});

// NEW: Pass full variables object with `input` key
await client.mutation.createThread({
  input: {
    customerIdentifier: { customerId: '123' },
    title: 'Help needed',
    components: [{ componentText: { text: 'Hello' } }],
  },
});
```

This applies to **all mutation methods**. The general rule:

```typescript
// OLD
await client.someMethod(inputObject);

// NEW
await client.mutation.someMethod({ input: inputObject });
```

### Return Type Changes for Mutations

The old SDK unwrapped mutation responses and returned the success data directly (with mutation errors converted to the Result error type). The new SDK returns the raw mutation output type which contains both `error` and success fields:

```typescript
// OLD
const result = await client.upsertCustomer({
  identifier: { emailAddress: 'test@example.com' },
  onCreate: { fullName: 'Test', email: { email: 'test@example.com', isVerified: false } },
  onUpdate: {},
});
if (result.error) {
  // Mutation errors are here (type: 'mutation_error')
  console.error(result.error.message);
} else {
  const customer = result.data.customer;
  const upsertResult = result.data.result; // 'CREATED' | 'UPDATED' | 'NOOP'
}

// NEW
try {
  const result = await client.mutation.upsertCustomer({
    input: {
      identifier: { emailAddress: 'test@example.com' },
      onCreate: { fullName: 'Test', email: { email: 'test@example.com', isVerified: false } },
      onUpdate: {},
    },
  });

  if (result.error) {
    console.error(result.error.message);
    return;
  }

  const customer = result.customer;
  const upsertResult = result.result; // 'CREATED' | 'UPDATED' | 'NOOP'
} catch (err) {
  // Network/auth errors only
}
```

### Mutation Method Name Mapping

Most mutation method names are unchanged:

| Old Method | New Method | Notes |
|---|---|---|
| `upsertCustomer(input)` | `client.mutation.upsertCustomer({ input })` | Wrap in `{ input }` |
| `deleteCustomer(input)` | `client.mutation.deleteCustomer({ input })` | |
| `createThread(input)` | `client.mutation.createThread({ input })` | |
| `assignThread(input)` | `client.mutation.assignThread({ input })` | |
| `unassignThread(input)` | `client.mutation.unassignThread({ input })` | |
| `changeThreadPriority(input)` | `client.mutation.changeThreadPriority({ input })` | |
| `markThreadAsDone(input)` | `client.mutation.markThreadAsDone({ input })` | |
| `markThreadAsTodo(input)` | `client.mutation.markThreadAsTodo({ input })` | |
| `snoozeThread(input)` | `client.mutation.snoozeThread({ input })` | |
| `addLabels(input)` | `client.mutation.addLabels({ input })` | |
| `removeLabels(input)` | `client.mutation.removeLabels({ input })` | |
| `sendNewEmail(input)` | `client.mutation.sendNewEmail({ input })` | |
| `replyToEmail(input)` | `client.mutation.replyToEmail({ input })` | |
| `replyToThread(input)` | `client.mutation.replyToThread({ input })` | |
| `sendChat(input)` | `client.mutation.sendChat({ input })` | |
| `sendCustomerChat(input)` | `client.mutation.sendCustomerChat({ input })` | |
| `createNote(input)` | `client.mutation.createNote({ input })` | |
| `upsertCustomer(input)` | `client.mutation.upsertCustomer({ input })` | |
| `upsertTenant(input)` | `client.mutation.upsertTenant({ input })` | |
| `upsertCompany(input)` | `client.mutation.upsertCompany({ input })` | |
| `createCustomerEvent(input)` | `client.mutation.createCustomerEvent({ input })` | |
| `createThreadEvent(input)` | `client.mutation.createThreadEvent({ input })` | |
| `createWebhookTarget(input)` | `client.mutation.createWebhookTarget({ input })` | |
| `updateWebhookTarget(input)` | `client.mutation.updateWebhookTarget({ input })` | |
| `deleteWebhookTarget(input)` | `client.mutation.deleteWebhookTarget({ input })` | |
| `createCustomerCardConfig(input)` | `client.mutation.createCustomerCardConfig({ input })` | |
| `updateCustomerCardConfig(input)` | `client.mutation.updateCustomerCardConfig({ input })` | |
| `deleteCustomerCardConfig(input)` | `client.mutation.deleteCustomerCardConfig({ input })` | |
| `upsertThreadField(input)` | `client.mutation.upsertThreadField({ input })` | |
| `deleteThreadField(input)` | `client.mutation.deleteThreadField({ input })` | |
| `createAttachmentUploadUrl(input)` | `client.mutation.createAttachmentUploadUrl({ input })` | |
| `createLabelType(input)` | `client.mutation.createLabelType({ input })` | |
| `archiveLabelType(input)` | `client.mutation.archiveLabelType({ input })` | |
| `addCustomerToCustomerGroups(input)` | `client.mutation.addCustomerToCustomerGroups({ input })` | |
| `removeCustomerFromCustomerGroups(input)` | `client.mutation.removeCustomerFromCustomerGroups({ input })` | |
| `setCustomerTenants(input)` | `client.mutation.setCustomerTenants({ input })` | |
| `addCustomerToTenants(input)` | `client.mutation.addCustomerToTenants({ input })` | |
| `removeCustomerFromTenants(input)` | `client.mutation.removeCustomerFromTenants({ input })` | |
| `updateCustomerCompany(input)` | `client.mutation.updateCustomerCompany({ input })` | |
| `addMembersToTier(input)` | `client.mutation.addMembersToTier({ input })` | |
| `removeMembersFromTier(input)` | `client.mutation.removeMembersFromTier({ input })` | |
| `updateTenantTier(input)` | `client.mutation.updateTenantTier({ input })` | |
| `updateCompanyTier(input)` | `client.mutation.updateCompanyTier({ input })` | |
| `createKnowledgeSource(input)` | `client.mutation.createKnowledgeSource({ input })` | |
| `indexDocument(input)` | `client.mutation.createIndexedDocument({ input })` | Renamed |

## Enums: TypeScript Enums to String Literal Unions

The old SDK exported TypeScript `enum` objects. The new SDK uses string literal union types. The values are the same, but you can no longer reference them as `EnumName.Value`.

```typescript
// OLD: TypeScript enums (runtime objects)
import { ComponentTextColor, ThreadStatus } from '@team-plain/typescript-sdk';

const color = ComponentTextColor.Error;  // ComponentTextColor.Error === 'ERROR'
const status = ThreadStatus.Todo;        // ThreadStatus.Todo === 'TODO'

// NEW: String literal unions (type-only, no runtime object)
import type { ComponentTextColor, ThreadStatus } from '@team-plain/graphql';

const color: ComponentTextColor = 'ERROR';   // Use string literals directly
const status: ThreadStatus = 'TODO';
```

### Migration Rule for Enums

Replace all `EnumName.Value` references with the equivalent string literal:

| Old Usage | New Usage |
|---|---|
| `ComponentTextColor.Error` | `'ERROR'` |
| `ComponentTextColor.Muted` | `'MUTED'` |
| `ComponentTextColor.Normal` | `'NORMAL'` |
| `ComponentTextColor.Success` | `'SUCCESS'` |
| `ComponentTextColor.Warning` | `'WARNING'` |
| `ComponentTextSize.S` | `'S'` |
| `ComponentTextSize.M` | `'M'` |
| `ComponentTextSize.L` | `'L'` |
| `ThreadStatus.Todo` | `'TODO'` |
| `ThreadStatus.Done` | `'DONE'` |
| `ThreadStatus.Snoozed` | `'SNOOZED'` |
| `SortDirection.Asc` | `'ASC'` |
| `SortDirection.Desc` | `'DESC'` |
| `UpsertResult.Created` | `'CREATED'` |
| `UpsertResult.Updated` | `'UPDATED'` |
| `UpsertResult.Noop` | `'NOOP'` |
| `MutationErrorType.Validation` | `'VALIDATION'` |
| `MutationErrorType.Forbidden` | `'FORBIDDEN'` |
| `MutationErrorType.Internal` | `'INTERNAL'` |

**General pattern:** The enum member name in PascalCase maps to its SCREAMING_SNAKE_CASE string value. If unsure, the string value is always the GraphQL enum value.

**Important:** Since these are now type-only exports, change `import { ... }` to `import type { ... }` when importing only enum types. If you also import runtime values (like `PlainClient`), use a mixed import:

```typescript
import { PlainClient } from '@team-plain/graphql';
import type { ThreadStatus, ComponentTextColor } from '@team-plain/graphql';
```

## Type Changes

### Fragment Types to Model Classes

The old SDK returned plain data objects typed as `*PartsFragment`. The new SDK returns Model class instances with the same fields as properties, plus lazy-loaded relation getters.

```typescript
// OLD
const customer: CustomerPartsFragment = result.data;
customer.fullName;
customer.email;

// NEW
const customer: CustomerModel = await client.query.customer({ customerId: '123' });
customer.fullName;
customer.email;

// NEW: Relations are lazy-loaded via getters (returns Promise)
const tenant = await customer.tenant; // Makes a separate API call
```

**If your code passes return values to functions typed with `*PartsFragment`**, update those function signatures to accept Model instances or extract the data you need. Model classes expose the same scalar fields as properties but relation access is async.

### Removed Types

The following types from the old SDK no longer exist as named exports. Use the new equivalents:

| Old Type | New Equivalent |
|---|---|
| `PlainSDKError` | Use `try/catch` with error classes |
| `BadRequestError` | `PlainGraphQLError` (thrown) |
| `ForbiddenError` (type) | `ForbiddenError` (class, thrown) |
| `InternalServerError` (type) | `InternalError` (class, thrown) |
| `UnknownError` (type) | `NetworkError` or `PlainError` (class, thrown) |
| `MutationError` (from error.ts) | `result.error` field on mutation output |
| `PageInfoPartsFragment` | `PageInfoData` (from connection module) |
| `Result<T, U>` | Not needed — queries return `T` directly |
| `*PartsFragment` types | `*FieldsFragment` types or Model classes |

## UI Components (`uiComponent`)

The `uiComponent` builder API is **unchanged** but now lives in a separate package:

```typescript
// OLD
import { uiComponent } from '@team-plain/typescript-sdk';

// NEW
import { uiComponent } from '@team-plain/ui-components';
```

The builder functions accept the same arguments and return the same `ComponentInput` shapes. The `ComponentInput` type itself is now exported from `@team-plain/graphql`.

**Note:** `@team-plain/ui-components` has `@team-plain/graphql` as a peer dependency, so install both.

## Webhooks

The webhook API is **unchanged** but now lives in a separate package:

```typescript
// OLD
import {
  parsePlainWebhook,
  verifyPlainWebhook,
  PlainWebhookError,
} from '@team-plain/typescript-sdk';

// NEW
import {
  parsePlainWebhook,
  verifyPlainWebhook,
  PlainWebhookError,
} from '@team-plain/webhooks';
```

Function signatures, error types, and payload types are the same. The `@team-plain/webhooks` package is self-contained with no dependency on `@team-plain/graphql`.

## Pagination

### Old Pattern

```typescript
const result = await client.getCustomers({ first: 25 });
if (result.error) return;

const customers = result.data.customers;       // CustomerPartsFragment[]
const pageInfo = result.data.pageInfo;          // { hasNextPage, endCursor, ... }
const total = result.data.totalCount;           // number

// Manual cursor pagination
if (pageInfo.hasNextPage) {
  const page2 = await client.getCustomers({ first: 25, after: pageInfo.endCursor });
}
```

### New Pattern

```typescript
const connection = await client.query.customers({ first: 25 });

const customers = connection.nodes;             // CustomerModel[]
const hasMore = connection.hasNextPage;         // boolean
const total = connection.totalCount;            // number | undefined

// Built-in pagination
if (connection.hasNextPage) {
  const page2 = await connection.fetchNext();   // PlainConnection<CustomerModel> | undefined
}
```

## Step-by-Step Migration Checklist

1. **Update `package.json`:** Replace `@team-plain/typescript-sdk` with `@team-plain/graphql` (and `@team-plain/webhooks` / `@team-plain/ui-components` if used).

2. **Update imports:** Change all `from '@team-plain/typescript-sdk'` to the appropriate new package.

3. **Convert enum usage:** Replace all `EnumName.Member` with the string literal equivalent (e.g., `ThreadStatus.Todo` to `'TODO'`). Change enum imports to `import type`.

4. **Convert error handling:** Wrap SDK calls in `try/catch` for network/auth errors. For mutations, check `result.error` on the response. Remove all `result.data` / `result.error` Result-type patterns from query calls.

5. **Update query method names:** Drop the `get` prefix and use `client.query.*` (e.g., `client.getCustomerById(...)` to `client.query.customer(...)`).

6. **Wrap mutation inputs:** Change `client.method(input)` to `client.mutation.method({ input })`.

7. **Update mutation return handling:** Old: `result.data.customer`. New: `result.customer` (access fields directly on the output object, no `.data` wrapper).

8. **Update pagination code:** Replace manual cursor passing with `connection.fetchNext()` / `connection.fetchPrevious()`. Replace `result.data.items` with `connection.nodes`.

9. **Update type annotations:** Replace `*PartsFragment` types with Model classes or `*FieldsFragment` types where needed.

10. **Test thoroughly.** The error handling changes especially can cause subtle bugs if not fully converted.

## Quick Reference: Full Before/After Example

### Before (Old SDK)

```typescript
import {
  PlainClient,
  ThreadStatus,
  type CustomerPartsFragment,
  type PlainSDKError,
} from '@team-plain/typescript-sdk';

const client = new PlainClient({ apiKey: 'key' });

async function handleCustomer(email: string) {
  const customerResult = await client.getCustomerByEmail({ email });
  if (customerResult.error) {
    if (customerResult.error.type === 'forbidden') {
      console.error('Auth error');
    }
    return;
  }

  const customer: CustomerPartsFragment | null = customerResult.data;
  if (!customer) return;

  const threadResult = await client.createThread({
    customerIdentifier: { customerId: customer.id },
    title: 'New thread',
    components: [{ componentText: { text: 'Hello' } }],
  });

  if (threadResult.error) {
    if (threadResult.error.type === 'mutation_error') {
      console.error('Validation:', threadResult.error.errorDetails);
    }
    return;
  }

  console.log('Created thread:', threadResult.data.id);
}
```

### After (New SDK)

```typescript
import {
  PlainClient,
  ForbiddenError,
  AuthenticationError,
} from '@team-plain/graphql';
import type { ThreadStatus } from '@team-plain/graphql';

const client = new PlainClient({ apiKey: 'key' });

async function handleCustomer(email: string) {
  try {
    const customer = await client.query.customerByEmail({ email });

    const result = await client.mutation.createThread({
      input: {
        customerIdentifier: { customerId: customer.id },
        title: 'New thread',
        components: [{ componentText: { text: 'Hello' } }],
      },
    });

    if (result.error) {
      console.error('Validation:', result.error);
      return;
    }

    console.log('Created thread:', result.thread?.id);
  } catch (err) {
    if (err instanceof ForbiddenError || err instanceof AuthenticationError) {
      console.error('Auth error');
      return;
    }
    throw err;
  }
}
```
