const { gql } = require('apollo-server');

const Query = gql`
    type Query {
        books: [Book]
    }
`

module.exports = Query;