import React from 'react';
import { loadDefaultJapaneseParser } from 'budoux';

const parser = loadDefaultJapaneseParser();

export const useBudouX = () => {
  const parse = (text: string) => {
    return parser.parse(text).map((s) => (
      <span key={s} style={{ display: 'inline-block' }}>
        {s}
      </span>
    ));
  };
  return {
    parse,
  };
};
