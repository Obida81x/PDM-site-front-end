import { useSettings } from '../context/SettingsContext';
import { useGoSection } from '../hooks/useGoSection';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { SectionLabel, Title } from '../components/Typography';
import { MountainStrip } from '../components/Illustrations';

export default function CTA() {
  const { t } = useSettings();
  const c = t.cta;
  const go = useGoSection();
  return (
    <section className="cta">
      <div className="cta-bg"><MountainStrip /></div>
      <div className="container cta-inner">
        <Reveal dir="start" className="cta-left">
          <SectionLabel>{c.label}</SectionLabel>
          <Title lines={c.title} hl={[1]} className="cta-title" />
        </Reveal>
        <Reveal dir="end" delay={100} className="cta-right">
          <p>{c.text}</p>
          <Button size="sm" onClick={go('contact')}>{c.btn}</Button>
        </Reveal>
      </div>
    </section>
  );
}
