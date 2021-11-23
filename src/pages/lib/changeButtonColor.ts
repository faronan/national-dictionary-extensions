export const changeButtonColor = () => {
  const changeColor = document.getElementById('changeColor');
  chrome.storage.sync.get('color', ({ color }) => {
    if (changeColor) {
      changeColor.style.backgroundColor = color;
    }
  });
  const searchDictionary = async (word: string) => {
    const url = `https://www.weblio.jp/content/${word}`;
    const kijiElements = await fetch(url)
      .then((response) => response.text())
      .then((text) => new DOMParser().parseFromString(text, 'text/html'))
      .then((document) => document.getElementsByClassName('kiji') as HTMLCollectionOf<HTMLElement>);

    const text = document.getElementById('text');
    if (text) {
      if (kijiElements.length != 0) {
        const children = kijiElements[0].children as HTMLCollectionOf<HTMLElement>;
        text.innerText = children[1].innerText;
      } else {
        text.innerText = `用語解説で「${word}」に一致する見出し語は見つかりませんでした。`;
      }
    }
  };

  const text = document.getElementById('text');
  chrome.storage.local.get('selectionString', ({ selectionString }) => {
    if (text) {
      text.innerText = selectionString;
    }
    changeColor!.addEventListener('click', () => searchDictionary(selectionString));
  });
};

export const changeText = () => {
  const text = document.getElementById('text');
  chrome.storage.local.get('selectionString', ({ selectionString }) => {
    if (text) {
      text.innerText = selectionString;
    }
  });
};
