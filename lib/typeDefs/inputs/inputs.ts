import { gql } from 'apollo-server';

const inputGQL = gql`
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
        info: RoomInfoInput
    }
    input RoomInfoInput {
        turnTime: Int!
        memberCount: Int!
        commentCycle: Int!
    }

    input DeleteRoomInput {
        roomId: String!
    }

    input RoomInput {
        roomId: String
    }
    # deprecated Subscription Sample  
    input listenRoomInput {
        roomId: String!
    }
    input addMessageInput {
        trigger: String!
        message: String
    }
`

export default inputGQL;