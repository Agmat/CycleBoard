import { Typography } from '@mui/material';
import React from 'react';
import { useMatch } from 'react-router-dom';
import slugify from 'slugify';

import { Board } from '@/graphql/generated';

import * as S from './boardlink.styles';

const BoardLink = ({ name, icon }: Board) => {
  const match = useMatch(slugify(name));

  return (
    <S.StyledLink to={slugify(name)} $isCurrentPage={!!match}>
      <Typography variant="subtitle2">{icon}</Typography>
      <Typography variant="subtitle2" color="secondary">
        {name}
      </Typography>
      <S.MoreIcon />
    </S.StyledLink>
  );
};

export default BoardLink;
