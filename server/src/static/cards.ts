import { faker } from '@faker-js/faker';

export const cards = [
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(1),
    tags: [
      { id: faker.datatype.uuid(), text: '🦋' },
      {
        id: faker.datatype.uuid(),
        text: `#CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#E2E6FD' },
      { id: faker.datatype.uuid(), text: 'Sprint 5', color: '#ebfaf1' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(1),
    tags: [
      { id: faker.datatype.uuid(), text: '🐶' },
      {
        id: faker.datatype.uuid(),
        text: `#CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#E2E6FD' },
      { id: faker.datatype.uuid(), text: 'High Priority 🔥', color: '#FDF3E2' },
      { id: faker.datatype.uuid(), text: 'New features', color: '#d7e5eb' },
      { id: faker.datatype.uuid(), text: 'Sprint 4', color: '#f7e9fb' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(1),
    tags: [
      { id: faker.datatype.uuid(), text: '⛄' },
      {
        id: faker.datatype.uuid(),
        text: `#CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#E2E6FD' },
      { id: faker.datatype.uuid(), text: 'Sprint 5', color: '#ebfaf1' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(1),
    tags: [
      { id: faker.datatype.uuid(), text: '🦣' },
      {
        id: faker.datatype.uuid(),
        text: `#CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#E2E6FD' },
      { id: faker.datatype.uuid(), text: 'Sprint 5', color: '#ebfaf1' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(1),
    tags: [
      { id: faker.datatype.uuid(), text: '🐰' },
      {
        id: faker.datatype.uuid(),
        text: `#CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#E2E6FD' },
      { id: faker.datatype.uuid(), text: 'Sprint 5', color: '#ebfaf1' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(1),
    tags: [
      { id: faker.datatype.uuid(), text: '⌛' },
      {
        id: faker.datatype.uuid(),
        text: `#CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#E2E6FD' },
      { id: faker.datatype.uuid(), text: 'Sprint 5', color: '#ebfaf1' },
    ],
  },
  {
    id: faker.datatype.uuid(),
    description: faker.lorem.paragraphs(1),
    tags: [
      { id: faker.datatype.uuid(), text: '😺' },
      {
        id: faker.datatype.uuid(),
        text: `#CYC-${faker.datatype.number(100)}`,
      },
      { id: faker.datatype.uuid(), text: 'Design', color: '#E2E6FD' },
      { id: faker.datatype.uuid(), text: 'Sprint 5', color: '#ebfaf1' },
    ],
  },
];
