
const { ApolloServer, gql } = require('apollo-server');
const db = require('./config/database');

const typeDefs = require('./lib/typeDefs/schema');
const resolvers = require('./lib/resolvers/schema');
 
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({req, res}) => {
    }
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
