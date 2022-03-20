import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Board from '@/container/Board';
import Sidebar from '@/container/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Routes>
        <Route path="*" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
