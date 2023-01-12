/* eslint-disable max-len */
//Sourced from https://codepen.io/Markshall/pen/PoZJRve
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../state/GameProvider.jsx';
import '../../i18n/config.js';
import styles from '../styles/Dropdown.scss';

export default function Dropdown() {

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();

  return (
    <>
      <div className={styles.dropdown}>
        <input type="checkbox" id="dropdown"/>

        <label className={styles.dropdown__face} htmlFor="dropdown">
          <div className={styles.dropdown__text} data-cy="language-selector">{t('language')}</div>

          <div className={styles.dropdown__arrow}></div>
        </label>

        <ul className={styles.dropdown__items}>
          <li onClick={() => {
            i18n.changeLanguage('en');
            setLanguage('en');
          }}>🇺🇸</li>
          <li onClick={() => {
            i18n.changeLanguage('jp');
            setLanguage('jp');
          }}>🇯🇵</li>
          <li onClick={() => {
            i18n.changeLanguage('de');
            setLanguage('de');
          }}>🇩🇪</li>
          <li onClick={() => {
            i18n.changeLanguage('fr');
            setLanguage('fr');
          }}>🇫🇷</li>
          <li onClick={() => {
            i18n.changeLanguage('kr');
            setLanguage('kr');
          }}>🇰🇷</li>
        </ul>
      </div>

      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </>
  )
}
