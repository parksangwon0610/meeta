const { gql } = require('apollo-server');

const Query = require('./actions/query');
const Mutation = require('./actions/mutation');

const User = require('./types/user');

const schema = [
    Query,
    Mutation,
    User
]
module.exports = schema;
