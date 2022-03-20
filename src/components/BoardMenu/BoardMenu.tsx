import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import slugify from 'slugify';

import { Menu } from '@/graphql/generated';

import * as S from './boardmenu.styles';

const BoardMenu = ({
  name,
  boards,
  children,
}: Menu & { children?: JSX.Element | JSX.Element[] }) => {
  const location = useLocation();
  const menuRoutes = boards?.map(({ name }) => `/${slugify(name)}`);
  const [isOpen, setIsOpen] = useState(!!menuRoutes?.includes(location.pathname));

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
