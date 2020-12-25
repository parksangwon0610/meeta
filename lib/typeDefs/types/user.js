const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        name: String!
        id: String!
        uuid: String!
        password: String!
        created: Float
        accessTime: Float
        # status: 
    }
`

module.exports = typeDefs;