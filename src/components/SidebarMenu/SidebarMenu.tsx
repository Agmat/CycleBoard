import React from 'react';

import BoardLink from '@/components/BoardLink';
import BoardMenu from '@/components/BoardMenu';
import { useGetBoardsNameQuery } from '@/graphql/generated';

const SidebarMenu = () => {
  const { loading, data } = useGetBoardsNameQuery();

  if (!data || loading) return null;

  console.log(data);
  return (
    <div>
      {data.boardMenus.map((menu) => (
        <BoardMenu {...menu} key={menu.name}>
          {menu.boards?.map((board) => (
            <BoardLink {...board} key={board.name + board.icon} />
          ))}
        </BoardMenu>
      ))}
    </div>
  );
};

export default SidebarMenu;
