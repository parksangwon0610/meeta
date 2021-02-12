import { Document, Types, Model, model } from "mongoose";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crypto = require('../utils/cryptoUtils');
const calc = require('../utils/calcUtils');
const RoomSchema = new Schema({
    name: {type: String, required: true},
    type: {
        type: String, 
        enum: ['PUBLIC','PRIVATE'],
        default: 'PUBLIC',
        require: true
    },
    created: {type: Date, default: Date.now},
    password: {type: String},
    info: {
        totalTime: {type: Number, require: true},
        turnTime: {type: Number, required: true},
        memberCount: {type: Number, required: true},
        commentCycle: {type: Number, required: true},
    },
});

enum ROOM_TYPE_ENUM {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

type RoomInfo = {
    totalTime: number,
    turnTime: number,
    memberCount: number,
    commentCycle: number
}

export interface Room extends Document {
    name: string;
    type: ROOM_TYPE_ENUM;
    created?: Date;
    password: string;
    info: RoomInfo;
}

export interface PrivateRoom extends Room {
    password: string;
}

/**
 * Room 을 생성합니다. 
 * 
 * @params name 방이름
 * @params type PUBLIC, PRIVATE
 * @params password Private Type 일경우 사용되는 비밀번호
 * @params info 회의방 정보가 들어가 있습니다. 시간 정보
 */
RoomSchema.statics.createRoom = async function (this: Model<Room>, params: any) {
    const {
        name,
        type,
        password,
        info
    } = params.input;

    const { turnTime, memberCount, commentCycle } = info;
    const totalTime: number = calc.getTotalTime({turnTime, memberCount, commentCycle});
    const infoSet = {...info, totalTime};

    const createdRoom: Room = await new this({
        name, 
        type, 
        password, 
        info: infoSet
    }).save();
    return createdRoom;
}

export interface RoomModel extends Model<Room> {
    createRoom(params: any): Room
}

export default model<Room, RoomModel>('room', RoomSchema);