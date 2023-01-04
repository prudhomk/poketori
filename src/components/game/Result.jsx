/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router';
import { scoreCritic } from '../utilities/rules.js';
import { useTranslation } from 'react-i18next';
import { useWordList } from '../state/GameProvider';
import '../../i18n/config.js';
import styles from '../styles/Result.scss';


export default function Result() {

  const navigate = useNavigate();
  const { wordList } = useWordList();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <div className={styles.result}>
        <div>
          <h1 data-cy="Game Over">{t('game-over')}</h1>
          {scoreCritic(wordList)}
          <h3 data-cy="Pokemon encountered">{t('pokemon-number')}{wordList.length}{t('pokemon-number2')}</h3>

          <button onClick={handleClick} data-cy="Play Again">
            {t('play-again')}
          </button>
        </div>
      </div>
    </>
  );
}
