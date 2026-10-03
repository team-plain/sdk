import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts", "!src/__tests__/**"],
  format: ["cjs"],
  outDir: "dist/cjs",
  outExtensions: () => ({ js: ".js" }),
  unbundle: true,
  sourcemap: true,
  dts: false,
  // rolldown prints every object property on its own line, which more than doubled the 9.75 MB
  // of generated GraphQL documents. Strip whitespace only, so names stay readable.
  minify: { compress: false, mangle: false, codegen: { removeWhitespace: true } },
  target: "esnext",
  onSuccess: 'echo \'{"type":"commonjs"}\' > dist/cjs/package.json',
});
