'use strict'

import { Document, Types, Model, model } from "mongoose";
import { UserModel } from "./User";
import * as mongooseResultType from "./types/mongo";
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const crypto = require('../utils/cryptoUtils');
const calc = require('../utils/calcUtils');
const pubsub = require('../utils/pubsubUtils');

const RoomSchema = new Schema({
    name: {type: String, required: true},
    type: {
        type: String, 
        enum: ['PUBLIC','PRIVATE'],
        default: 'PUBLIC',
        require: true
    },
    status: {
        type: String,
        enum: ['OPEN', 'IN_PROGRESS', 'CLOSED'],
        default: 'OPEN',
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
    _reserveQueue: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    _members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
});

enum ROOM_TYPE_ENUM {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}
enum ROOM_STATUS_ENUM {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    CLOSED = 'CLOSED'
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
    status: ROOM_STATUS_ENUM;
    created?: Date;
    password: string;
    info: RoomInfo;
    _reserveQueue: Array<Types.ObjectId>;
    _members: Array<Types.ObjectId>;
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

/**
 * 회의방을 찾습니다.
 * @param params {roomId: string}
 */
RoomSchema.statics.findRoom = async function(this: Model<Room>, params: any) {
    const {
        roomId
    } = params.input;

    const foundRoom: Room | null = await this.findOne({_id: roomId});
    if(!foundRoom) {
        throw new Error('no Room found');
    }

    return foundRoom;
}

RoomSchema.statics.deleteRoom = async function (this: Model<Room>, params: any) {
    const {
        roomId
    } = params.input;
    
    const deleteResult: {n:number, ok:number, deletedCount:number} = await this.deleteOne({_id: roomId});
    if(deleteResult.deletedCount > 0) {
        return {roomId, result: true};
    }
    return {roomId, result: false};
}

RoomSchema.statics.joinRoom = async function (this: Model<Room>, params: any) {
    const {
        roomId,
        userId
    } = params.input;
    
    const foundRoom: Room | null = await this.findOne({_id: roomId});

    if (!foundRoom) {
        throw new Error('No Room found');
    } 
    const registrants = foundRoom._members;

    let joinedRoom = foundRoom;
    if (!registrants.includes(userId)) {
        registrants.push(userId);
        await this.updateOne(
            {_id: roomId},
            {$set: {_members: registrants}},
            {new: true}
        );
    }

    return joinedRoom;
}

RoomSchema.statics.startMeetingRoom = async function (this: Model<Room>, params: any) {
    const {
        roomId
    } = params.input;

    const updated: mongooseResultType.IUpdate = await this.updateOne(
        {_id: roomId}, 
        {$set: {status: ROOM_STATUS_ENUM.IN_PROGRESS}}, 
        {new: true}
    )

    if(updated.deletedCount === 0) {
        throw new Error('Faild Start');
    }
    
    pubsub.publish(roomId, {status: ROOM_STATUS_ENUM.IN_PROGRESS});
    return {roomId, status: ROOM_STATUS_ENUM.IN_PROGRESS};
}

RoomSchema.statics.stopMeetingRoom = async function (this: Model<Room>, params: any) {
    const {
        roomId
    } = params.input;

    const updated: mongooseResultType.IUpdate = await this.updateOne(
        {_id: roomId}, 
        {$set: {status: ROOM_STATUS_ENUM.CLOSED}}, 
        {new: true}
    )

    if (updated.deletedCount === 0) {
        throw new Error('Faild Stop');
    }

    pubsub.publish(roomId, {status: ROOM_STATUS_ENUM.CLOSED});
    return {roomId, status: ROOM_STATUS_ENUM.CLOSED};
}

RoomSchema.statics.reserveTurn = async function (this: Model<Room>, params: any) {
    const {
        roomId,
        memberId
    } = params.input;

    // const foundRoom = await this.findOne({_id: roomId});
    // const { _members: originMembers, _reserveQueue: reserveMembers } = foundRoom;

    // if (originMembers.includes(memberId)) {
    //     reserveMembers.push();
    // }
}
RoomSchema.statics.nextTurn = async function (this: Model<Room>, params: any) {
    const {
        roomId,
        memberId
    } = params.input;

    // const foundRoom = await this.findOne({_id: roomId});
    // const { _reserveQueue: reserveMembers } = foundRoom;
    // const nextMember = reserveMembers.shift();
    // return nextMember;
}

export interface RoomModel extends Model<Room> {
    createRoom(params: any): Room
    findRoom(params: any): Room
    deleteRoom(params: any): any
    joinRoom(params: any): any
    startMeetingRoom(params: any): any
    stopMeetingRoom(params: any): any
    reserveTurn(param: any): any
    nextTurn(param: any): UserModel
}

export default model<Room, RoomModel>('room', RoomSchema);