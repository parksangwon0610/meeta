import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Room {
        name: String!
        password: String
        created: Float
        type: RoomType
        # status: 
    }
`

export default typeDefs;