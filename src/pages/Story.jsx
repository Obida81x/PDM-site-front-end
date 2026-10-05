import { useSettings } from '../context/SettingsContext';
import { getStory } from '../services/api';
import { useContent } from '../hooks/useContent';
import { useDocTitle } from '../hooks/useDocTitle';
import { useGoSection } from '../hooks/useGoSection';
import Button from '../components/Button';
import CountUp from '../components/CountUp';
import Icon from '../components/Icon';
import PageState from '../components/PageState';
import Reveal from '../components/Reveal';
import { SectionLabel, Title } from '../components/Typography';
import CTA from '../sections/CTA';

export default function Story() {
  const { t } = useSettings();
  const { data: s, loading, error, reload } = useContent(getStory, []);
  const go = useGoSection();
  useDocTitle(s?.hero.eyebrow);

  if (!s) return <main className="page"><PageState loading={loading} error={error} onRetry={reload} /></main>;

  return (
    <main className="page">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Reveal dir="start"><SectionLabel>{s.hero.eyebrow}</SectionLabel></Reveal>
          <Reveal delay={80}><Title as="h1" lines={s.hero.title} hl={[1]} className="page-title" /></Reveal>
          <Reveal delay={160}><p className="lead page-lead">{s.hero.lead}</p></Reveal>
        </div>
      </section>

      <section className="container story-origin">
        <Reveal dir="start" className="story-origin-head">
          <SectionLabel>{s.origin.label}</SectionLabel>
          <h2 className="row-title">{s.origin.title}</h2>
        </Reveal>
        <div className="story-origin-body">
          {s.origin.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}><p className="body story-p">{p}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="container">
        <Reveal className="story-quote">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>{s.quote.text}</blockquote>
          <cite>{s.quote.author}</cite>
        </Reveal>
      </section>

      <section className="container story-block">
        <Reveal className="story-block-head">
          <SectionLabel>{s.timeline.label}</SectionLabel>
          <Title lines={s.timeline.title} hl={[1]} className="big-title" />
        </Reveal>
        <ol className="timeline">
          {s.timeline.items.map((it, i) => (
            <li key={it.year} className="tl-item">
              <Reveal dir={i % 2 ? 'end' : 'start'} className="tl-year"><span>{it.year}</span></Reveal>
              <span className="tl-dot" aria-hidden="true" />
              <Reveal dir={i % 2 ? 'start' : 'end'} delay={80} className="tl-card">
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="container story-block">
        <Reveal className="story-block-head">
          <SectionLabel>{s.values.label}</SectionLabel>
          <Title lines={s.values.title} hl={[1]} className="big-title" />
        </Reveal>
        <div className="values-grid">
          {s.values.items.map((v, i) => (
            <Reveal key={i} delay={i * 70} className="vcard">
              <span className="vico"><Icon name={v.icon} size={24} /></span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container story-block">
        <Reveal className="numbers-card">
          <SectionLabel>{s.numbers.label}</SectionLabel>
          <div className="numbers-grid">
            {s.numbers.items.map((n, i) => (
              <div key={i} className="stat">
                <strong><CountUp to={n.to} prefix={n.prefix} suffix={n.suffix} /></strong>
                <span>{n.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container story-vision">
        <Reveal dir="start">
          <SectionLabel>{s.vision.label}</SectionLabel>
          <h2 className="row-title">{s.vision.title}</h2>
          <p className="body story-p">{s.vision.text}</p>
          <div className="page-actions">
            <Button onClick={go('contact')}>{t.pages.storyCtaBtn}</Button>
            <Button variant="outline" onClick={go('portfolio')}>{t.pages.viewWork}</Button>
          </div>
        </Reveal>
      </section>

      <CTA />
    </main>
  );
}
