
import { ApolloServer, gql, ApolloError } from 'apollo-server';
import * as jwt from 'jsonwebtoken';

import { connect } from './config/database';

import typeDefs from './lib/typeDefs/schema';
import resolvers from './lib/resolvers/schema';

connect();

const JWT_SECRET_KEY = "SECRET_KEY";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}) => {
        if(req.body.operationName !== 'LOGIN') {
            const token = req.headers.authorization || '';
            try {
                const decode: any = jwt.verify(token, JWT_SECRET_KEY);
            } catch (err) {
                console.log(err);
                throw new ApolloError('FORBIDDEN');
            };
        }
    }
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
