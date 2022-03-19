import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: ${({ size }: { size?: string }) => (size ? size : '20px')};
  height: ${({ size }: { size?: string }) => (size ? size : '20px')};
`;

export const RightImage = styled.img`
  position: absolute;
  top: 40%;
  right: 0;
`;
