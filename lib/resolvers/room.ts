'use strict'

import Room from '../models/Room';

export const resolvers = {
    Query: {
        room: (root: any, args: any, context: any) => {
            console.log(' 🇰🇷🎉 ~ : args', args)
            const foundRoom = Room.findRoom(args);
            return foundRoom;
        }
    },
    Mutation: {
        createRoom: (root: any, args: any, context: any) => {
            const createdRoom = Room.createRoom(args);
            return createdRoom;
        },
        deleteRoom: async (root: any, args: any, context: any) => {
            const deletedRoom = await Room.deleteRoom(args);
            return deletedRoom;
        },
        joinRoom: async (root: any, args: any, context: any) => {
            const joinedRoom = await Room.joinRoom(args);
            return joinedRoom;
        },
        startMeetingRoom: async (root: any, args: any, context: any) => {
            const room = await Room.startMeetingRoom(args);
            return room;
        }, 
        stopMeetingRoom: async (root: any, args: any, context: any) => {
            const room = await Room.stopMeetingRoom(args);
            return room;
        },
    }
}

