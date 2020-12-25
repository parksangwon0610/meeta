const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crypto = require('../utils/cryptoUtils');

const UserSchema = new Schema({
    id: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    created: {type: Date, default: Date.now},
    accessTime: {type: Date},
    // status: {
    //     type: String,
    //     enum: [
    //         'JOIN',
    //         'LEAVE',
    //         'DROP'
    //     ]
    // }
});

/**
 * 사용자를 생성합니다. id, password, name 을 required input 으로, 
 * password 는 해시를 거친 뒤 저장합니다.
 * 
 * @params params CreateUserInput
 * @returns returns User
 */
UserSchema.statics.create = async function (params) {
    const {
        id,
        password,
        name
    } = params.input;

    const hashedPwd = await crypto.hashing(password);
    const createdUser = await this({
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
UserSchema.statics.login = async function (params) {
    const {
        id: userId,
        password
    } = params.input;

    const foundUser = await this.findOne({id: userId});
    if(!foundUser) {
        throw new Error('no User found');
    }

    const originPwd = foundUser.password;
    const hashedPwd = await crypto.hashing(password);

    return (originPwd === hashedPwd) ? foundUser : undefined;
};

mongoose.model('user', UserSchema);
module.exports = UserSchema;