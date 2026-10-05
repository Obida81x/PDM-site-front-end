import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations';

const SettingsContext = createContext(null);

const read = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

export function SettingsProvider({ children }) {
  // Defaults: Arabic + RTL, light theme
  const [lang, setLang] = useState(() => read('pdm-lang', 'ar'));
  const [theme, setTheme] = useState(() => read('pdm-theme', 'light'));

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('pdm-lang', lang); } catch { /* ignore */ }
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('pdm-theme', theme); } catch { /* ignore */ }
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'light' ? 'dark' : 'light')), []);

  const value = useMemo(
    () => ({ lang, setLang, theme, toggleTheme, t: translations[lang], isRTL: lang === 'ar' }),
    [lang, theme, toggleTheme]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export const useSettings = () => useContext(SettingsContext);
