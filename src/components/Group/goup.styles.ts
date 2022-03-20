import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from 'styled-components';

import { AddCaption } from '@/style/globalStyle';

export const Wrapper = styled.div<{ $isClosed: boolean }>`
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(1)};
  border-radius: 8px;
  padding: ${(props) => props.theme.spacing(1)};
  background-color: #f0f0f0;
  overflow: hidden;

  transition: all 0.35s ease;
  max-height: calc(100vh - 64px - 16px);

  ${(props) =>
    props.$isClosed &&
    `
      // 64 = Height of the header | 16 = padding bottom 
      height: calc(100vh - 64px - 16px);
      width: 33px;
      
      ${Title} {
        transform: rotate(-90deg);
        flex-direction: row-reverse;
      }
      
      ${CardsWrapper} {
        display: none;
      }
      
      ${AddCard} {
        display: none;
      }
  `}}
`;

export const Title = styled.div`
  display: flex;
  white-space: nowrap;
  gap: ${(props) => props.theme.spacing(1)};
`;

export const CollapseIcon = styled(ArrowDropDownIcon)`
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
    border-radius: 4px;
  }
`;

export const CardsWrapper = styled.div`
  overflow-y: auto;
  border-radius: 6px;
  > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(1)};
  }
`;

export const AddCard = styled.div`
  ${AddCaption}
`;
