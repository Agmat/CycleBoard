import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography } from '@mui/material';
import React from 'react';

import Card from '@/components/Card';
import { Group as GroupType } from '@/graphql/generated';

import * as S from './goup.styles';

const Group = ({ name, cards }: GroupType) => {
  return (
    <div>
      <S.Wrapper>
        <S.Title>
          <ArrowDropDownIcon color="secondary" />
          <Typography variant="subtitle1" color="primary">
            {name}
          </Typography>
        </S.Title>
        <div>
          {cards?.map((card) => (
            <Card id={card.id} key={card.id} />
          ))}
        </div>
        <S.AddCard>
          <AddIcon />
          <Typography variant="caption">New Doc</Typography>
        </S.AddCard>
      </S.Wrapper>
    </div>
  );
};

export default Group;
