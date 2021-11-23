export const main = () => {
  AddSearchButtonEvent();
  changeInputFieldValue();
};

const AddSearchButtonEvent = () => {
  const searchButton = document.getElementById('searchButton');
  if (!searchButton) return;

  searchButton.addEventListener('click', () => {
    const inputValue = getInputFieldValue();
    if (!inputValue) return;
    searchDictionary(inputValue);
  });
};

const changeInputFieldValue = () => {
  chrome.storage.local.get('selectionString', ({ selectionString }) => {
    setInputFieldValue(selectionString);
  });
};

const getInputFieldValue = () => {
  const input = <HTMLInputElement>document.getElementById('input');
  if (!input) return;

  return input.value;
};

const setInputFieldValue = (text: string) => {
  const input = <HTMLInputElement>document.getElementById('input');
  if (!input) return;

  input.value = text;
};

const setSearchResultText = (text: string) => {
  const searchResult = document.getElementById('searchResult');
  if (!searchResult) return;

  searchResult.innerText = text;
};

const searchDictionary = async (word: string) => {
  const url = `https://www.weblio.jp/content/${word}`;
  const kijiElements = await fetch(url)
    .then((response) => response.text())
    .then((text) => new DOMParser().parseFromString(text, 'text/html'))
    .then((document) => document.getElementsByClassName('kiji') as HTMLCollectionOf<HTMLElement>);

  if (kijiElements.length != 0) {
    const children = kijiElements[0].children as HTMLCollectionOf<HTMLElement>;
    setSearchResultText(children[1].innerText);
  } else {
    setSearchResultText(`用語解説で「${word}」に一致する見出し語は見つかりませんでした。`);
  }
};
