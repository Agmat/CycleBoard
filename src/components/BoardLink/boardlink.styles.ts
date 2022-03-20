import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SidebarElementBaseCSS } from '@/style/globalStyle';

// https://styled-components.com/docs/api#transient-props 🤯
export const StyledLink = styled(Link)<{ $isCurrentPage: boolean }>`
  ${SidebarElementBaseCSS};

  display: flex;
  text-decoration: none;
  gap: ${(props) => props.theme.spacing(1.5)};
  padding-left: ${(props) => props.theme.spacing(3.5)};

  ${(props) =>
    props.$isCurrentPage &&
    `
     background-color: #102DEA;
     h6 {
      color: white;
      font-weight: 600;
     }
   
     &:hover {
      background-color: #102DEA;
     }
  `};

  &:hover {
    > * {
      color: white;
    }
`;
