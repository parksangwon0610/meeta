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
    input CreateRoomInput {
        name: String!
        type: RoomType
        password: String
    }

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
        createRoom(
            input: CreateRoomInput
        ): Room
    }
`

export default Query;