import React from 'react';

import SidebarHeader from '@/components/SidebarHeader';

import * as S from './sidebar.styles';

const Sidebar = () => {
  return (
    <S.Wrapper>
      <SidebarHeader />
    </S.Wrapper>
  );
};

export default Sidebar;
