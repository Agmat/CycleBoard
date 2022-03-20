import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  gap: ${(props) => props.theme.spacing(1.5)};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;
