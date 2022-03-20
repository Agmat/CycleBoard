import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';
import React from 'react';

import Logo from '@/components/Logo';
import * as GS from '@/style/globalStyle';

import * as S from './sidebarheader.styles';

const SidebarHeader = () => {
  return (
    <S.Wrapper>
      <GS.SidebarElement>
        <Logo />
        <Typography variant="h6" color="white">
          Cycle
        </Typography>
        <KeyboardArrowDownIcon color="secondary" />
      </GS.SidebarElement>
      <GS.SidebarElement>
        <S.Avatar
          width="18"
          height="18"
          alt="Avatar image"
          src="https://avatars.githubusercontent.com/u/14357997?v=4"
        />
        <KeyboardArrowDownIcon color="secondary" />
      </GS.SidebarElement>
    </S.Wrapper>
  );
};

export default SidebarHeader;
