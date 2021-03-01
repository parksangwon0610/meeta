import { gql } from 'apollo-server';

export const Query = gql`
    type Query {
        user: User
        users: [User]
        room(input: RoomInput): Room
    }
`;

export default Query;
