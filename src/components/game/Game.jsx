/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Wordbank from './Wordbank';
import { useNavigate } from 'react-router';
import { useWord, useWordList, useDictionary, useLanguage } from '../state/GameProvider.jsx';
import { useInterval } from '../state/customHooks.js';
import { useTranslation } from 'react-i18next';
import { ruleCheck, jpRuleCheck, checkDictionary, checkRepeats, checkTimer, remainingOptions } from '../utilities/rules.js';
import { Pokemon } from '../../data/pokemon.js';
import { ポケモン } from '../../data/ポケモン.js';
import { french } from '../../data/pokemonRude.js';
import '../../i18n/config.js';
import styles from '../styles/Game.scss';

export default function Game() {

  const { word, setWord } = useWord();
  const { wordList, setWordList } = useWordList();
  const { dictionary, setDictionary } = useDictionary();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [count, setCount] = useState(30);
  const [toast, setToast] = useState(false);
  const [altToast, setAltToast] = useState(false);
  const [hint, setHint] = useState('?');
  const navigate = useNavigate();


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
      navigate('/result');
    }
  });

  // const latestWord = wordList[wordList.length - 1];
  useEffect(() => {
    if(language === 'en') {
      setDictionary(Pokemon);
    } else if(language === 'jp') {
      setDictionary(ポケモン);
    } else if(language === 'fr') {
      setDictionary(french);
    }
  });

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

  const handlePopOpen = (event) => {
    setAnchorEl(event.currentTarget);
    handleHint();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlePopClose = () => {
    setAnchorEl(null);
  };

  const handleQuit = () => {
    navigate('/');
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheck(word);
    document.getElementById('player-one').reset();
  };

  return (
    <div className={styles.game}>

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

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography sx={{ p: 2 }} data-cy="hint-message">{t('hint')} {hint} {t('hint2')}</Typography>
      </Popover>

      <div className={styles.words}>
        <span className={styles.top} data-cy="A wild">{t('message')}</span>
        <span className={styles.currentWord}>{wordList[wordList.length - 1]}</span>
        <span className={styles.bottom} data-cy="appears!">{t('message2')}</span>
      </div>

      <form onSubmit={handleSubmit} id="player-one">
        <input onChange={(e) => setWord(e.target.value)} placeholder="Enter a Word"></input>
        <button className={styles.submitButton}></button>
      </form>

      <button className={styles.quit} onClick={handleQuit} data-cy="Give up">{t('forfeit')}</button>
      <button className={styles.hintButton} onClick={handlePopOpen} data-cy="hint">{t('hint-button')}</button>

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
