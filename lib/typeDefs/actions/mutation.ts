import { gql } from 'apollo-server';

export const Query = gql`
    input CreateUserInput {
        id: String!
        password: String!
        name: String!
    },
    input UpdateUserInput {
        id: String!
        name: String
    },
    input LoginUserInput {
        id: String!
        password: String!
    },

    type Mutation {
        createUser(
            input: CreateUserInput
        ): User
        updateUser(
            input: UpdateUserInput
        ): User
        # deleteUser: User
        loginUser (
            input: LoginUserInput
        ): User
    }
`

export default Query;