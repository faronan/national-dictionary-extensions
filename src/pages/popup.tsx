import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import type { NextPage } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useBudouX } from '../hooks/useBudouX';
import { Box, FormControl, Input, IconButton, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

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

  const { parse } = useBudouX();

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
    <Box w={400} p={4}>
      <form onSubmit={onSubmit}>
        <FormControl>
          <Box display="flex" alignItems="baseline">
            <Input size="xs" w={150} {...register('word')} />
            <IconButton
              size="xs"
              ml="2"
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              type="submit"
            >
              検索
            </IconButton>
          </Box>
        </FormControl>
      </form>
      <Box mt="2">
        <Text color="gray.500">{parse(result)}</Text>
      </Box>
    </Box>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Popup />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
