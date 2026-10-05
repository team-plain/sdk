import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    include: ["src/__tests__/**/*.test.ts"],
    // Vitest resolves graphql's development build for code it processes. Processing the schema
    // differ too keeps both on one copy of graphql, which it requires.
    server: { deps: { inline: ["@graphql-inspector/core"] } },
  },
});
