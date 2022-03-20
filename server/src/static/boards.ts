import { faker } from '@faker-js/faker';

import groups, { groupWithLotsOfCards, moreGroups } from './groups';

const boards = [
  {
    id: faker.datatype.uuid(),
    icon: '🎨',
    name: 'Design',
    groups,
  },
  {
    id: faker.datatype.uuid(),
    icon: '🦊',
    name: 'Feedback',
    groups: [...groups, ...moreGroups],
  },
  {
    id: faker.datatype.uuid(),
    icon: '🖥️',
    name: 'Roadmap Tech',
    groups: groupWithLotsOfCards,
  },
  {
    id: faker.datatype.uuid(),
    icon: '🤖',
    name: 'Github feedback',
  },
  {
    id: faker.datatype.uuid(),
    icon: '⚛️',
    name: 'Improvements',
    groups: [...groups, ...groupWithLotsOfCards, ...moreGroups],
  },
  {
    id: faker.datatype.uuid(),
    icon: '🚀',
    name: 'Bugs',
  },
  {
    id: faker.datatype.uuid(),
    icon: '⌛',
    name: 'Sprint 4',
  },
];

export default boards;
