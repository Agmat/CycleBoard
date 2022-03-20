import { Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { useGetBoardIconQuery } from '@/graphql/generated';

const BoardHeader = () => {
  const { pathname } = useLocation();
  const currentBoardName = pathname.split('/').at(-1)?.replace('-', ' ') as string;
  const { data } = useGetBoardIconQuery({ variables: { boardName: currentBoardName } });

  if (!data) return null;
  return (
    <header>
      <Typography variant="h5">{data.board?.icon}</Typography>
      <Typography variant="h5">{currentBoardName}</Typography>
    </header>
  );
};

export default BoardHeader;
