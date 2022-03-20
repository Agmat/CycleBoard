import styled from 'styled-components';

import { AddCaption } from '@/style/globalStyle';

export const Wrapper = styled.div`
  height: 100vh;
  overflow-y: hidden;
  margin-left: 240px;
  transition: margin-left 0.35s linear;
  padding: ${(props) => props.theme.spacing(2)} ${(props) => props.theme.spacing(4)};
`;

export const Groups = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(1.5)};
`;

export const AddGroup = styled.div`
  ${AddCaption};
`;
