import styled from 'styled-components';

import * as GS from '@/style/globalStyle';

export const Wrapper = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)};
  padding-bottom: ${(props) => props.theme.spacing(2.5)};
`;

export const EndAdornment = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;

  > * {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.palette.secondary.main};
  }

  > h6 {
    line-height: 16px;
    text-align: center;
  }
`;

export const ActionWrapper = styled(GS.SidebarElement)`
  display: flex;

  &:hover {
    > * {
      color: white;
    }

    ${EndAdornment} {
      > * {
        background-color: white;
        color: ${(props) => props.theme.palette.primary.light};
      }
    }
  }
`;
