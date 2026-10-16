# @team-plain/ui-components

## 14.0.0

### Major Changes

- 2f61447: Requires `@team-plain/graphql` 4.0.0. The peer dependency moves from 3.2.0 to 4.0.0, so upgrade both packages together.

### Patch Changes

- 818d901: Build the CommonJS output with tsdown instead of tsup. Exports are unchanged.
- 73bfc55: `require()` users now get CommonJS type declarations. With `moduleResolution: node16` or `nodenext`, TypeScript used to resolve ESM declarations for the CommonJS build. `@team-plain/ui-components` and `@team-plain/webhooks` are now marked side-effect free, so bundlers can drop what you don't use.
- 1e0fcfc: Sourcemaps now embed their sources, so stack traces and debuggers resolve to the original TypeScript without it being published. Sourcemaps for the generated GraphQL code are not published.
- Updated dependencies [b9757b8]
- Updated dependencies [818d901]
- Updated dependencies [73bfc55]
- Updated dependencies [700285e]
- Updated dependencies [4eae2d5]
- Updated dependencies [3abc931]
- Updated dependencies [1e0fcfc]
- Updated dependencies [1e0fcfc]
  - @team-plain/graphql@4.0.0

## 13.0.0

### Patch Changes

- Updated dependencies [ffee322]
  - @team-plain/graphql@3.2.0

## 12.0.1

### Patch Changes

- Updated dependencies [3e77e40]
  - @team-plain/graphql@3.1.1

## 12.0.0

### Patch Changes

- Updated dependencies [824fe05]
  - @team-plain/graphql@3.1.0

## 11.0.0

### Patch Changes

- Updated dependencies [17852be]
  - @team-plain/graphql@3.0.0

## 10.0.0

### Patch Changes

- Updated dependencies [14fcc96]
  - @team-plain/graphql@2.0.0

## 9.0.0

### Patch Changes

- Updated dependencies [17d9f85]
  - @team-plain/graphql@1.7.0

## 8.0.0

### Patch Changes

- Updated dependencies [a22bcd6]
  - @team-plain/graphql@1.6.0

## 7.0.0

### Patch Changes

- Updated dependencies [63db2ef]
  - @team-plain/graphql@1.5.0

## 6.0.0

### Patch Changes

- Updated dependencies [d8ef453]
  - @team-plain/graphql@1.4.0

## 5.0.0

### Patch Changes

- Updated dependencies [52b348d]
  - @team-plain/graphql@1.3.0

## 4.0.1

### Patch Changes

- Updated dependencies [c177ae9]
  - @team-plain/graphql@1.2.1

## 4.0.0

### Minor Changes

- d4ba601: Add DateTime and User UI components

### Patch Changes

- Updated dependencies [d4ba601]
  - @team-plain/graphql@1.2.0

## 3.0.0

### Patch Changes

- Updated dependencies [ea8afe4]
- Updated dependencies [ea8afe4]
  - @team-plain/graphql@1.1.0

## 2.0.1

### Patch Changes

- 7335db4: Add CommonJS support alongside existing ESM output.
- Updated dependencies [7335db4]
  - @team-plain/graphql@1.0.1

## 2.0.0

### Major Changes

- 5a6cf0b: Initial release

### Patch Changes

- Updated dependencies [5a6cf0b]
- Updated dependencies [fa8a952]
  - @team-plain/graphql@1.0.0

## 1.0.0

### Patch Changes

- 823bc91: Test automated release flow.
- Updated dependencies [823bc91]
- Updated dependencies [823bc91]
  - @team-plain/graphql@0.3.0
