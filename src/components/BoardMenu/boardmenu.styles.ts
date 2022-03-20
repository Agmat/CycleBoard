import styled from 'styled-components';

import { SidebarElement } from '@/style/globalStyle';

export const Menu = styled(SidebarElement)<{ $isOpen: boolean }>`
  svg {
    transition: transform 0.35s ease;
  }

  ${(props) =>
    props.$isOpen &&
    `
    > * {
      color: white;
    }
    
    svg {
      transform: rotate(90deg);
    }
  `}
  color: white;
`;

export const MenuItems = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;

  // This is actually cheating, I should have done a JS function to calculate the precise height oh the elem but I don't have time 😬
  max-height: 20vh;
  transition: max-height 0.35s ease;

  ${(props) =>
    !props.$isOpen &&
    `
    max-height: 0;
  `}
`;
