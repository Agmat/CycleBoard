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

export default groups;
