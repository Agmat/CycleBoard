import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import boards from './static/boards';

const boardMenu = [
  {
    name: 'Starred',
    boards,
  },
  {
    name: 'Run planning',
  },
  {
    name: 'Boards',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    boardMenus: () => boardMenu,
    board: (parent: unknown, args: { name: string }) => {
      return boards.find((board) => board.name === args.name);
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
