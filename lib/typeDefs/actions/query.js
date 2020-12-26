const { gql } = require('apollo-server');

const Query = gql`
    type Query {
        user: User
        users: [User]
    }
`

module.exports = Query;