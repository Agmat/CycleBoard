import { Typography } from '@mui/material';
import React from 'react';

import { useGetCardQuery } from '@/graphql/generated';

import * as S from './card.styles';

const Card = ({ id }: { id: string }) => {
  const { data } = useGetCardQuery({ variables: { id } });

  console.log(data);

  if (!data) return null;
  return (
    <S.Wrapper>
      <Typography variant="body1">{data.card?.description}</Typography>
    </S.Wrapper>
  );
};

export default Card;
