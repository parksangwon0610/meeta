import { gql } from 'apollo-server';

export const Subscription = gql`    
    type listenRoomPayload {
        message: String
    }
    type Subscription {
        listenRoom (input: listenRoomInput): listenRoomPayload
    }
`

export default Subscription;
