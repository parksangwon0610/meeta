const { gql } = require('apollo-server');

const Query = require('./actions/query');
const Mutation = require('./actions/mutation');

const Book = require('./types/book');
const User = require('./types/user');

const schema = [
    Query,
    Mutation,
    Book,
    User
]
module.exports = schema;
