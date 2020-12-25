const { gql } = require('apollo-server');

const Query = require('./actions/query');

const Book = require('./types/book');

const schema = [
    Query,
    Book
]
module.exports = schema;
