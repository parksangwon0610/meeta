import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Room {
        _id: String!
        name: String!
        password: String
        created: Float
        type: RoomType
        status: RoomStatus
        info: RoomInfo
        _members: [ID]
    }
    type RoomInfo {
        totalTime: Int
        turnTime: Int
        memberCount: Int
        commentCycle: Int
    }

    type DeleteRoomPayload {
        roomId: String!
        result: Boolean
    }
`

export default typeDefs;