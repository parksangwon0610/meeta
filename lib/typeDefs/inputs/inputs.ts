import { gql } from 'apollo-server';

const inputGQL = gql`
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

    input DeleteRoomInput {
        roomId: String!
    }

    input JoinRoomInput {
        roomId: String!
        userId: String!
    }

    input RoomInput {
        roomId: String
    }

    input StartMeetingInput {
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