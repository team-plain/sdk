# CLAUDE.md

See [CONTRIBUTING.md](./CONTRIBUTING.md) for architecture, design decisions, project structure, and common tasks.

## Quick Commands

```bash
pnpm install          # Install dependencies
pnpm build            # Build everything (codegen plugin → codegen → SDK)
pnpm typecheck        # Type-check all packages
pnpm format           # Format with biome
pnpm lint             # Lint with biome
pnpm check            # Format + lint with biome (auto-fix)
```

Per-package scripts (codegen, test, etc.) are run via `pnpm --filter <pkg> <script>`.

**Always run `pnpm check` after making any changes.** This auto-fixes formatting and linting issues. CI enforces both via `pnpm format:check` and `pnpm lint`, so unformatted or unlinted code will fail the build.

## File Conventions

- Files prefixed with `_generated_` are auto-generated — don't edit them manually.
- `generate-documents.ts` is a build-time script excluded from the SDK's `tsconfig.json` compilation.
- The codegen plugin uses `toCgPascalCase()` to match `@graphql-codegen`'s naming (acronyms get split: `MSTeams` → `MsTeams`).
- `webhook-schema.ts` in the webhooks package is auto-generated from `webhook-schema.json` — don't edit it manually.

## Gotchas

- **No root-level TypeScript.** The root `package.json` does not have `typescript` in devDependencies. Each package has its own. The `typecheck` script uses `pnpm --filter <pkg> exec tsc --noEmit` to ensure the correct TS version is used per package.
- **CJS interop under `nodenext`.** When importing CJS packages (like `ajv`, `ajv-formats`) in ESM packages with `module: "nodenext"`, default imports may resolve to the module namespace instead of the default export. Use named imports where available (e.g., `import { Ajv } from "ajv"`) or cast the default import. See `packages/webhooks/src/parse.ts` for the pattern.
- **GraphQL types are string literal unions, not enums.** The new SDK's generated types (e.g., `ComponentTextColor`) are string literal unions (`'ERROR' | 'MUTED' | ...`), not TypeScript enums like the old `@team-plain/typescript-sdk` used. No enum-to-string mapping is needed.
- **JSON import attributes.** ESM JSON imports require `with { type: "json" }` syntax (e.g., `import schema from "./schema.json" with { type: "json" }`). This requires TypeScript 5.3+ and `resolveJsonModule: true`.
