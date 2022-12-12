import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    jp: {
      translations: require('./locales/jp/translations.json')
    },
    fr: {
      translations: require('./locales/fr/translations.json')
    },
    de: {
      translations: require('./locales/de/translations.json')
    },
    kr: {
      translations: require('./locales/kr/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'jp', 'fr', 'de', 'kr'];

export default i18n;
