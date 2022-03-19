import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: -4px;

  width: 4px;
  height: 500px;
  background: linear-gradient(180deg, #2e48ed 10.71%, rgba(39, 64, 225, 0) 86.61%);

  transition: opacity 0.2s ease;

  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

// Svg elem can only have string attributes
export const CollapseButton = styled(KeyboardArrowLeftIcon)`
  color: white;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.35s ease;
  background: linear-gradient(180deg, #2e48ed 0%, #2740e1 100%);

  // calc(main-container / 2 - self-size / 2) = calc(2 - 12)
  margin-left: -10px;
  margin-top: ${(props) => props.theme.spacing(2)};
`;
