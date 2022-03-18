import { faker } from '@faker-js/faker';
import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';

const boards = [
  {
    name: '🎨 Design',
    groups: [
      {
        name: '🖼️ Framing',
        cards: [
          {
            description: faker.lorem.paragraphs(),
            tags: [
              { text: '🦋' },
              {
                text: `CYC-${faker.datatype.number(100)}`,
              },
              { text: 'Design', color: '#102DEA' },
            ],
          },
        ],
      },
      {
        name: '🎨 In Design',
        cards: [
          {
            description: faker.lorem.paragraphs(),
            tags: [
              { text: '🐶' },
              {
                text: `CYC-${faker.datatype.number(100)}`,
              },
              { text: 'Design', color: '#102DEA' },
            ],
          },
        ],
      },
      {
        name: '✏️ In Review',
        cards: [
          {
            description: faker.lorem.paragraphs(),
            tags: [
              { text: '⛄' },
              {
                text: `CYC-${faker.datatype.number(100)}`,
              },
              { text: 'Design', color: '#102DEA' },
            ],
          },
        ],
      },
    ],
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    boards: () => boards,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
