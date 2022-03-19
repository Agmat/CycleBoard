import styled from 'styled-components';

export const SidbarElement = styled.div`
  display: flex;
  border-radius: 4px;
  align-items: center;
  padding: ${(props) => props.theme.spacing(1)};
  gap: ${(props) => props.theme.spacing(1)};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.palette.primary.light};
  }
`;
