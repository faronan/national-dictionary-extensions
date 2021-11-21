import React from 'react';
import ReactDOM from 'react-dom';
import type { NextPage } from 'next';
import { changeButtonColor, changeText } from './lib/changeButtonColor';

const Popup: NextPage = () => {
  const buttonStyle = {
    height: '30px',
    width: '30px',
  };
  return (
    <div>
      <main style={{ minWidth: '700px' }}>
        <button id="changeColor" style={buttonStyle}></button>
        <text id="text">hoge</text>
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

changeButtonColor();
changeText();
