import React from 'react';

import * as S from './collapsesidebar.styles';

const CollapseSidebar = ({
  setCollapsed,
}: {
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <S.Wrapper>
      <S.CollapseButton onClick={() => setCollapsed((old) => !old)} />
    </S.Wrapper>
  );
};

export default CollapseSidebar;
