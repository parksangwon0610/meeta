import Room from '../models/Room';

export const resolvers = {
    Mutation: {
        createRoom: (root: any, args: any, context: any) => {
            const createdRoom = Room.createRoom(args);
            return createdRoom;
        },
        deleteRoom: async (root: any, args: any, context: any) => {
            const deletedRoom = await Room.deleteRoom(args);
            return deletedRoom;
        }
    }
}

