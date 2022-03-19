import React, { useState } from 'react';

import CollapseSidebar from '@/components/CollapseSidebar';
import SidebarActions from '@/components/SidebarActions';
import SidebarHeader from '@/components/SidebarHeader';
import * as GS from '@/style/globalStyle';

import * as S from './sidebar.styles';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <S.Wrapper>
      <CollapseSidebar setCollapsed={setCollapsed} />
      {collapsed ? <GS.CollapsedOverride /> : null}
      <SidebarHeader />
      <S.Divider />
      <SidebarActions />
      <S.Divider />
    </S.Wrapper>
  );
};

export default Sidebar;
