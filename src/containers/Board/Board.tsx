import React from 'react';
import { useLocation } from 'react-router-dom';

import BoardHeader from '@/components/BoardHeader';
import Group from '@/components/Group';
import { useGetBoardGroupsQuery } from '@/graphql/generated';

import * as S from './board.styles';

const Board = () => {
  const { pathname } = useLocation();
  const currentBoardName = pathname.split('/').at(-1)?.replace('-', ' ') as string;
  const { data } = useGetBoardGroupsQuery({ variables: { name: currentBoardName } });

  if (!data) return null;
  console.log(data);

  return (
    <S.Wrapper>
      <BoardHeader />
      <S.Groups>
        {data.board?.groups?.map((group) => (
          <Group key={group.name} {...group} />
        ))}
      </S.Groups>
    </S.Wrapper>
  );
};

export default Board;
