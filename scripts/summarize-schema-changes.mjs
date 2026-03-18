/**
 * Compares the GraphQL schema between a git ref and the working tree,
 * then prints a human-readable markdown summary of structural changes.
 *
 * Usage: node scripts/summarize-schema-changes.mjs <git-ref>
 */

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { buildSchema } from "graphql";

const ref = process.argv[2] || "HEAD~1";
const schemaPath = "packages/sdk/src/schema.graphql";

let oldSchemaText;
try {
	oldSchemaText = execSync(`git show ${ref}:${schemaPath}`, {
		encoding: "utf-8",
	});
} catch {
	console.log("No previous schema found — this is the initial release.");
	process.exit(0);
}

const newSchemaText = readFileSync(schemaPath, "utf-8");

if (oldSchemaText === newSchemaText) {
	console.log("No schema changes since the last release.");
	process.exit(0);
}

const oldSchema = buildSchema(oldSchemaText);
const newSchema = buildSchema(newSchemaText);

const oldTypes = oldSchema.getTypeMap();
const newTypes = newSchema.getTypeMap();

const isUserType = (name) => !name.startsWith("__");
const oldTypeNames = new Set(Object.keys(oldTypes).filter(isUserType));
const newTypeNames = new Set(Object.keys(newTypes).filter(isUserType));

const addedTypes = [...newTypeNames].filter((n) => !oldTypeNames.has(n));
const removedTypes = [...oldTypeNames].filter((n) => !newTypeNames.has(n));

const fieldChanges = [];
const enumChanges = [];

for (const name of newTypeNames) {
	if (!oldTypeNames.has(name)) continue;

	const oldType = oldTypes[name];
	const newType = newTypes[name];

	// Object types, input types, interfaces — compare fields
	if (
		typeof oldType.getFields === "function" &&
		typeof newType.getFields === "function"
	) {
		const oldFields = new Set(Object.keys(oldType.getFields()));
		const newFields = new Set(Object.keys(newType.getFields()));

		const added = [...newFields].filter((f) => !oldFields.has(f));
		const removed = [...oldFields].filter((f) => !newFields.has(f));

		if (added.length || removed.length) {
			fieldChanges.push({ name, added, removed });
		}
	}

	// Enums — compare values
	if (
		typeof oldType.getValues === "function" &&
		typeof newType.getValues === "function"
	) {
		const oldValues = new Set(oldType.getValues().map((v) => v.name));
		const newValues = new Set(newType.getValues().map((v) => v.name));

		const added = [...newValues].filter((v) => !oldValues.has(v));
		const removed = [...oldValues].filter((v) => !newValues.has(v));

		if (added.length || removed.length) {
			enumChanges.push({ name, added, removed });
		}
	}
}

// Build markdown summary
const sections = [];

if (addedTypes.length) {
	sections.push(
		`### New types\n${addedTypes.map((t) => `- \`${t}\``).join("\n")}`,
	);
}
if (removedTypes.length) {
	sections.push(
		`### Removed types\n${removedTypes.map((t) => `- \`${t}\``).join("\n")}`,
	);
}

if (fieldChanges.length) {
	const lines = fieldChanges.flatMap(({ name, added, removed }) => {
		const parts = [];
		if (added.length)
			parts.push(
				`- **\`${name}\`** — added: ${added.map((f) => `\`${f}\``).join(", ")}`,
			);
		if (removed.length)
			parts.push(
				`- **\`${name}\`** — removed: ${removed.map((f) => `\`${f}\``).join(", ")}`,
			);
		return parts;
	});
	sections.push(`### Field changes\n${lines.join("\n")}`);
}

if (enumChanges.length) {
	const lines = enumChanges.flatMap(({ name, added, removed }) => {
		const parts = [];
		if (added.length)
			parts.push(
				`- **\`${name}\`** — added: ${added.map((v) => `\`${v}\``).join(", ")}`,
			);
		if (removed.length)
			parts.push(
				`- **\`${name}\`** — removed: ${removed.map((v) => `\`${v}\``).join(", ")}`,
			);
		return parts;
	});
	sections.push(`### Enum changes\n${lines.join("\n")}`);
}

if (sections.length === 0) {
	console.log(
		"Schema file changed but no structural differences were detected.",
	);
} else {
	console.log(sections.join("\n\n"));
}
