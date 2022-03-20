import { gql } from 'apollo-server';

const typeDefs = gql`
  # Your schema will go here
  type Menu {
    name: String!
    boards: [Board!]
  }

  type Board {
    name: String!
    icon: String!
    groups: [Group!]
  }

  type Group {
    name: String!
    cards: [Card!]
  }

  type Card {
    description: String!
    tags: [Tag!]
  }

  type Tag {
    text: String!
    color: String
  }

  type Query {
    boardMenus: [Menu!]!
  }
`;

export default typeDefs;
