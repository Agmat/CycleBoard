import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-basis: 240px;
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.palette.primary.main};
`;
