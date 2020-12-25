const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

UserSchema.statics.create = async function(params) {
    const {
        id,
        password,
        name
    } = params.input;

    const createdUser = await this({
        id,
        password,
        name
    }).save();

    return createdUser;
}

mongoose.model('user', UserSchema);
module.exports = UserSchema;