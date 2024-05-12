import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';

i18n.use(initReactI18next)
.init({
  lng: 'en',
  debug: true,
  resources: {
    en: translations.en,
    pt: translations.pt
  }
});

export default i18n;