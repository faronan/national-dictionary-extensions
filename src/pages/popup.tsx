import React from 'react';
import ReactDOM from 'react-dom';
import type { NextPage } from 'next';
import { main } from './lib/popupLib';

const Popup: NextPage = () => {
  const buttonStyle = {
    height: '30px',
    width: '50px',
  };
  return (
    <div>
      <main style={{ minWidth: '700px' }}>
        <div>
          <input type="text" id="input"></input>
          <button id="searchButton" style={buttonStyle}>
            検索
          </button>
        </div>
        <text id="searchResult"></text>
      </main>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('root')
);

main();
