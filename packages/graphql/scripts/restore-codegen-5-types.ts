// GraphQL Codegen 6 only marks result fields optional when they sit under @include or @skip, and
// stops exporting its helper types. Neither is configurable, so this restores the Codegen 5 output
// that @team-plain/graphql 3.x shipped: nullable result fields are optional (`reason?: string | null`)
// and Exact, MakeOptional, MakeMaybe and MakeEmpty are exported.
import { readFileSync, writeFileSync } from "node:fs";

const RESULT_TYPE = /^export type \w+(?:Query|Mutation|Subscription|Fragment) = /gm;
const PROPERTY = /^(?:readonly )?[A-Za-z_$][\w$]*(?=:\s)/;
const OPENERS = new Set(["{", "<", "(", "["]);
const CLOSERS = new Set(["}", ">", ")", "]"]);

const HELPER_TYPES = [
  "export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };",
  "export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };",
  "export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };",
];

function skipString(text: string, start: number): number {
  const quote = text[start];
  let i = start + 1;
  while (text[i] !== quote) {
    if (text[i] === "\\") i++;
    i++;
  }
  return i;
}

// Walks forward from `start` at depth 0 and returns the index of the first character for which
// `isEnd` holds, so a field's type ends at its own `,` or the `}` closing its object.
function scanTopLevel(text: string, start: number, isEnd: (char: string) => boolean): number {
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    const char = text[i]!;
    if (char === "'" || char === '"') {
      i = skipString(text, i);
    } else if (depth === 0 && isEnd(char)) {
      return i;
    } else if (OPENERS.has(char)) {
      depth++;
    } else if (CLOSERS.has(char)) {
      depth--;
    }
  }
  return text.length;
}

function isNullable(type: string): boolean {
  const members: string[] = [];
  let start = 0;
  while (start <= type.length) {
    const end = scanTopLevel(type, start, (char) => char === "|");
    members.push(type.slice(start, end).trim());
    start = end + 1;
  }
  return members.includes("null");
}

function optionalFieldPositions(text: string, start: number, end: number): number[] {
  const positions: number[] = [];
  let previous = "";
  for (let i = start; i < end; i++) {
    const char = text[i]!;
    if (char === "'" || char === '"') {
      i = skipString(text, i);
      previous = char;
      continue;
    }
    if (/\s/.test(char)) continue;
    if (previous === "{" || previous === ",") {
      const property = PROPERTY.exec(text.slice(i, i + 200));
      if (property !== null) {
        const nameEnd = i + property[0].length;
        const typeStart = nameEnd + 1;
        const typeEnd = scanTopLevel(text, typeStart, (c) => c === "," || c === "}" || c === ";");
        if (isNullable(text.slice(typeStart, typeEnd))) positions.push(nameEnd);
      }
    }
    previous = char;
  }
  return positions;
}

function makeNullableResultFieldsOptional(text: string): string {
  const positions: number[] = [];
  for (const match of text.matchAll(RESULT_TYPE)) {
    const bodyStart = match.index + match[0].length;
    const bodyEnd = scanTopLevel(text, bodyStart, (char) => char === ";");
    positions.push(...optionalFieldPositions(text, bodyStart, bodyEnd));
  }
  let result = text;
  for (const position of positions.reverse()) {
    result = `${result.slice(0, position)}?${result.slice(position)}`;
  }
  return result;
}

function exportHelperTypes(text: string): string {
  const exact = /^type Exact<.*$/m.exec(text);
  if (exact === null) return text;
  const missing = HELPER_TYPES.filter((helper) => !text.includes(helper));
  return [
    text.slice(0, exact.index),
    `export ${exact[0]}\n`,
    missing.map((helper) => `${helper}\n`).join(""),
    text.slice(exact.index + exact[0].length + 1),
  ].join("");
}

const path = process.argv[2];
if (path === undefined) {
  console.error("Usage: node scripts/restore-codegen-5-types.ts <generated file>");
  process.exit(1);
}

const generated = readFileSync(path, "utf-8");
writeFileSync(path, exportHelperTypes(makeNullableResultFieldsOptional(generated)));
