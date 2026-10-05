import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollInfo } from '../hooks/useScrollInfo';
import { NAV_IDS } from '../data/content';
import { useGoSection } from '../hooks/useGoSection';
import Logo from './Logo';
import Button from './Button';
import Icon from './Icon';
import { ThemeSwitcher, LanguageSwitcher } from './Switchers';

export default function Navbar() {
  const { t } = useSettings();
  const { pathname } = useLocation();
  const sectionActive = useActiveSection(NAV_IDS);
  // on inner pages highlight the related nav item
  const active = pathname === '/' ? sectionActive : pathname.startsWith('/story') ? 'about' : pathname.startsWith('/projects') ? 'portfolio' : null;
  const { scrolled, progress } = useScrollInfo();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = useGoSection(() => setOpen(false));

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container nav-inner">
        <Logo size={42} onClick={go('home')} />

        <nav className="nav-links" aria-label="Main">
          {NAV_IDS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={go(id)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button variant="primary" size="sm" className="nav-cta" onClick={go('contact')}>
            {t.nav.getStarted}
          </Button>
          <button type="button" className="icon-btn burger" aria-label={open ? t.ui.close : t.ui.menu} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV_IDS.map((id, i) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={go(id)} style={{ transitionDelay: `${open ? 60 * i : 0}ms` }}>
              {t.nav[id]}
            </a>
          ))}
          <Button className="mobile-cta" onClick={go('contact')}>{t.nav.getStarted}</Button>
        </nav>
      </div>
    </header>
  );
}
