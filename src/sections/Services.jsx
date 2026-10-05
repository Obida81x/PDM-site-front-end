import { useSettings } from '../context/SettingsContext';
import { scrollToSection } from '../utils/scroll';
import Button from '../components/Button';
import Icon, { Arrow } from '../components/Icon';
import Reveal from '../components/Reveal';
import { SectionLabel } from '../components/Typography';
import { LaptopArt, PhoneArt, ChartArt, BrandArt } from '../components/Illustrations';

const CARD_ICONS = ['code', 'pen', 'megaphone', 'chart'];
const ARTS = [LaptopArt, PhoneArt, ChartArt, BrandArt];

export default function Services() {
  const { t } = useSettings();
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="svc-cards">
          {t.serviceCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <a
                href="#services"
                className="svc-card"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(`svc-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <span className="svc-ico"><Icon name={CARD_ICONS[i]} size={22} /></span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="circle-arrow"><Arrow size={16} /></span>
              </a>
            </Reveal>
          ))}
        </div>

        {t.serviceRows.map((r, i) => {
          const Art = ARTS[i];
          const reverse = i % 2 === 1;
          return (
            <div key={r.label} id={`svc-${i}`} className={`svc-row ${reverse ? 'reverse' : ''}`}>
              <Reveal dir={reverse ? 'end' : 'start'} className="svc-text">
                <SectionLabel>{r.label}</SectionLabel>
                <h2 className="row-title">{r.title}</h2>
                <p className="body">{r.desc}</p>
                <ul className="checks">
                  {r.items.map((it) => (
                    <li key={it}><Icon name="checkCircle" size={18} />{it}</li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" onClick={() => scrollToSection('contact')}>{t.learnMore}</Button>
              </Reveal>
              <Reveal dir={reverse ? 'start' : 'end'} delay={120} className="svc-art"><Art /></Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
