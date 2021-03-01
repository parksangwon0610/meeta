import { gql } from 'apollo-server';

export const typeDefs = gql`
    type User {
        name: String!
        id: String!
        password: String!
        created: Float
        accessTime: Float
        # status: 
    }
    type CreateUserPayload {
        id: String!
        token: String!
    },
    type LoginUserPayload {
        id: String!
        token: String!
    }
`

export default typeDefs;