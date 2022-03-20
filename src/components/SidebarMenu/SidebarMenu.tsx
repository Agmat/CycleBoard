import React from 'react';

import BoardLink from '@/components/BoardLink';
import { useGetBoardsNameQuery } from '@/graphql/generated';

const SidebarMenu = () => {
  const { loading, data } = useGetBoardsNameQuery();

  if (!data || loading) return null;

  console.log(data);
  return (
    <div>
      {data.boardMenus[0]?.boards?.map((board) => (
        <BoardLink {...board} key={board.name + board.icon} />
      ))}
    </div>
  );
};

export default SidebarMenu;
