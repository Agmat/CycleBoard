import { getContrastRatio, Typography } from '@mui/material';
import React from 'react';

import { useGetCardQuery } from '@/graphql/generated';

import * as S from './card.styles';

const Card = ({ id }: { id: string }) => {
  const { data } = useGetCardQuery({ variables: { id } });

  if (!data) return null;
  return (
    <S.Wrapper>
      <Typography variant="body1">{data.card?.description}</Typography>
      <S.TagWrapper>
        {data.card?.tags?.map((tag) => (
          <S.Tag variant="caption" $color={tag.color} key={id + tag.text}>
            {tag.text}
          </S.Tag>
        ))}
      </S.TagWrapper>
    </S.Wrapper>
  );
};

export default Card;
