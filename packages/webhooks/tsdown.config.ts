import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts", "!src/__tests__/**"],
  format: ["cjs"],
  outDir: "dist/cjs",
  outExtensions: () => ({ js: ".js" }),
  unbundle: true,
  sourcemap: true,
  dts: false,
  minify: { compress: false, mangle: false, codegen: { removeWhitespace: true } },
  target: "esnext",
  // The ESM declarations, copied into the CommonJS scope so require() users get CommonJS types.
  onSuccess: 'echo \'{"type":"commonjs"}\' > dist/cjs/package.json && cp dist/*.d.ts dist/cjs/',
});
