import './App.css';

import React from 'react';

import Board from '@/components/Board';
import Sidebar from '@/components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Board />
    </div>
  );
}

export default App;
