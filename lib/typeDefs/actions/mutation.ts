import { gql } from 'apollo-server';

export const Query = gql`
    type Mutation {
        # Message 
        addMessage(input: addMessageInput): String
        # User
        createUser(input: CreateUserInput): CreateUserPayload
        updateUser(input: UpdateUserInput): User
        loginUser(input: LoginUserInput): LoginUserPayload
        # Room
        createRoom(input: CreateRoomInput): Room
        deleteRoom(input: DeleteRoomInput): DeleteRoomPayload
    }
`

export default Query;
