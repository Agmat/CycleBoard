import { gql } from 'apollo-server';

const typeDefs = gql`
  # Your schema will go here
  type Menu {
    name: String!
    boards: [Board!]
  }

  type Board {
    id: ID!
    name: String!
    icon: String!
    groups: [Group!]
  }

  type Group {
    id: ID!
    name: String!
    cards: [Card!]
  }

  type Card {
    id: ID!
    description: String!
    tags: [Tag!]
  }

  type Tag {
    text: String!
    color: String
  }

  type Query {
    boardMenus: [Menu!]!
    board(name: String!): Board
  }
`;

export default typeDefs;
