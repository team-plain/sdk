/**
 * Checks that every field selected in the base branch's _generated_documents.graphql
 * is still selected in the working copy (after resolving all fragment spreads).
 *
 * Exits 1 if any field present on the base is missing in the current file.
 * Run via: pnpm --filter @team-plain/graphql check:no-regression
 */

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  type DocumentNode,
  type FragmentDefinitionNode,
  parse,
  type SelectionSetNode,
} from "graphql";

const __dirname = dirname(fileURLToPath(import.meta.url));
const generatedPath = resolve(__dirname, "_generated_documents.graphql");

// ─── Load documents ──────────────────────────────────────────────────────────

const baseRef = process.env.BASE_REF ?? "origin/main";

let baseSource: string;
try {
  baseSource = execSync(`git show ${baseRef}:packages/graphql/src/_generated_documents.graphql`, {
    cwd: resolve(__dirname, "../../.."),
    stdio: ["pipe", "pipe", "pipe"],
  }).toString();
} catch {
  if (process.env.CI) {
    console.error(`Could not read ${baseRef} in CI — failing.`);
    process.exit(1);
  }
  console.log(`Could not read ${baseRef} locally — skipping.`);
  process.exit(0);
}

const branchSource = readFileSync(generatedPath, "utf-8");

// ─── Parse helpers ───────────────────────────────────────────────────────────

function buildFragmentMap(doc: DocumentNode): Map<string, FragmentDefinitionNode> {
  const map = new Map<string, FragmentDefinitionNode>();
  for (const def of doc.definitions) {
    if (def.kind === "FragmentDefinition") map.set(def.name.value, def);
  }
  return map;
}

/**
 * Recursively extract field paths from a selection set, resolving fragment spreads.
 * Returns strings like "id", "createdAt.unixTimestamp", "[HelpCenterArticle].title".
 */
function extractPaths(
  selectionSet: SelectionSetNode | undefined,
  fragmentMap: Map<string, FragmentDefinitionNode>,
  typePrefix: string,
  prefix: string,
  visited = new Set<string>(),
): Set<string> {
  const paths = new Set<string>();
  if (!selectionSet) return paths;

  for (const sel of selectionSet.selections) {
    if (sel.kind === "Field") {
      const name = sel.alias ? sel.alias.value : sel.name.value;
      const full = prefix ? `${prefix}.${name}` : name;
      paths.add(`${typePrefix}${full}`);
      for (const p of extractPaths(sel.selectionSet, fragmentMap, typePrefix, full, visited)) {
        paths.add(p);
      }
    } else if (sel.kind === "InlineFragment") {
      const tc = sel.typeCondition ? `[${sel.typeCondition.name.value}]` : typePrefix;
      for (const p of extractPaths(sel.selectionSet, fragmentMap, tc, prefix, visited)) {
        paths.add(p);
      }
    } else if (sel.kind === "FragmentSpread") {
      const key = `${sel.name.value}:${typePrefix}:${prefix}`;
      if (visited.has(key)) continue;
      visited.add(key);
      const frag = fragmentMap.get(sel.name.value);
      if (frag) {
        const tc = frag.typeCondition ? `[${frag.typeCondition.name.value}]` : typePrefix;
        for (const p of extractPaths(frag.selectionSet, fragmentMap, tc, prefix, visited)) {
          paths.add(p);
        }
      }
    }
  }
  return paths;
}

function buildOperationPaths(source: string): Map<string, Set<string>> {
  const doc = parse(source);
  const fragmentMap = buildFragmentMap(doc);
  const ops = new Map<string, Set<string>>();
  for (const def of doc.definitions) {
    if (def.kind !== "OperationDefinition") continue;
    const name = def.name?.value ?? "(anonymous)";
    ops.set(name, extractPaths(def.selectionSet, fragmentMap, "", ""));
  }
  return ops;
}

// ─── Compare ─────────────────────────────────────────────────────────────────

const basePaths = buildOperationPaths(baseSource);
const branchPaths = buildOperationPaths(branchSource);

let regressions = 0;

for (const [opName, baseFields] of basePaths) {
  const branchFields = branchPaths.get(opName);
  if (!branchFields) {
    console.error(`MISSING OPERATION: ${opName}`);
    regressions++;
    continue;
  }
  const missing = [...baseFields].filter((p) => !branchFields.has(p));
  if (missing.length > 0) {
    console.error(`REGRESSION in ${opName}:`);
    for (const m of missing) console.error(`  - ${m}`);
    regressions++;
  }
}

if (regressions === 0) {
  const addedTotal = [...branchPaths.values()].reduce((sum, fields, i) => {
    const op = [...branchPaths.keys()][i];
    const base = basePaths.get(op);
    return sum + [...fields].filter((p) => !base?.has(p)).length;
  }, 0);
  console.log(
    `✓ No regressions across ${basePaths.size} operations. +${addedTotal} field paths added.`,
  );
} else {
  console.error(`✗ ${regressions} operation(s) have regressions.`);
  process.exit(1);
}
