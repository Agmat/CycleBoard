import styled, { createGlobalStyle } from 'styled-components';

import { Menu, MenuItems } from '@/components/BoardMenu/boardmenu.styles';
import {
  CollapseButton,
  Wrapper as CollapseWrapper,
} from '@/components/CollapseSidebar/collapsesidebar.styles';
import { Wrapper as SidebarHeaderWrapper } from '@/components/SidebarHeader/sidebarheader.styles';

export const Wrapper = styled.div`
  position: relative;
  width: 240px;
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: ${(props) => props.theme.spacing(2)};

  transition: all 0.35s linear;

  &:hover {
    ${CollapseWrapper} {
      opacity: 1;
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  opacity: 0.2;
  margin: 1px 0;
  background: #707070;

  margin-left: -${(props) => props.theme.spacing(2)};
  width: calc(100% + ${(props) => props.theme.spacing(2 * 2)});
`;

export const CollapsedOverride = createGlobalStyle`
  ${SidebarHeaderWrapper} {
    flex-direction: column;
    
    h6 {
      display: none;
    }

    svg {
      display: none;
    }
    
    > div {
      justify-content: center;
    }
  }
  
  ${Wrapper} {
    width: 64px;
    padding: ${(props) => props.theme.spacing(1.5)};
  }

  ${Divider} {
      margin-left: -${(props) => props.theme.spacing(1.5)};
      width: calc(100% + ${(props) => props.theme.spacing(1.5 * 2)});
  }
    
  ${CollapseButton} {
    transform: rotate(180deg);
  }

  ${Menu} {
    display: none;
  }
  
  ${MenuItems} {
      a {
          padding-left: ${(props) => props.theme.spacing(1.5)};
      }
  }
`;
