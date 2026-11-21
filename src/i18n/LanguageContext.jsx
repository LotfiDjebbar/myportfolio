import { createContext, useContext, useEffect, useState } from 'react';
import { content } from '../data/portfolioData';

const STORAGE_KEY = 'portfolio-lang';
const SUPPORTED = ['fr', 'en'];

const detectInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    // storage unavailable (private mode, blocked cookies), fall through
  }
  const nav = (typeof navigator !== 'undefined' && navigator.language) || 'en';
  return nav.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', content[lang].meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
};
