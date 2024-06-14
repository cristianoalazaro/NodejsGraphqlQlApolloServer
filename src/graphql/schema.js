import { gql } from "apollo-server";
import { postResolvers } from "./post/resolver";
import { postTypeDefs } from "./post/typedefs";
import { userResolvers } from "./user/resolvers";
import { userTypeDefs } from "./user/typedefs";

const rootTypeDefs = gql`
    type Query {
        hi: String
    }
`;

const rootResolvers = {
    Query: {
        hi: () => 'Hello World!'
    }
}

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];