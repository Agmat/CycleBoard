import React from 'react';

import logo from '@/logo.svg';

const Board = () => {
  return (
    <header className="App-header" style={{ flex: 1 }}>
      <img src={logo} className="App-logo" alt="logo" />
      <p className="header">
        🚀 Vite + React + Typescript 🤘 & <br />
        Eslint 🔥+ Prettier
      </p>

      <div className="body">
        <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

        <p>
          Mess up the code in <code>App.tsx </code> and save the file.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </div>
    </header>
  );
};

export default Board;
