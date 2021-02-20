import { gql } from 'apollo-server';

export const Subscription = gql`    
    input listenMessageInput {
        trigger: String!
    }
    type listenMessagePayload {
        message: String
    }
    type Subscription {
        listenMessage: String
    }
`

export default Subscription;
