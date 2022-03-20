import styled, { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { CollapseButton } from '@/components/CollapseSidebar/collapsesidebar.styles';
import {
  Divider as SidebarDivider,
  Wrapper as SidebarWrapper,
} from '@/components/Sidebar/sidebar.styles';
import { Wrapper as SidebarHeaderWrapper } from '@/components/SidebarHeader/sidebarheader.styles';

// Split because sometime we want to have a SidebarElement that's not a div
export const SidebarElementBaseCSS = css`
  display: flex;
  border-radius: 4px;
  align-items: center;
  padding: ${(props) => props.theme.spacing(1)};
  gap: ${(props) => props.theme.spacing(1)};
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.palette.primary.light};
  }
`;

export const SidbarElement = styled.div`
  ${SidebarElementBaseCSS}
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
  
  ${SidebarWrapper} {
    width: 64px;
    padding: ${(props) => props.theme.spacing(1.5)};
  }
    
  ${CollapseButton} {
    transform: rotate(180deg);
  }
  
  ${SidebarDivider} {
    margin-left: -${(props) => props.theme.spacing(1.5)};
    width: calc(100% + ${(props) => props.theme.spacing(1.5 * 2)});
  }
`;
