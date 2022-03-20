import styled, { css } from 'styled-components';

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

export const SidebarElement = styled.div`
  ${SidebarElementBaseCSS}
`;
