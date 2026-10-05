import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { PORTFOLIO_STATS } from '../data/content';
import { getProjects } from '../services/api';
import { useContent } from '../hooks/useContent';
import PageState from '../components/PageState';
import Button from '../components/Button';
import CountUp from '../components/CountUp';
import Icon, { Arrow } from '../components/Icon';
import Reveal from '../components/Reveal';
import { SectionLabel, Title } from '../components/Typography';
import { Thumb, BrandArt } from '../components/Illustrations';

const FILTERS = ['all', 'web', 'uiux', 'marketing', 'branding'];

export default function Portfolio() {
  const { t } = useSettings();
  const p = t.portfolio;
  const [filter, setFilter] = useState('all');
  const { data, loading, error, reload } = useContent(getProjects, []);
  const projects = data || [];
  const list = projects.filter((pr) => filter === 'all' || pr.category === filter);
  const featured = projects.find((pr) => pr.caseStudy);
  const cs = featured?.caseStudy;

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="pf-head">
          <Reveal dir="start"><SectionLabel>{p.eyebrow}</SectionLabel></Reveal>
          <Reveal delay={80}><Title lines={p.title} hl={[1]} className="big-title" /></Reveal>
          <Reveal delay={140}><p className="lead">{p.desc}</p></Reveal>
          <Reveal delay={200} className="pf-stats">
            {PORTFOLIO_STATS.map((s, i) => (
              <div key={s} className="pf-stat">
                <strong><CountUp to={parseInt(s.slice(1), 10)} prefix="+" /></strong>
                <span>{p.stats[i]}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="pf-explore">
          <Reveal dir="start"><SectionLabel>{p.exploreLabel}</SectionLabel></Reveal>
          <Reveal delay={60}><p className="body">{p.exploreDesc}</p></Reveal>
          <div className="chips" role="tablist">
            {FILTERS.map((f) => (
              <button key={f} type="button" role="tab" aria-selected={filter === f} className={`chip ${filter === f ? 'on' : ''}`} onClick={() => setFilter(f)}>
                {p.filters[f]}
              </button>
            ))}
          </div>
        </div>

        {!data && <PageState loading={loading} error={error} onRetry={reload} />}
        <div className="pf-grid" key={filter}>
          {list.map((pr, i) => (
            <article key={pr.slug} className="pf-card" style={{ animationDelay: `${i * 70}ms` }}>
              <Link to={`/projects/${pr.slug}`} className="pf-thumb" aria-label={pr.title}><Thumb kind={pr.art} /></Link>
              <div className="pf-body">
                <span className="pf-cat">{p.categories[pr.category]}</span>
                <h3>{pr.title}</h3>
                <p>{pr.summary}</p>
                <Link to={`/projects/${pr.slug}`} className="pf-link">
                  <span>{p.viewProject}</span><Arrow size={14} />
                  <span className="circle-arrow sm"><Arrow size={14} /></span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {featured && (
          <Reveal className="case">
            <div className="case-text">
              <SectionLabel>{p.caseLabel}</SectionLabel>
              <h2 className="case-title">{featured.title}</h2>
              <h3 className="case-sub">{cs.sub}</h3>
              <p className="body">{cs.desc}</p>
              <Button size="md" to={`/projects/${featured.slug}`}>{p.caseBtn}</Button>
            </div>
            <div className="case-art">
              <BrandArt />
              <div className="case-stat">
                <Icon name="arrowUp" size={22} />
                <strong dir="ltr"><CountUp to={cs.stat.to} prefix={cs.stat.prefix} suffix={cs.stat.suffix} /></strong>
                <span>{cs.stat.label}</span>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
