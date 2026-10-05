import { useSettings } from '../context/SettingsContext';
import { scrollToSection } from '../utils/scroll';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import { SectionLabel, Title } from '../components/Typography';
import { HeroBackdrop } from '../components/Illustrations';

export default function Hero() {
  const { t } = useSettings();
  const h = t.hero;
  return (
    <section id="home" className="hero">
      <div className="hero-bg"><HeroBackdrop /></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal dir="start"><SectionLabel>{h.eyebrow}</SectionLabel></Reveal>
          <Reveal delay={80}><Title as="h1" lines={h.title} hl={[1]} className="hero-title" /></Reveal>
          <Reveal delay={160}><p className="lead">{h.desc}</p></Reveal>
          <Reveal delay={240} className="hero-actions">
            <Button onClick={() => scrollToSection('contact')}>{h.cta}</Button>
            <button type="button" className="watch" onClick={() => scrollToSection('portfolio')}>
              <span className="watch-ico"><Icon name="play" size={14} stroke={0} /></span>
              <span>{h.watch}</span>
            </button>
          </Reveal>
        </div>
        <div className="hero-art" aria-hidden="true" />
      </div>
    </section>
  );
}
