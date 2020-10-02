import React from 'react';

export const BoldFirstWord = ({ content }) => {
  const updatedWord = content.split(' ');
  const firstWord = updatedWord.shift();
  const spreadContent = updatedWord.join(' ');
  // updatedWord[0].style.fontWeight = '700';
  // updatedWord.join(' ');
  return (
    <h3 style={{ fontWeight: 300 }}>
      <span style={{ fontWeight: '600' }}>{firstWord}</span> {spreadContent}
    </h3>
  );
};

export const BoldFirstTwoWords = (content) => {
  const updatedWord = content.split('');
  updatedWord[0].style.fontWeight = '700';
  updatedWord[1].style.fontWeight = '700';
  updatedWord.join(' ');
  return <h3>{updatedWord}</h3>;
};
