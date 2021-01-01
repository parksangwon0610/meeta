// const mongoose = require('mongoose');

// const User = mongoose.model('user', require('../models/User'));
import User from '../models/User';

export const resolvers = {
    Query: {
        user: () => {
            return {};
        }
    },
    Mutation: {
        createUser: (root: any, args: any, context: any) => {
            const createdUser = User.createMember(args);
            return createdUser;
        },
        loginUser: (root: any, args: any, context: any) => {
            const loginUser = User.login(args);
            return loginUser;
        }
    }
}

// module.exports = { resolvers };
