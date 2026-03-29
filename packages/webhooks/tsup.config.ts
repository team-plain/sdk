import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts", "!src/__tests__/**"],
  format: ["cjs"],
  outDir: "dist/cjs",
  outExtension: () => ({ js: ".js" }),
  bundle: false,
  sourcemap: true,
  clean: false,
  target: "esnext",
  onSuccess:
    'echo \'{"type":"commonjs"}\' > dist/cjs/package.json && cp src/webhook-schema.json dist/cjs/webhook-schema.json',
});
