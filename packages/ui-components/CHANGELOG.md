# @team-plain/ui-components

## 13.1.0

### Minor Changes

- 58dfbb4: The peer dependency on `@team-plain/graphql` moves from exactly `3.2.0` to `^3.3.0`, so later minor releases of `@team-plain/graphql` install without a peer warning. Upgrade `@team-plain/graphql` to 3.3.0 with this release. The component builders are unchanged.
  
  - `require()` users get CommonJS type declarations (`dist/cjs/*.d.ts`). With `moduleResolution: node16` or `nodenext`, TypeScript used to resolve the ESM declarations for the CommonJS build.
  - The package is marked `"sideEffects": false`, so bundlers can drop what you don't use.
  - Sourcemaps embed their sources. Declaration maps are no longer published.

### Patch Changes

- Updated dependencies [58dfbb4]
  - @team-plain/graphql@3.3.0

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
