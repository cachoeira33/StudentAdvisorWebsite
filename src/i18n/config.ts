import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBR from './locales/pt-BR.json';
import enGB from './locales/en-GB.json';
import esES from './locales/es-ES.json';
import itIT from './locales/it-IT.json';

i18n
  .use(LanguageDetector) // detecta idioma do navegador / usuário
  .use(initReactI18next) // conecta ao react-i18next
  .init({
    resources: {
      'pt-BR': { translation: ptBR },
      'en-GB': { translation: enGB },
      'es-ES': { translation: esES },
      'it-IT': { translation: itIT },
    },
    fallbackLng: 'en-GB',
    supportedLngs: ['pt-BR', 'en-GB', 'es-ES', 'it-IT'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  });

export default i18n;