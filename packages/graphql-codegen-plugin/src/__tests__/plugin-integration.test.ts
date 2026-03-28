import { buildSchema } from "graphql";
import { describe, expect, it } from "vitest";
import { plugin } from "../index.js";
import { compileTypeScript, createDocuments, formatDiagnostics } from "./helpers.js";

const DATETIME_SCHEMA = `
  type DateTime {
    iso8601: String!
  }
`;

describe("plugin integration", () => {
  it("compiles a schema with multiple types and cross-references", () => {
    const schema = buildSchema(`
      type Query {
        customer(customerId: ID!): Customer
        order(orderId: ID!): Order
        product(productId: ID!): Product
      }
      ${DATETIME_SCHEMA}
      type Customer {
        id: ID!
        name: String!
        email: String
        createdAt: DateTime!
      }
      type Product {
        id: ID!
        sku: String!
        price: Float!
        createdAt: DateTime!
      }
      type Order {
        id: ID!
        total: Float!
        customer: Customer
        product: Product
      }
    `);
    const docs = createDocuments(`
      fragment CustomerFields on Customer { id, name, email, createdAt { iso8601 } }
      fragment ProductFields on Product { id, sku, price, createdAt { iso8601 } }
      fragment OrderFields on Order { id, total, customer { id }, product { id } }
      query Customer($customerId: ID!) { customer(customerId: $customerId) { ...CustomerFields } }
      query Order($orderId: ID!) { order(orderId: $orderId) { ...OrderFields } }
      query Product($productId: ID!) { product(productId: $productId) { ...ProductFields } }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type CustomerFieldsFragment = { id: string; name: string; email: string | null; createdAt: { iso8601: string } };
      type ProductFieldsFragment = { id: string; sku: string; price: number; createdAt: { iso8601: string } };
      type OrderFieldsFragment = { id: string; total: number; customer: { id: string } | null; product: { id: string } | null };
      declare const CustomerDocument: any;
      declare const OrderDocument: any;
      declare const ProductDocument: any;
      type CustomerQuery = { customer: CustomerFieldsFragment | null };
      type CustomerQueryVariables = { customerId: string };
      type OrderQuery = { order: OrderFieldsFragment | null };
      type OrderQueryVariables = { orderId: string };
      type ProductQuery = { product: ProductFieldsFragment | null };
      type ProductQueryVariables = { productId: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("export class CustomerModel");
    expect(code).toContain("export class OrderModel");
    expect(code).toContain("export class ProductModel");
    expect(code).toContain("export class PlainSdk");

    // Order has lazy-loading getters for both customer and product
    expect(code).toContain("public get customer(): Promise<CustomerModel | undefined>");
    expect(code).toContain("public get product(): Promise<ProductModel | undefined>");
  });

  it("handles a mix of queries and mutations", () => {
    const schema = buildSchema(`
      type Query {
        user(userId: ID!): User
      }
      type Mutation {
        updateUser(userId: ID!, name: String!): UpdateUserOutput!
        deleteUser(userId: ID!): DeleteUserOutput!
      }
      ${DATETIME_SCHEMA}
      type User {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
      type UpdateUserOutput {
        user: User
        error: String
      }
      type DeleteUserOutput {
        success: Boolean!
        error: String
      }
    `);
    const docs = createDocuments(`
      fragment UserFields on User { id, name, createdAt { iso8601 } }
      query User($userId: ID!) { user(userId: $userId) { ...UserFields } }
      mutation UpdateUser($userId: ID!, $name: String!) { updateUser(userId: $userId, name: $name) { error } }
      mutation DeleteUser($userId: ID!) { deleteUser(userId: $userId) { success error } }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type UserFieldsFragment = { id: string; name: string; createdAt: { iso8601: string } };
      declare const UserDocument: any;
      declare const UpdateUserDocument: any;
      declare const DeleteUserDocument: any;
      type UserQuery = { user: UserFieldsFragment | null };
      type UserQueryVariables = { userId: string };
      type UpdateUserMutation = { updateUser: { error: string | null } };
      type UpdateUserMutationVariables = { userId: string; name: string };
      type DeleteUserMutation = { deleteUser: { success: boolean; error: string | null } };
      type DeleteUserMutationVariables = { userId: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("async user(");
    expect(code).toContain("async updateUser(");
    expect(code).toContain("async deleteUser(");
    // Mutations return raw output
    expect(code).toContain('Promise<UpdateUserMutation["updateUser"]>');
    expect(code).toContain('Promise<DeleteUserMutation["deleteUser"]>');
  });

  it("handles schema with no mutation type", () => {
    const schema = buildSchema(`
      type Query {
        item(itemId: ID!): Item!
      }
      ${DATETIME_SCHEMA}
      type Item {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment ItemFields on Item { id, name, createdAt { iso8601 } }
      query Item($itemId: ID!) { item(itemId: $itemId) { ...ItemFields } }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type ItemFieldsFragment = { id: string; name: string; createdAt: { iso8601: string } };
      declare const ItemDocument: any;
      type ItemQuery = { item: ItemFieldsFragment };
      type ItemQueryVariables = { itemId: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("export class PlainSdk");
    expect(code).toContain("async item(");
  });

  it("generates model for entity referencing another entity that also has a model", () => {
    const schema = buildSchema(`
      type Query {
        team(teamId: ID!): Team
        workspace(workspaceId: ID!): Workspace
      }
      ${DATETIME_SCHEMA}
      type Workspace {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
      type Team {
        id: ID!
        title: String!
        workspace: Workspace
      }
    `);
    const docs = createDocuments(`
      fragment WorkspaceFields on Workspace { id, name, createdAt { iso8601 } }
      fragment TeamFields on Team { id, title, workspace { id } }
      query Team($teamId: ID!) { team(teamId: $teamId) { ...TeamFields } }
      query Workspace($workspaceId: ID!) { workspace(workspaceId: $workspaceId) { ...WorkspaceFields } }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type WorkspaceFieldsFragment = { id: string; name: string; createdAt: { iso8601: string } };
      type TeamFieldsFragment = { id: string; title: string; workspace: { id: string } | null };
      declare const TeamDocument: any;
      declare const WorkspaceDocument: any;
      type TeamQuery = { team: TeamFieldsFragment | null };
      type TeamQueryVariables = { teamId: string };
      type WorkspaceQuery = { workspace: WorkspaceFieldsFragment | null };
      type WorkspaceQueryVariables = { workspaceId: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    // Both types get model classes
    expect(code).toContain("export class WorkspaceModel");
    expect(code).toContain("export class TeamModel");
    // Team has a lazy getter for workspace
    expect(code).toContain("public get workspace(): Promise<WorkspaceModel | undefined>");
    expect(code).toContain("new WorkspaceModel(this._client");
  });
});
