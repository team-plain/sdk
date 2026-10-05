// Downloads the production schema, writes a changeset for it, and regenerates the SDK. The build
// itself only uses the committed schema.
import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync } from "node:fs";
import { writeChangeset } from "@changesets/write";
import { schemaChangeset } from "./schema-changeset.ts";

const schemaPath = new URL("../src/schema.graphql", import.meta.url);
const before = readFileSync(schemaPath, "utf8");
execFileSync("node", [new URL("download-schema.ts", import.meta.url).pathname], {
  stdio: "inherit",
});

const changeset = await schemaChangeset(before, readFileSync(schemaPath, "utf8"));
if (changeset) {
  await writeChangeset(changeset, new URL("../../..", import.meta.url).pathname);
  execFileSync("pnpm", ["codegen"], { stdio: "inherit" });
}

if (process.env.GITHUB_OUTPUT) {
  const bump = changeset?.releases[0].type ?? "";
  appendFileSync(process.env.GITHUB_OUTPUT, `changed=${!!changeset}\nbump=${bump}\n`);
}
console.log(changeset ? `Schema changed: ${changeset.releases[0].type}.` : "Schema unchanged.");
