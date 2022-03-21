import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import BoardHeader from '@/components/BoardHeader';
import Group from '@/components/Group';
import { useGetBoardGroupsQuery } from '@/graphql/generated';

import * as S from './board.styles';

const Board = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentBoardName = pathname.split('/').at(-1)?.replace('-', ' ') as string;
  const { data } = useGetBoardGroupsQuery({ variables: { name: currentBoardName } });

  if (!data) return null;
  if (!data.board) navigate('/Design');

  return (
    <S.Wrapper>
      <BoardHeader />
      <S.Groups>
        {data.board?.groups?.map((group) => (
          <Group key={group.name} {...group} />
        ))}
        <span>
          <S.AddGroup>
            <AddIcon />
            <Typography variant="caption">New Group</Typography>
          </S.AddGroup>
        </span>
      </S.Groups>
    </S.Wrapper>
  );
};

export default Board;
