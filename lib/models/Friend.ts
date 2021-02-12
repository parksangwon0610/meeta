import { Document, Types, Model, model } from "mongoose";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    id: {type: String, required: true},
    targetUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
});

export interface Friend extends Document {
    id: string;
    targetUser: Types.ObjectId
};

FriendSchema.statics.addFriend = async function (
        this: Model<Friend>,
        params: any
    ) {
        const {
            userId,
            targetUserId
        } = params.input;


    };

export interface FriendModel extends Model<Friend> {
    addFriend(params: any): Friend
};

export default model<Friend, FriendModel>('friend', FriendSchema);
