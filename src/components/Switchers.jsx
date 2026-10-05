import { useSettings } from '../context/SettingsContext';
import Icon from './Icon';

export function ThemeSwitcher() {
  const { theme, toggleTheme, t } = useSettings();
  return (
    <button type="button" className="icon-btn theme-btn" onClick={toggleTheme} aria-label={t.ui.theme} title={t.ui.theme}>
      <span className={`theme-icon ${theme === 'dark' ? 'is-dark' : ''}`}>
        <Icon name="sun" size={18} className="sun" />
        <Icon name="moon" size={18} className="moon" />
      </span>
    </button>
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useSettings();
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button type="button" className={lang === 'ar' ? 'on' : ''} onClick={() => setLang('ar')}>العربية</button>
      <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>English</button>
    </div>
  );
}
