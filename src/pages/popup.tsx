import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import type { NextPage } from 'next';

const Popup: NextPage = () => {
  const [storageValue, setStorageValue] = useState('');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const buttonStyle = {
    height: '30px',
    width: '50px',
  };
  const searchDictionary = async () => {
    const url = `https://www.weblio.jp/content/${input}`;
    const kijiElements = await fetch(url)
      .then((response) => response.text())
      .then((text) => new DOMParser().parseFromString(text, 'text/html'))
      .then((document) => document.getElementsByClassName('kiji') as HTMLCollectionOf<HTMLElement>);

    if (kijiElements.length != 0) {
      const children = kijiElements[0].children as HTMLCollectionOf<HTMLElement>;
      setResult(children[1].innerText);
    } else {
      setResult(`用語解説で「${input}」に一致する見出し語は見つかりませんでした。`);
    }
  };

  chrome.storage.local.get('selectionString', ({ selectionString }) => {
    setStorageValue(selectionString);
  });
  useEffect(() => {
    setInput(storageValue);
  }, [storageValue]);

  return (
    <main style={{ minWidth: '700px' }}>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button style={buttonStyle} onClick={searchDictionary}>
          検索
        </button>
      </div>
      <text>{result}</text>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById('root')
);
