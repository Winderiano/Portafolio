import { createContext, useContext, useState, useEffect } from 'react';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

const translations = { es, en };

// Default values para cuando NO hay Provider
const defaultContext = {
  language: 'es',
  changeLanguage: () => {},
  t: (key) => key,
  isSpanish: true
};

const LanguageContext = createContext(defaultContext);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved && (saved === 'es' || saved === 'en')) return saved;
      return 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const changeLanguage = (lang) => {
    if (lang === 'es' || lang === 'en') {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isSpanish: language === 'es' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}