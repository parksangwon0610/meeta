const { gql } = require('apollo-server');

const Query = gql`
    input CreateUserInput {
        id: String!
        password: String!
        name: String!
    },
    input LoginUserInput {
        id: String!
        password: String!
    },

    type Mutation {
        createUser(
            input: CreateUserInput
        ): User
        # updateUser: User
        # deleteUser: User
        loginUser (
            input: LoginUserInput
        ): User
    }
`

module.exports = Query;