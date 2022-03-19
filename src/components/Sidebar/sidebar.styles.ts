import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-basis: 240px;
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const Divider = styled.div`
  height: 1px;
  opacity: 0.2;
  margin: 1px 0;
  background: #707070;

  margin-left: -${(props) => props.theme.spacing(2)};
  width: calc(100% + ${(props) => props.theme.spacing(2 * 2)});
`;
