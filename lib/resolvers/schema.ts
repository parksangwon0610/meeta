const { merge } = require('lodash');

const User = require('./user');
const Subscription = require('./subscription');

export const resolvers = merge(
    User.resolvers,
    Subscription.resolvers
);

export default resolvers;