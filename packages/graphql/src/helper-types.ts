// GraphQL Codegen 5 exported these from the generated file and 3.x re-exported them, so they stay
// public even though Codegen 6 keeps Exact private and no longer emits the others.
import type { Maybe } from "./_generated_documents.js";

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
