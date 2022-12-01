/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../state/GameProvider';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import '../../i18n/config.js';
import styles from '../styles/Main.scss';

export default function Home() {
  const [source, setSource] = useState('');
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/game');
  };

  useEffect(() => {
    if(language === 'en') {
      setSource('en.png');
    } else if(language === 'jp') {
      setSource('jp.png');
    }
  }, [language]);

  return (
    <>
      <Header/>
      <div className={styles.splash}>
        <img src={source}/>
        <button onClick={handleClick} data-cy="play">{t('home-button')}</button>
      </div>

      {/* <div className={styles.version}>
        <h3>Version Log</h3>
        <p>
          Version 1.0
          <ul>
            <li>Five categories to choose from</li>
            <li>Japanese compatability for Pokemon, Fruits and Vegetables, and Animals</li>
            <li>Feedback is appreciated (fill out a form on the rules page)</li>
          </ul>
          Coming in Version 2.0
          -Refined libraries
          -Additional categories: Movies and Bands
        </p>
      </div> */}
    </>
  );
}
