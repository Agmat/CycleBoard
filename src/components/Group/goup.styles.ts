import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(1)};
  border-radius: 8px;
  padding: ${(props) => props.theme.spacing(1)};
  background-color: #f0f0f0;
`;

export const Title = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(1)};
`;

export const AddCard = styled.div`
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
