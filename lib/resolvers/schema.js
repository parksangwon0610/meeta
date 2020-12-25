const { merge } = require('lodash');

const Book = require('./book');

const resolvers = merge(
    Book.resolvers
);

module.exports = resolvers;