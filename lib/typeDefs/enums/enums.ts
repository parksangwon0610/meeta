import { gql } from 'apollo-server';

export const Enums = gql `
    enum RoomType {
        PUBLIC
        PRIVATE
    }
` 

export default Enums;