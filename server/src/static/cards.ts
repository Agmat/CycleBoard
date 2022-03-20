import { faker } from '@faker-js/faker';

export const cards = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
