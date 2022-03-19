import React from 'react';

import * as S from './logo.styles';

const Logo = () => {
  return (
    <S.Wrapper>
      <img src="/src/assets/Logo/LeftPart.svg" alt="Left part of CycleApp logo" />
      <S.RightImage
        src="/src/assets/Logo/RigthPart.svg"
        alt="Right part of CycleApp logo"
      />
    </S.Wrapper>
  );
};

export default Logo;
