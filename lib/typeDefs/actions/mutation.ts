import { gql } from 'apollo-server';

export const Query = gql`
    # User Input Type
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

    # Room Input Type
    input CreateRoomInput {
        name: String!
        type: RoomType
        password: String
        info: RoomInfoInput
    }
    input RoomInfoInput {
        turnTime: Int!
        memberCount: Int!
        commentCycle: Int!
    }

    type Mutation {
        # User
        createUser(input: CreateUserInput): User
        updateUser(input: UpdateUserInput): User
        loginUser(input: LoginUserInput): User
        # Room
        createRoom(input: CreateRoomInput): Room
    }
`

export default Query;