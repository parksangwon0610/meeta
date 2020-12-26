const { merge } = require('lodash');

const User = require('./user');

export const resolvers = merge(
    User.resolvers
);

// module.exports = resolvers;
export default resolvers;