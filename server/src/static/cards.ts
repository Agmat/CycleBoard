import { faker } from '@faker-js/faker';

export const cards = [
  {
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
