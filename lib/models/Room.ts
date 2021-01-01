import { Document, Types, Model, model } from "mongoose";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crypto = require('../utils/cryptoUtils');

const RoomSchema = new Schema({
    name: {type: String, required: true},
    type: {
        type: String, 
        enum: [
            'PUBLIC',
            'PRIVATE'            
        ],
        default: 'PUBLIC',
        require: true
    },
    created: {type: Date, default: Date.now},
    password: {type: String},
});

enum ROOM_TYPE_ENUM {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

export interface Room extends Document {
    name: string;
    type: ROOM_TYPE_ENUM;
    created?: Date;
    password: string;
}

export interface PrivateRoom extends Room {
    password: string;
}

RoomSchema.statics.createRoom = async function (this: Model<Room>, params: any) {
    const {
        name,
        type,
        password
    } = params.input;

    const createdRoom = await new this({name, type, password}).save();
    return createdRoom;
}

export interface RoomModel extends Model<Room> {
    createRoom(params: any): Room
}

export default model<Room, RoomModel>('room', RoomSchema);