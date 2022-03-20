import { cards } from './cards';

const boards = [
  {
    icon: '🎨',
    name: 'Design',
    groups: [
      {
        name: '🖼️ Framing',
        cards: [cards[0]],
      },
      {
        name: '🎨 In Design',
        cards: [cards[1]],
      },
      {
        name: '✏️ In Review',
        cards: [cards[2]],
      },
    ],
  },
  {
    icon: '🦊',
    name: 'Feedback',
  },
  {
    icon: '🖥️',
    name: 'Roadmap Tech',
  },
  {
    icon: '🤖',
    name: 'Github feedback',
  },
  {
    icon: '⚛️',
    name: 'Improvements',
  },
  {
    icon: '🚀',
    name: 'Bugs',
  },
  {
    icon: '⌛',
    name: 'Sprint 4',
  },
];

export default boards;
