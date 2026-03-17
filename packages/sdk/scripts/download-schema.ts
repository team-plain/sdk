const SCHEMA_URL = "https://core-api.uk.plain.com/graphql/v1/schema.graphql";
const OUTPUT_PATH = new URL("../src/schema.graphql", import.meta.url);

const response = await fetch(SCHEMA_URL);

if (!response.ok) {
  console.error(`Failed to download schema: HTTP ${response.status} ${response.statusText}`);
  process.exit(1);
}

const schema = await response.text();

const { writeFile } = await import("node:fs/promises");
const { fileURLToPath } = await import("node:url");

await writeFile(fileURLToPath(OUTPUT_PATH), schema, "utf-8");
console.log(`Schema downloaded to packages/sdk/src/schema.graphql`);
