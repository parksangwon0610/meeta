import { gql } from 'apollo-server';

export const Query = gql`
    # User Input Type
    input CreateUserInput {
        id: String!
        password: String!
        name: String!
    },
    type CreateUserPayload {
        id: String!
        token: String!
    },
    input UpdateUserInput {
        id: String!
        name: String
    },
    input LoginUserInput {
        id: String!
        password: String!
    },
    type LoginUserPayload {
        id: String!
        token: String!
    }
    
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
    input addMessageInput {
        trigger: String!
        message: String
    }

    type Mutation {
        # Message 
        addMessage(input: addMessageInput): String
        # User
        createUser(input: CreateUserInput): CreateUserPayload
        updateUser(input: UpdateUserInput): User
        loginUser(input: LoginUserInput): LoginUserPayload
        # Room
        createRoom(input: CreateRoomInput): Room
    }
`

export default Query;
