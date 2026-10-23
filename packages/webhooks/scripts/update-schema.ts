// Downloads the latest webhook schema, regenerates the types, and writes a changeset for it. The
// build itself only uses the committed schema.
import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";

const schemaPath = new URL("../src/webhook-schema.json", import.meta.url);
const versionOf = (schema: string): string =>
  JSON.parse(schema).definitions.webhookMetadata.properties.webhookTargetVersion.const;

const before = readFileSync(schemaPath, "utf8");
execFileSync("pnpm", ["codegen"], { stdio: "inherit" });
const after = readFileSync(schemaPath, "utf8");

const changed = after !== before;
const version = versionOf(after);
const moved = version !== versionOf(before);

const changesetPath = new URL(`../../../.changeset/webhooks-schema-${version}.md`, import.meta.url);

if (changed) {
  const summary = moved
    ? `Update the webhook schema to \`${version}\`.\n\nThe package bundles one schema version at a time, so this release only parses payloads whose \`webhookMetadata.webhookTargetVersion\` is \`${version}\`. Move your webhook target to \`${version}\` when you upgrade, or \`parsePlainWebhook\` returns \`PlainWebhookVersionMismatchError\`.`
    : `Regenerate against the current \`${version}\` webhook schema.`;
  // A pending changeset for this version may be the minor bump with its upgrade notes, so a later
  // regeneration of the same version must not replace it with a patch.
  try {
    writeFileSync(
      changesetPath,
      `---\n"@team-plain/webhooks": ${moved ? "minor" : "patch"}\n---\n\n${summary}\n`,
      { flag: "wx" },
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;
  }
}

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\nversion=${version}\n`);
}
console.log(changed ? `Webhook schema changed: ${version}.` : "Webhook schema unchanged.");
