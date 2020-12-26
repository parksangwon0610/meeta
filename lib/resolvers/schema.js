const { merge } = require('lodash');

const User = require('./user');

const resolvers = merge(
    User.resolvers
);

module.exports = resolvers;