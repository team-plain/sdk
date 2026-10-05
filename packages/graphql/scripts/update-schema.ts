// Downloads the production schema, writes a changeset describing what changed for SDK users, and
// regenerates the SDK. The build itself only ever uses the committed schema.
import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";
import { schemaChangeset } from "./schema-changeset.ts";

const schemaPath = new URL("../src/schema.graphql", import.meta.url);
const before = readFileSync(schemaPath, "utf8");

execFileSync("node", [new URL("download-schema.ts", import.meta.url).pathname], {
  stdio: "inherit",
});

const changeset = schemaChangeset(before, readFileSync(schemaPath, "utf8"));
const changesetFile = `.changeset/schema-${new Date().toISOString().slice(0, 10)}.md`;
if (!changeset) {
  console.log("Schema unchanged.");
} else {
  writeFileSync(new URL(`../../../${changesetFile}`, import.meta.url), changeset.markdown);
  console.log(`Schema changed (${changeset.bump}). Wrote ${changesetFile}`);
  execFileSync("pnpm", ["codegen"], { stdio: "inherit" });
}

// The scheduled workflow reads these to decide whether and how to open a pull request.
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `changed=${changeset ? "true" : "false"}\nbump=${changeset?.bump ?? ""}\nchangeset=${changesetFile}\n`,
  );
}
