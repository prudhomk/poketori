/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [word, setWord] = useState('');
  const [wordList, setWordList] = useState([]);
  const [dictionary, setDictionary] = useState('');
  const [language, setLanguage] = useState('en');

  return (
    <GameContext.Provider value={{
      word,
      setWord,
      wordList,
      setWordList,
      dictionary,
      setDictionary,
      language,
      setLanguage
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useWord = () => {
  const { word, setWord } = useContext(GameContext);

  return { word, setWord };
};

export const useWordList = () => {
  const { wordList, setWordList } = useContext(GameContext);

  return { wordList, setWordList };
};

export const useDictionary = () => {
  const { dictionary, setDictionary } = useContext(GameContext);

  return { dictionary, setDictionary };
};

export const useLanguage = () => {
  const { language, setLanguage } = useContext(GameContext);

  return { language, setLanguage };
};
