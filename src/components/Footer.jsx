import { useSettings } from '../context/SettingsContext';
import { NAV_IDS } from '../data/content';
import { useGoSection } from '../hooks/useGoSection';
import Logo from './Logo';
import Icon from './Icon';

const SOCIAL = ['instagram', 'linkedin', 'x', 'youtube'];

export default function Footer() {
  const { t } = useSettings();
  const go = useGoSection();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Logo size={36} onClick={go('home')} />
          <nav className="footer-links" aria-label="Footer">
            {NAV_IDS.map((id, i) => (
              <span key={id}>
                <a href={`#${id}`} onClick={go(id)}>{t.nav[id]}</a>
                {i < NAV_IDS.length - 1 && <i>/</i>}
              </span>
            ))}
          </nav>
          <div className="socials">
            {SOCIAL.map((s) => (
              <a key={s} href="#contact" onClick={go('contact')} aria-label={s} className="social-plain">
                <Icon name={s} size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <a href="#home" className="to-top" onClick={go('home')}>
            <span className="to-top-ico"><Icon name="arrowUp" size={14} /></span>
            {t.footer.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
