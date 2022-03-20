import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import { cards } from './static/cards';

const boardMenu = [
  {
    name: 'Starred',
    boards: [
      {
        icon: '🎨',
        name: 'Design',
        groups: [
          {
            name: '🖼️ Framing',
            cards: [cards[0]],
          },
          {
            name: '🎨 In Design',
            cards: [cards[1]],
          },
          {
            name: '✏️ In Review',
            cards: [cards[2]],
          },
        ],
      },
      {
        icon: '🦊',
        name: 'Feedback',
      },
      {
        icon: '🖥️',
        name: 'Roadmap tech',
      },
      {
        icon: '🤖',
        name: 'Github feedback',
      },
      {
        icon: '⚛️',
        name: 'Improvements',
      },
      {
        icon: '🚀',
        name: 'Bugs',
      },
      {
        icon: '⌛',
        name: 'Sprint 4',
      },
    ],
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
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
