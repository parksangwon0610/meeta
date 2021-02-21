import { gql } from 'apollo-server';

export const Subscription = gql`    
    input listenRoomInput {
        roomId: String!
    }
    type listenRoomPayload {
        message: String
    }
    type Subscription {
        listenRoom (input: listenRoomInput): listenRoomPayload
    }
`

export default Subscription;
