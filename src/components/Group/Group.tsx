import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

import Card from '@/components/Card';
import { Group as GroupType } from '@/graphql/generated';

import * as S from './goup.styles';

const Group = ({ name, cards }: GroupType) => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div>
      <S.Wrapper $isClosed={isClosed}>
        <S.Title>
          <S.CollapseIcon color="secondary" onClick={() => setIsClosed((old) => !old)} />
          <Typography variant="subtitle1" color="primary">
            {name}
          </Typography>
        </S.Title>
        <S.CardsWrapper>
          {cards?.map((card) => (
            <Card id={card.id} key={card.id} />
          ))}
        </S.CardsWrapper>
        <S.AddCard>
          <AddIcon />
          <Typography variant="caption">New Doc</Typography>
        </S.AddCard>
      </S.Wrapper>
    </div>
  );
};

export default Group;
