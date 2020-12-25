const { merge } = require('lodash');

const Book = require('./book');
const User = require('./user');

const resolvers = merge(
    Book.resolvers,
    User.resolvers
);

module.exports = resolvers;