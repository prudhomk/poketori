/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../state/GameProvider';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import '../../i18n/config.js';
import Dropdown from './Dropdown';
import Instruction from './Instruction';
import styles from '../styles/Main.scss';

export default function Home() {
  const [source, setSource] = useState('');
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/game');
  };

  const handleFeedback = () => {
    location.href = 'https://forms.gle/VCqiPPkE7mKcY8YY7';
  };

  useEffect(() => {
    if(language === 'en') {
      setSource('en.png');
    } else if(language === 'jp') {
      setSource('jp.png');
    } else if(language === 'fr') {
      setSource('fr.png');
    } else if(language === 'de') {
      setSource('de.png');
    } else if(language === 'kr') {
      setSource('kr.png');
    }
  }, [language]);

  return (
    <>
      <Dropdown/>

      <div className={styles.splash}>
        <img src={source}/>
        <button onClick={handleClick} data-cy="play">{t('home-button')}</button>
        <Instruction/>
      </div>

      <div className={styles.feedback}>
        <button onClick={handleFeedback} data-cy="feedback">{t('feedback-button')}</button>
      </div>
    </>
  );
}
