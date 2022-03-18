import { gql } from 'apollo-server';

const typeDefs = gql`
  # Your schema will go here
  type Board {
    name: String!
    groups: [Group]
  }

  type Group {
    name: String!
    cards: [Card]
  }

  type Card {
    description: String!
    tags: [Tag]
  }

  type Tag {
    text: String!
    color: String
  }

  type Query {
    boards: [Board]
  }
`;

export default typeDefs;
