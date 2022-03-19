import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Avatar = styled.img`
  border-radius: 50%;

  // Little css trick to make it looks like there is 2 borders
  box-shadow: 0 0 0 2px white, 0 0 0 4px #102dea;
`;
