import React from 'react';
import { useNavigate } from 'react-router';
import { scoreCritic } from '../utilities/rules.js';
import { useWordList } from '../state/GameProvider';
import styles from '../styles/Result.scss';


export default function Result() {

  const navigate = useNavigate();
  const { wordList } = useWordList();

  const handleClick = () => {
    navigate('/game');
    window.location.reload();
  };

  return (
    <>
      <div className={styles.result}>
        <div>
          <h1>Game Over</h1>
          {scoreCritic(wordList)}
          <h3>Number of Pokemon encountered: {wordList.length}</h3>

          <button onClick={handleClick}>
            Play another round!
          </button>
        </div>
      </div>
    </>
  );
}
