import styled, { createGlobalStyle, css } from 'styled-components';

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

export const AddCaption = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  gap: ${(props) => props.theme.spacing(0.5)};

  padding: ${(props) => props.theme.spacing(0.25)} ${(props) => props.theme.spacing(0.5)};

  > * {
    color: #707070;
  }

  svg {
    font-size: 12px;
  }

  &:hover {
    background-color: #e6e6e6;
    > * {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export const SidebarElement = styled.div`
  ${SidebarElementBaseCSS}
`;

export const GlobalLayout = createGlobalStyle`
  body {
    background-color: #f7f7f7;
  }
`;
