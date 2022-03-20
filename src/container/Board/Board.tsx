import React from 'react';

import BoardHeader from '@/components/BoardHeader';

import * as S from './board.styles';

const Board = () => {
  return (
    <S.Wrapper>
      <BoardHeader />
    </S.Wrapper>
  );
};

export default Board;
