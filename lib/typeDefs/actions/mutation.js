const { gql } = require('apollo-server');

const Query = gql`
    input CreateUserInput {
        id: String!
        password: String!
        name: String!
    },

    type Mutation {
        createUser(
            input: CreateUserInput
        ): User
        # updateUser: User
        # deleteUser: User
    }
`

module.exports = Query;