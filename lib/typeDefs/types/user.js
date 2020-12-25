const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        name: String!
        id: String!
        password: String!
        created: Float
        accessTime: Float
        # status: 
    }
`

module.exports = typeDefs;