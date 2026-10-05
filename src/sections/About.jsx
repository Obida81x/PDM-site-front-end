import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { ABOUT_STATS } from '../data/content';
import { scrollToSection } from '../utils/scroll';
import Button from '../components/Button';
import CountUp from '../components/CountUp';
import Icon, { Arrow } from '../components/Icon';
import Reveal from '../components/Reveal';
import { SectionLabel, Title } from '../components/Typography';
import { TeamArt, HeroBackdrop } from '../components/Illustrations';

export default function About() {
  const { t } = useSettings();
  const a = t.about;
  return (
    <section id="about" className="about">
      <div className="hero about-hero">
        <div className="hero-bg"><HeroBackdrop /></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal dir="start"><SectionLabel>{a.eyebrow}</SectionLabel></Reveal>
            <Reveal delay={80}><Title lines={a.title} hl={[1]} className="hero-title" /></Reveal>
            <Reveal delay={160}><p className="lead">{a.desc}</p></Reveal>
            <Reveal delay={240} className="hero-actions">
              <Button to="/story">{a.story}</Button>
              <button type="button" className="watch" onClick={() => scrollToSection('portfolio')}>
                <span className="watch-ico"><Icon name="play" size={14} stroke={0} /></span>
                <span>{a.watchVideo}</span>
              </button>
            </Reveal>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </div>
      </div>

      <div className="container section-pad">
        <div className="who">
          <Reveal dir="start" className="who-text">
            <SectionLabel>{a.whoLabel}</SectionLabel>
            <h2 className="row-title">{a.whoTitle}</h2>
            <p className="body">{a.whoDesc}</p>
            <Link to="/story" className="text-link">
              <span className="circle-arrow sm"><Arrow size={14} /></span>
              <span>{a.moreAbout}</span><Arrow size={14} />
            </Link>
          </Reveal>
          <Reveal delay={80} className="vcard">
            <span className="vico"><Icon name="target" size={24} /></span>
            <h3>{a.mission.title}</h3>
            <p>{a.mission.desc}</p>
          </Reveal>
          <Reveal delay={160} className="vcard">
            <span className="vico"><Icon name="eye" size={24} /></span>
            <h3>{a.vision.title}</h3>
            <p>{a.vision.desc}</p>
          </Reveal>
          <Reveal delay={240} className="vcard">
            <span className="vico"><Icon name="diamond" size={24} /></span>
            <h3>{a.values.title}</h3>
            <ul className="vlist">
              {a.values.items.map((v) => (<li key={v}><Icon name="check" size={14} stroke={2.4} />{v}</li>))}
            </ul>
          </Reveal>
        </div>

        <div className="team">
          <Reveal dir="start" className="team-photo"><TeamArt /></Reveal>
          <Reveal delay={100} className="team-text">
            <SectionLabel>{a.teamLabel}</SectionLabel>
            <Title lines={a.teamTitle} hl={[]} className="row-title" />
            <p className="body">{a.teamDesc}</p>
            <Link to="/story" className="text-link plain">
              <span>{a.meetTeam}</span><Arrow size={14} />
            </Link>
          </Reveal>
          <Reveal dir="end" delay={160} className="stats-card">
            {ABOUT_STATS.map((s, i) => (
              <div key={i} className="stat">
                <strong><CountUp to={s.to} suffix={s.suffix} /></strong>
                <span>{a.stats[i]}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
