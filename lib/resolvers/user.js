const mongoose = require('mongoose');

const User = mongoose.model('user', require('../models/User'));

const resolvers = {
    Query: {
        user: () => {
            return {};
        }
    },
    Mutation: {
        createUser: (root, args, context) => {
            const createdUser = User.create(args);
            return createdUser;
        },
        loginUser: (root, args, context) => {
            const loginUser = User.login(args);
            return loginUser;
        }
    }
}

module.exports = { resolvers };