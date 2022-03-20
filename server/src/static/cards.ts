import { faker } from '@faker-js/faker';

export const cards = [
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(),
    tags: [
      { id: faker.datatype.uuid(), text: '🦋' },
      {
        id: faker.datatype.uuid(),
        text: `CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#102DEA' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(),
    tags: [
      { id: faker.datatype.uuid(), text: '🐶' },
      {
        id: faker.datatype.uuid(),
        text: `CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#102DEA' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(),
    tags: [
      { id: faker.datatype.uuid(), text: '⛄' },
      {
        id: faker.datatype.uuid(),
        text: `CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#102DEA' },
    ],
  },
];
