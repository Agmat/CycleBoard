import { faker } from '@faker-js/faker';

import groups from './groups';

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
  },
  {
    id: faker.datatype.uuid(),
    icon: '🖥️',
    name: 'Roadmap Tech',
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
