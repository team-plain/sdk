# Changesets

Use [Changesets](https://github.com/changesets/changesets) to describe releases for publishable packages.

When your change should ship to npm, run `pnpm changeset` at the repo root, pick **`@team-plain/graphql`**, and write a short summary. The codegen plugin is internal and is not offered in the wizard (`ignore` in `config.json`).

After merge to `main`, the release workflow opens a "Version Packages" PR (or publishes if versions are already bumped). Add `NPM_TOKEN` in repo secrets for publishes.
