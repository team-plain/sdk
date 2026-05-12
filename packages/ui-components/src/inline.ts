import type { DateTimeComponentInput } from "./dateTimeComponent.js";
import type { UserComponentInput } from "./userComponent.js";

/**
 * Components that can be embedded inline inside a `componentText` body via
 * `uiComponent.inline(...)`. Restricted to the component types the renderer
 * currently supports for inline use.
 */
export type InlinableComponent = DateTimeComponentInput | UserComponentInput;

function flattenForInline(value: unknown, prefix: string): [string, string][] {
  if (value === null || value === undefined) {
    return [];
  }
  if (Array.isArray(value)) {
    throw new Error("uiComponent.inline: arrays in payload aren't supported");
  }
  if (typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) => {
      const nextPrefix = prefix === "" ? key : `${prefix}.${key}`;
      return flattenForInline(child, nextPrefix);
    });
  }
  return [[prefix, String(value)]];
}

/**
 * Convert a UI component into an inline marker string for embedding inside a
 * `componentText` body.
 *
 * Wrap the result with literal `{` and `}` in a template literal so the final
 * text contains a `{{ … }}` marker, matching the templating convention used by
 * the rendering app:
 *
 * ```ts
 * const text = `Last seen by {${uiComponent.inline(
 *   uiComponent.user({ userIdentifier: { userId: "u_123" } }),
 * )}} on {${uiComponent.inline(
 *   uiComponent.dateTime({ dateTimeIso8601: "2026-05-11T12:00:00Z" }),
 * )}}`;
 * ```
 *
 * Only `dateTime` and `user` components are inlinable today. Other component
 * types will be rejected at compile time.
 */
export function inline(component: InlinableComponent): string {
  const first = Object.entries(component)[0];
  if (first === undefined) {
    throw new Error("uiComponent.inline: component has no fields");
  }
  const [typeKey, payload] = first;
  const pairs = flattenForInline(payload, "").map(
    ([key, value]) => `${key}=${JSON.stringify(value).replace(/}/g, "\\u007d")}`,
  );
  return `{${typeKey}:${pairs.join(",")}}`;
}
