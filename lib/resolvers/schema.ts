const { merge } = require('lodash');

const User = require('./user');
const Room = require('./room');
const Subscription = require('./subscription');

export const resolvers = merge(
    User.resolvers,
    Room.resolvers,
    Subscription.resolvers
);

export default resolvers;