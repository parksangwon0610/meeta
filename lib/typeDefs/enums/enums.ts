import { gql } from 'apollo-server';

export const Enums = gql `
    enum RoomType {
        PUBLIC
        PRIVATE
    }
    enum RoomStatus {
        OPEN
        PROGRESS
        CLOSED
    }
` 

export default Enums;