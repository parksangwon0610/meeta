
const { ApolloServer, gql } = require('apollo-server');
const db = require('./config/database');

const typeDefs = require('./lib/types/schema');
const resolvers = require('./lib/resolvers/schema');
 
const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
