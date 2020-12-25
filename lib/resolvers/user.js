const mongoose = require('mongoose');

const resolvers = {
    Query: {
        user: () => {
            return {};
        }
    },
    Mutation: {
        createUser: (root, args, context) => {
            return {};
        }
    }
}

module.exports = { resolvers };