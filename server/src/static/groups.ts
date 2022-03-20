import { faker } from '@faker-js/faker';

import { cards } from './cards';

const groups = [
  {
    id: faker.datatype.uuid(),
    name: '🖼️ Framing',
    cards: [cards[0], cards[3], cards[4], cards[5]],
  },
  {
    id: faker.datatype.uuid(),
    name: '🎨 In Design',
    cards: [cards[1]],
  },
  {
    id: faker.datatype.uuid(),
    name: '✏️ In Review',
    cards: [cards[2], cards[6]],
  },
];

export const moreGroups = [
  {
    id: faker.datatype.uuid(),
    name: '🖼️ Framing v2',
    cards: [cards[0], cards[3], cards[4], cards[5]],
  },
  {
    id: faker.datatype.uuid(),
    name: '🎨 In Design v2',
    cards: [cards[1]],
  },
  {
    id: faker.datatype.uuid(),
    name: '✏️ In Review v2',
    cards: [cards[2], cards[6]],
  },
];

export const groupWithLotsOfCards = [
  {
    id: faker.datatype.uuid(),
    name: '✍️ To do',
    cards: [
      cards[0],
      cards[3],
      cards[4],
      cards[5],
      cards[0],
      cards[3],
      cards[4],
      cards[5],
      cards[0],
      cards[3],
      cards[4],
      cards[5],
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: '🏗️️ Work in progress',
    cards: [cards[2], cards[6], cards[0], cards[3], cards[4], cards[5]],
  },
  {
    id: faker.datatype.uuid(),
    name: '✅ Done',
  },
];

export default groups;
