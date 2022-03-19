import React from 'react';

import SidebarActions from '@/components/SidebarActions';
import SidebarHeader from '@/components/SidebarHeader';

import * as S from './sidebar.styles';

const Sidebar = () => {
  return (
    <S.Wrapper>
      <SidebarHeader />
      <S.Divider />
      <SidebarActions />
      <S.Divider />
    </S.Wrapper>
  );
};

export default Sidebar;
