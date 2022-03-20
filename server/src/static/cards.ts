import { faker } from '@faker-js/faker';

export const cards = [
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(),
    tags: [
      { text: '🦋' },
      {
        text: `CYC-${faker.datatype.number(100)}`,
      },
      { text: 'Design', color: '#102DEA' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(),
    tags: [
      { text: '🐶' },
      {
        text: `CYC-${faker.datatype.number(100)}`,
      },
      { text: 'Design', color: '#102DEA' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(),
    tags: [
      { text: '⛄' },
      {
        text: `CYC-${faker.datatype.number(100)}`,
      },
      { text: 'Design', color: '#102DEA' },
    ],
  },
];
