import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
    typeDefs: gql`
        type Query {
            user: User!
            users: [User!]!
        }

        type User {
            id: ID
            name: String
        }
    `,
    resolvers: {
        Query: {
            user: () => {
                return {
                    id: '12dsf123',
                    name: 'Cristiano',
                }
            },
            users: () => {
                return [
                    {
                        id: '123456',
                        name: 'Cristiano',
                    },
                    {
                        id: '456789',
                        name: 'Elenice',
                    },
                    {
                        id: '789123',
                        name: 'Cristiane',
                    },
                    {
                        id: '123789',
                        name: 'Bruno',
                    },
                ]
            }
        }
    }
});

server.listen(4003).then(({ url }) => {
    console.log(`Server listening on ${url}`);
});