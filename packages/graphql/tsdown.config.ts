import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts", "!src/__tests__/**", "!src/generate-documents.ts"],
  format: ["cjs"],
  outDir: "dist/cjs",
  outExtensions: () => ({ js: ".js" }),
  unbundle: true,
  sourcemap: true,
  dts: false,
  target: "esnext",
  onSuccess: 'echo \'{"type":"commonjs"}\' > dist/cjs/package.json',
});
