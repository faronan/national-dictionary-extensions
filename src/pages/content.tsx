import React from 'react';

document.addEventListener('selectionchange', () => {
  const selection = document.getSelection();
  if (!selection) return;

  const selectionString = selection.toString();
  chrome.storage.local.set({ selectionString });
});
