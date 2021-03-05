import { gql } from 'apollo-server';

export const Enums = gql `
    enum RoomType {
        PUBLIC
        PRIVATE
    }
    enum RoomStatus {
        OPEN
        IN_PROGRESS
        CLOSED
    }
` 

export default Enums;