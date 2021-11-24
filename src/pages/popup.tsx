import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';

const Popup: NextPage = () => {
  const [storageValue, setStorageValue] = useState('');
  const [result, setResult] = useState('');

  type FormData = {
    word: string;
  };
  const { register, setValue, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(async (data) => {
    const result = await searchDictionary(data['word']);
    setResult(result);
  });

  const searchDictionary = async (word: string) => {
    const url = `https://www.weblio.jp/content/${word}`;
    const kijiElements = await fetch(url)
      .then((response) => response.text())
      .then((text) => new DOMParser().parseFromString(text, 'text/html'))
      .then((document) => document.getElementsByClassName('kiji') as HTMLCollectionOf<HTMLElement>);

    if (kijiElements.length != 0) {
      const children = kijiElements[0].children as HTMLCollectionOf<HTMLElement>;
      return children[1].innerText;
    } else {
      return `用語解説で「${word}」に一致する見出し語は見つかりませんでした。`;
    }
  };

  //ローカルストレージは常に監視して、変更があった時だけuseEffectを発火させる
  chrome.storage.local.get('selectionString', ({ selectionString }) => {
    setStorageValue(selectionString);
  });
  useEffect(() => {
    setValue('word', storageValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageValue]);

  return (
    <main style={{ minWidth: '700px' }}>
      <form onSubmit={onSubmit}>
        <input {...register('word')} />
        <button type="submit">検索</button>
      </form>
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
