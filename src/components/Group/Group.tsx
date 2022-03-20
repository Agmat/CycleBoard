import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography } from '@mui/material';
import React from 'react';

import { Group as GroupType } from '@/graphql/generated';

import * as S from './goup.styles';

const Group = ({ name }: GroupType) => {
  return (
    <S.Wrapper>
      <S.Title>
        <ArrowDropDownIcon color="secondary" />
        <Typography variant="subtitle1" color="primary">
          {name}
        </Typography>
      </S.Title>
      <S.AddCard>
        <AddIcon />
        <Typography variant="caption">New Doc</Typography>
      </S.AddCard>
    </S.Wrapper>
  );
};

export default Group;
