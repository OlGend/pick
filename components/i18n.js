// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home.title": "Online Casino Reviews & Gambling Guide's",
      "home.description": "Authentic player reviews, no deposit bonuses, and a wide selection of games with free play.",
      // Add more translations for other text strings in your component
    }
  },
  ua: {
    translation: {
      "home.title": "Огляди онлайн-казино та посібники з азартних ігор",
      "home.description": "Справжні огляди гравців, бездепозитні бонуси та широкий вибір ігор з безкоштовною грою.",
      // Add more translations for other text strings in your component
    }
  },
  // Add translations for other languages here
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
