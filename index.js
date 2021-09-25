'use strict'

const { readFileSync } = require('fs');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const typeDefs = readFileSync('./schema/type-defs.graphql').toString('utf-8');
const { Query } = require('./resolvers/query');
const { Mutation } = require('./resolvers/mutation');
const { Photo } = require('./resolvers/photo');
const { User } = require('./resolvers/user');

const resolvers = {
	Query,
	Mutation,
	Photo,
	User
};


let app = express();
let apolloServer = null;

async function startServer() {
	apolloServer = new ApolloServer({ typeDefs, resolvers });		
	await apolloServer.start();
	apolloServer.applyMiddleware({ app });
}


startServer();


app.get('/', (req, res) => res.end('Welcome to the PhotoShare API'))
app.listen({ port: 4000 }, () => console.log(`GraphQL Server running @http://localhost:4000${apolloServer.graphqlPath}`))
