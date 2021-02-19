import { gql } from 'apollo-server';

export const Query = gql`    
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

export default Query;
