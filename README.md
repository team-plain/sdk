# Plain SDK

TypeScript packages for building on [Plain's](https://plain.com) API. This is a monorepo containing the following packages:

| Package | npm | Description |
|---------|-----|-------------|
| [`@team-plain/graphql`](./packages/graphql) | [![npm](https://img.shields.io/npm/v/@team-plain/graphql)](https://www.npmjs.com/package/@team-plain/graphql) | Typed GraphQL client with auto-generated model classes |
| [`@team-plain/ui-components`](./packages/ui-components) | [![npm](https://img.shields.io/npm/v/@team-plain/ui-components)](https://www.npmjs.com/package/@team-plain/ui-components) | UI component builder helpers |
| [`@team-plain/webhooks`](./packages/webhooks) | [![npm](https://img.shields.io/npm/v/@team-plain/webhooks)](https://www.npmjs.com/package/@team-plain/webhooks) | Webhook parsing and signature verification |

Install only what you need — each package is published independently:

```bash
npm install @team-plain/graphql
npm install @team-plain/ui-components  # requires @team-plain/graphql as peer
npm install @team-plain/webhooks       # standalone, no SDK dependency
```

Requires **Node 25+**. Supports both ESM and CJS.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup, project structure, and how the codegen pipeline works.

## License

[MIT](./LICENSE)
