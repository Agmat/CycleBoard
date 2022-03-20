import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Typography } from '@mui/material';
import { darken } from 'polished';
import styled from 'styled-components';

export const MoreIcon = styled(MoreHorizIcon)`
  opacity: 0;
  position: absolute;
  background-color: #f7f7f7f2;
  right: ${(props) => props.theme.spacing(1)};
`;

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  background-color: white;
  padding: ${(props) => props.theme.spacing(1)};

  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;

    ${MoreIcon} {
      opacity: 0.9;
    }
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(props) => props.theme.spacing(1)};
  gap: ${(props) => props.theme.spacing(0.5)};
`;

export const Tag = styled(Typography)<{ $color?: string | null }>`
  border-radius: 4px;
  padding: ${(props) => props.theme.spacing(0.25)} ${(props) => props.theme.spacing(0.5)};

  ${(props) =>
    props.$color
      ? `
        color: ${darken(0.4, props.$color)};
        background-color: ${props.$color};
        border: 1px solid ${props.$color};
      `
      : `border: 1px solid #E6E6E6`}
`;
