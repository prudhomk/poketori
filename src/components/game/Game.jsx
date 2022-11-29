/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useWord, useWordList, useDictionary, useLanguage } from '../state/GameProvider.jsx';
import createModal from '../game/Modal';
import Snackbar from '@mui/material/Snackbar';
import Wordbank from './Wordbank';
import { useInterval } from '../state/customHooks.js';
import { ruleCheck, jpRuleCheck, checkDictionary, checkRepeats, checkTimer, remainingOptions } from '../utilities/ruleset.js';
import { Pokemon } from '../../data/pokemon.js';
import { ポケモン } from '../../data/ポケモン.js';
import styles from '../styles/Game.scss';

export default function Game() {

  const { word, setWord } = useWord();
  const { wordList, setWordList } = useWordList();
  const { dictionary, setDictionary } = useDictionary();
  const { language } = useLanguage();
  const [count, setCount] = useState(30);
  const [alert, setAlert] = useState(false);
  const [toast, setToast] = useState(false);
  const [altToast, setAltToast] = useState(false);
  const [hint, setHint] = useState('?');
  const history = useHistory();


  //Toast Handlers
  const handleOpen = () => {
    setToast(true);
  };

  const handleClose = () => {
    setToast(false);
  };

  const handleAltOpen = () => {
    setAltToast(true);
  };

  const handleAltClose = () => {
    setAltToast(false);
  };

  // const startingLetter = () => {
  //   let alphabet = 0;
  //   alphabet = Math.floor(Math.random() * 26);
  //   return alphabet;
  // };


  //Sourced from Dan Abramov
  useInterval(() => {
    if(count > 0) {
      setCount((prevState) => prevState - 1);
    }
  }, 1000);

  useEffect(() => {
    if(count === 0) {
      setAlert(true);
    }
  });

  // const latestWord = wordList[wordList.length - 1];

  switch(language) {
    case 'en':
      setDictionary(Pokemon);
      break;
    case 'jp':
      setDictionary(ポケモン);
      break;
    default:
      setDictionary(Pokemon);
  }

  const handleCheck = () => {
    if(wordList.length >= 1 && ruleCheck(wordList[wordList.length - 1], word) && checkDictionary(word, dictionary) && checkRepeats(word, wordList) && !checkTimer(count)) {
      setWordList(prevState => [...prevState, word]);
      setCount(30);
    } else if(wordList.length < 1 && checkDictionary(word, dictionary) && !checkTimer(count)) {
      setWordList([word]);
      setCount(30);
    } else if(!checkRepeats(word, wordList)) {
      handleAltOpen();

    } else if(language === 'jp') {
      if(wordList.length >= 1 && jpRuleCheck(wordList[wordList.length - 1], word) && checkDictionary(word, dictionary) && checkRepeats(word, wordList) && !checkTimer(count)) {
        setWordList(prevState => [...prevState, word]);
        setCount(30);
      } else if(wordList.length < 1 && checkDictionary(word, dictionary) && !checkTimer(count)) {
        setWordList([word]);
        setCount(30);
      }  else if(!checkRepeats(word, wordList)) {
        handleAltOpen();
      }
    } else {
      handleOpen();
    }
  };

  const handleHint = () => {
    if(remainingOptions(wordList, dictionary) !== false) {
      setHint(remainingOptions(wordList, dictionary));
    }
  };

  const handleQuit = () => {
    history.push('/');
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheck(word);
    document.getElementById('player-one').reset();
  };

  return (
    <div className={styles.game}>
      {alert ?
        createModal()
        : null
      }

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={toast}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Invalid Word, Try Again"
        ContentProps={{
          sx: {
            background: 'red'
          }
        }}
      />

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={altToast}
        autoHideDuration={3000}
        onClose={handleAltClose}
        message="Word already guessed"
        ContentProps={{
          sx: {
            background: 'yellow',
            color: 'black'
          }
        }}
      />

      <div className={styles.words}>
        <span>{wordList[wordList.length - 1]}</span>
      </div>

      <form onSubmit={handleSubmit} id="player-one">
        <input onChange={(e) => setWord(e.target.value)} placeholder="Enter a Word"></input>
        <button className={styles.submitButton}></button>
      </form>

      <button className={styles.quit} onClick={handleQuit}>Give up</button>
      <button className={styles.hintButton} onClick={handleHint}>There are {hint} words remaining</button>

      <div className={styles.timer}>
        <div className={styles.innerTimer}>
          <span className={styles.jello}>{count}</span>
        </div>
      </div>

      <div>
        <Wordbank/>
      </div>
    </div>
  );
}
