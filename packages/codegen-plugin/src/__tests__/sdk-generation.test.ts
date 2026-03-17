import { buildSchema } from "graphql";
import { describe, expect, it } from "vitest";
import { plugin } from "../index.js";
import { compileTypeScript, createDocuments, formatDiagnostics } from "./helpers.js";

// Helper: a value-object type to make entities non-value-objects
const DATETIME_SCHEMA = `
  type DateTime {
    iso8601: String!
  }
`;

describe("SDK generation", () => {
  it("wraps single model query in new XModel()", () => {
    const schema = buildSchema(`
      type Query {
        customer(customerId: ID!): Customer!
      }
      ${DATETIME_SCHEMA}
      type Customer {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment CustomerFields on Customer {
        id
        name
        createdAt { iso8601 }
      }
      query Customer($customerId: ID!) {
        customer(customerId: $customerId) {
          ...CustomerFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type CustomerFieldsFragment = { id: string; name: string; createdAt: { iso8601: string } };
      declare const CustomerDocument: any;
      type CustomerQuery = { customer: CustomerFieldsFragment };
      type CustomerQueryVariables = { customerId: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("new CustomerModel(this._client, response.customer)");
  });

  it("throws 'not found' for nullable single model query", () => {
    const schema = buildSchema(`
      type Query {
        customer(customerId: ID!): Customer
      }
      ${DATETIME_SCHEMA}
      type Customer {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment CustomerFields on Customer {
        id
        name
        createdAt { iso8601 }
      }
      query Customer($customerId: ID!) {
        customer(customerId: $customerId) {
          ...CustomerFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    expect(code).toContain('throw new Error("customer not found")');
  });

  it("returns PlainConnection for connection query", () => {
    const schema = buildSchema(`
      type Query {
        customers(first: Int, after: String): CustomerConnection!
      }
      ${DATETIME_SCHEMA}
      type Customer {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
      type CustomerEdge {
        node: Customer!
        cursor: String!
      }
      type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        endCursor: String
      }
      type CustomerConnection {
        edges: [CustomerEdge!]!
        pageInfo: PageInfo!
        totalCount: Int!
      }
    `);
    const docs = createDocuments(`
      fragment CustomerFields on Customer {
        id
        name
        createdAt { iso8601 }
      }
      query Customers($first: Int, $after: String) {
        customers(first: $first, after: $after) {
          edges { node { ...CustomerFields } cursor }
          pageInfo { hasNextPage hasPreviousPage startCursor endCursor }
          totalCount
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type CustomerFieldsFragment = { id: string; name: string; createdAt: { iso8601: string } };
      declare const CustomersDocument: any;
      type CustomersQuery = {
        customers: {
          edges: Array<{ node: CustomerFieldsFragment; cursor: string }>;
          pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; startCursor: string | null; endCursor: string | null };
          totalCount: number;
        };
      };
      type CustomersQueryVariables = { first?: number | null; after?: string | null };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("PlainConnection<CustomerModel>");
    expect(code).toContain("conn.edges.map(e => new CustomerModel(this._client, e.node))");
    expect(code).toContain("totalCount: conn.totalCount");
  });

  it("generates no-arg method for query without arguments", () => {
    const schema = buildSchema(`
      type Query {
        currentUser: User!
      }
      ${DATETIME_SCHEMA}
      type User {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment UserFields on User {
        id
        name
        createdAt { iso8601 }
      }
      query CurrentUser {
        currentUser {
          ...UserFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type UserFieldsFragment = { id: string; name: string; createdAt: { iso8601: string } };
      declare const CurrentUserDocument: any;
      type CurrentUserQuery = { currentUser: UserFieldsFragment };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    // Method signature has no parameters
    expect(code).toMatch(/async currentUser\(\): Promise<UserModel>/);
  });

  it("maps list query to model array", () => {
    const schema = buildSchema(`
      type Query {
        recentItems(limit: Int!): [Item!]!
      }
      ${DATETIME_SCHEMA}
      type Item {
        id: ID!
        label: String!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment ItemFields on Item {
        id
        label
        createdAt { iso8601 }
      }
      query RecentItems($limit: Int!) {
        recentItems(limit: $limit) {
          ...ItemFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type ItemFieldsFragment = { id: string; label: string; createdAt: { iso8601: string } };
      declare const RecentItemsDocument: any;
      type RecentItemsQuery = { recentItems: Array<ItemFieldsFragment> };
      type RecentItemsQueryVariables = { limit: number };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("Promise<ItemModel[]>");
    expect(code).toContain(".map(d => new ItemModel(this._client, d))");
  });

  it("returns raw output type for mutations (no model wrapping)", () => {
    const schema = buildSchema(`
      type Query {
        dummy: String
      }
      type Mutation {
        createUser(name: String!): CreateUserOutput!
      }
      type CreateUserOutput {
        userId: String
        error: String
      }
    `);
    const docs = createDocuments(`
      mutation CreateUser($name: String!) {
        createUser(name: $name) {
          userId
          error
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      declare const CreateUserDocument: any;
      type CreateUserMutation = { createUser: { userId: string | null; error: string | null } };
      type CreateUserMutationVariables = { name: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain('Promise<CreateUserMutation["createUser"]>');
    expect(code).not.toContain("new CreateUserOutputModel");
  });

  it("generates sorted document and type imports", () => {
    const schema = buildSchema(`
      type Query {
        alpha(alphaId: ID!): Alpha
        beta(betaId: ID!): Beta
      }
      ${DATETIME_SCHEMA}
      type Alpha {
        id: ID!
        value: String!
        createdAt: DateTime!
      }
      type Beta {
        id: ID!
        value: String!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment AlphaFields on Alpha { id, value, createdAt { iso8601 } }
      fragment BetaFields on Beta { id, value, createdAt { iso8601 } }
      query Beta($betaId: ID!) { beta(betaId: $betaId) { ...BetaFields } }
      query Alpha($alphaId: ID!) { alpha(alphaId: $alphaId) { ...AlphaFields } }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    // Document imports should be sorted alphabetically
    const docImportMatch = code.match(/import \{([^}]+)\}/);
    if (docImportMatch) {
      const imports = docImportMatch[1].split(",").map((s) => s.trim()).filter(Boolean);
      const sorted = [...imports].sort();
      expect(imports).toEqual(sorted);
    }

    // Type imports should be sorted alphabetically
    const typeImportMatch = code.match(/import type \{([^}]+)\} from "\.\/_generated/);
    if (typeImportMatch) {
      const imports = typeImportMatch[1].split(",").map((s) => s.trim()).filter(Boolean);
      const sorted = [...imports].sort();
      expect(imports).toEqual(sorted);
    }
  });
});
