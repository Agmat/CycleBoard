import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: ${(props) => props.theme.spacing(2)} ${(props) => props.theme.spacing(4)};
`;

export const Groups = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(1.5)};
`;
