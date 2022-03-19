import AddIcon from '@mui/icons-material/Add';
import ArticleIcon from '@mui/icons-material/Article';
import BoltIcon from '@mui/icons-material/Bolt';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import React from 'react';

import * as S from './sidebaractions.styles';

const SidebarActions = () => {
  const actions = [
    { Icon: SearchIcon, name: 'Search' },
    { Icon: NotificationsNoneIcon, name: 'Notifications' },
    {
      Icon: BoltIcon,
      name: 'Commands',
      endAdornment: (
        <S.EndAdornment>
          <KeyboardCommandKeyIcon color="primary" />
          <Typography color="primary" variant="subtitle1">
            K
          </Typography>
        </S.EndAdornment>
      ),
    },
    { Icon: AddIcon, name: 'Create doc' },
    { Icon: ArticleIcon, name: 'All docs' },
  ];

  return (
    <S.Wrapper>
      {actions.map(({ Icon, name, endAdornment }) => (
        <S.ActionWrapper key={`action#${name}`}>
          <Icon color="secondary" />
          <Typography variant="subtitle1" color="secondary">
            {name}
          </Typography>
          {endAdornment ? endAdornment : null}
        </S.ActionWrapper>
      ))}
    </S.Wrapper>
  );
};

export default SidebarActions;
