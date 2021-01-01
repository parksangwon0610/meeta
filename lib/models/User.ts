import { Document, Types, Model, model } from "mongoose";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crypto = require('../utils/cryptoUtils');

const UserSchema = new Schema({
    id: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    created: {type: Date, default: Date.now},
    accessTime: {type: Date},
});

export interface User extends Document {
    id: string;
    password: string;
    name: string;
    created?: Date;
    accessTime?: Date;
}


/**
 * 사용자를 생성합니다. id, password, name 을 required input 으로, 
 * password 는 해시를 거친 뒤 저장합니다.
 * 
 * @params params CreateUserInput
 * @returns returns User
 */
UserSchema.statics.createMember = async function (
        this: Model<User>,
        params: any
    ) {
    const {
        id,
        password,
        name
    } = params.input;

    const hashedPwd:string = await crypto.hashing(password);
    const createdUser:User = await new this({
        name,
        id,
        password: hashedPwd,
    }).save();

    return createdUser;
}

/**
 * 사용자의 정보로 로그인요청을 처리합니다.
 * @params params 사용자 아이디와 비밀번호
 * @returns User | undefined
 */
UserSchema.statics.login = async function (this: Model<User>, params: any) {
    const {
        id: userId,
        password
    } = params.input;
    console.log('params', params);

    const foundUser: User | null = await this.findOne({id: userId});
    if(!foundUser) {
        throw new Error('no User found');
    }

    const originPwd:string = foundUser.password;
    const hashedPwd:string = await crypto.hashing(password);

    return (originPwd === hashedPwd) ? foundUser : undefined;
};

export interface UserModel extends Model<User> {
    createMember(params: any): User,
    login(params: any): User
}

export default model<User, UserModel>('user', UserSchema);