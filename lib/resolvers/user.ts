import User from '../models/User';
import Room from '../models/Room';

export const resolvers = {
    Query: {
        user: () => {
            return {};
        }
    },
    Mutation: {
        createUser: (root: any, args: any, context: any) => {
            const createdUser = User.createMember(args);
            return createdUser;
        },
        updateUser: (root: any, args: any, context: any) => {
            const updatedUser = User.updateMember(args);
            return updatedUser;
        },
        loginUser: (root: any, args: any, context: any) => {
            const loginUser = User.login(args);
            return loginUser;
        },
        createRoom: (root: any, args: any, context: any) => {
            const createdRoom = Room.createRoom(args);
            return createdRoom;
        }
    }
}

