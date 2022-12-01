import React from 'react';
import { useWordList } from '../state/GameProvider';
import styles from '../styles/Wordbank.scss';

export default function Wordbank() {

  const { wordList } = useWordList();

  const usedWords = wordList.map((word) => {
    return (
      <li key={wordList.indexOf(word)}>
        {word}
      </li>
    );
  });

  return (
    <>
      <div className={styles.wordbank}>
        <ul>
          {usedWords}
        </ul>
      </div>
    </>
  );
}
