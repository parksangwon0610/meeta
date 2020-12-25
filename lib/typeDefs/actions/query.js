const { gql } = require('apollo-server');

const Query = gql`
    type Query {
        user: User
        users: [User]
        books: [Book]
    }
`

module.exports = Query;