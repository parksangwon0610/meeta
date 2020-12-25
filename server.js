
const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("Connection to mongoDB");
});


const typeDefs = require('./lib/types/schema');
const resolvers = require('./lib/resolvers/schema');
 
const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
