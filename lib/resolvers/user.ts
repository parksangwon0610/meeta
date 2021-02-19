import User from '../models/User';
import Room from '../models/Room';
import * as jwt from 'jsonwebtoken';

import { publish } from '../utils/pubsubUtils';

const JWT_SECRET_KEY = "SECRET_KEY";
const TEST_TRIGGER_NAME = 'myTrigger';

export const resolvers = {
    Query: {
        user: () => {
            return {};
        }
    },
    Mutation: {
        addMessage: async (root:any, args:any, context: any) => {
            const { message } = args.input;
            publish(TEST_TRIGGER_NAME, {
                listenMessage: message,
            })
            return 'success';
        },
        createUser: async (root: any, args: any, context: any) => {
            const createdUser = await User.createMember(args);
            const token = await jwt.sign(
                {id: createdUser.id},
                JWT_SECRET_KEY,
                {expiresIn: '30m'}
            );

            const createUserPayload = {
                id: createdUser.id,
                token: token
            };

            return createUserPayload;
        },
        updateUser: (root: any, args: any, context: any) => {
            const updatedUser = User.updateMember(args);
            return updatedUser;
        },
        loginUser: async (root: any, args: any, context: any) => {
            const loginUser = User.login(args);
            const token = await jwt.sign(
                {id: loginUser.id},
                JWT_SECRET_KEY,
                {expiresIn: '30m'}
            );

            return {id: loginUser.id, token: token};
        },
        createRoom: (root: any, args: any, context: any) => {
            const createdRoom = Room.createRoom(args);
            return createdRoom;
        }
    }
}

