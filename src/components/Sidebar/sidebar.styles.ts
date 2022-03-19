import styled from 'styled-components';

import { Wrapper as CollapseWrapper } from '@/components/CollapseSidebar/collapsesidebar.styles';

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
