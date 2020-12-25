const { gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
`

module.exports = typeDefs;