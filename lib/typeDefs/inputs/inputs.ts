import { gql } from 'apollo-server';

const inputGQL = gql`
    input RoomInput {
        roomId: String
    }
`

export default inputGQL;