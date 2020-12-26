
import { ApolloServer, gql } from 'apollo-server';

import { connect } from './config/database';

import typeDefs from './lib/typeDefs/schema';
import resolvers from './lib/resolvers/schema';
 
connect();
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({req, res}) => {
    }
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
