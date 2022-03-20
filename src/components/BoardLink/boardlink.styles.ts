import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SidebarElementBaseCSS } from '@/style/globalStyle';

export const MoreIcon = styled(MoreHorizIcon)`
  opacity: 0;
  color: white;
  position: absolute;
  right: ${(props) => props.theme.spacing(1)};
`;

// https://styled-components.com/docs/api#transient-props 🤯
export const StyledLink = styled(Link)<{ $isCurrentPage: boolean }>`
  ${SidebarElementBaseCSS};

  display: flex;
  position: relative;
  text-decoration: none;
  gap: ${(props) => props.theme.spacing(1.5)};
  padding-left: ${(props) => props.theme.spacing(3.5)};
  
  transition: padding-left .35s ease;

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
    ${MoreIcon} {
      opacity: 1;
    }
  
    > * {
      color: white;
    }
`;
