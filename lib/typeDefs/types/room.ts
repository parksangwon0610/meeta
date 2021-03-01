import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Room {
        _id: String!
        name: String!
        password: String
        created: Float
        type: RoomType
        info: RoomInfo
    }
    type RoomInfo {
        totalTime: Int
        turnTime: Int
        memberCount: Int
        commentCycle: Int
    }
`

export default typeDefs;