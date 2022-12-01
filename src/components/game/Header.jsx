import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../state/GameProvider.jsx';
import '../../i18n/config.js';
import styles from '../styles/Main.scss';

export default function Header() {

  const { i18n } = useTranslation();
  const { setLanguage } = useLanguage();

  return (
    <>
      <div className={styles.localize}>
        <button onClick={() => {
          i18n.changeLanguage('jp');
          setLanguage('jp');
        }}>
        日本語
        </button>
        <button onClick={() => {
          i18n.changeLanguage('en');
          setLanguage('en');
        }}>
        EN
        </button>
      </div>
    </>
  );
}
