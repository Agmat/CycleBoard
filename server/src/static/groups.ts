import { faker } from '@faker-js/faker';

import { cards } from './cards';

const groups = [
  {
    id: faker.datatype.uuid(),
    name: '🖼️ Framing',
    cards: [cards[0]],
  },
  {
    id: faker.datatype.uuid(),
    name: '🎨 In Design',
    cards: [cards[1]],
  },
  {
    id: faker.datatype.uuid(),
    name: '✏️ In Review',
    cards: [cards[2]],
  },
];

export default groups;
