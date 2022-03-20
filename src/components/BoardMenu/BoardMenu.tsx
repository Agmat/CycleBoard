import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

import { Menu } from '@/graphql/generated';

import * as S from './boardmenu.styles';

const BoardMenu = ({
  name,
  children,
}: Menu & { children?: JSX.Element | JSX.Element[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div>
      <S.Menu onClick={() => setIsOpen((old) => !old)} $isOpen={isOpen}>
        <ArrowRightIcon color="secondary" />
        <Typography variant="subtitle1" color="secondary">
          {name}
        </Typography>
      </S.Menu>
      <S.MenuItems $isOpen={isOpen}>{children}</S.MenuItems>
    </div>
  );
};

export default BoardMenu;
