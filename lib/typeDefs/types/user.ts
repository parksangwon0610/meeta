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
`

// module.exports = typeDefs;
export default typeDefs;