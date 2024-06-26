import { gql } from "apollo-server";

export const postTypeDefs = gql`
    type Query {
        post(id: ID!): Post!
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        # userId: String!
        user: User!
        indexRef: Int!
        createdAt: String!
        unixTimestamp: String!
    }
`;