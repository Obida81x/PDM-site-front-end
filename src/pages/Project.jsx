import { Link, useParams } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { getProject, getProjects, NotFoundError } from '../services/api';
import { useContent } from '../hooks/useContent';
import { useDocTitle } from '../hooks/useDocTitle';
import { useGoSection } from '../hooks/useGoSection';
import Button from '../components/Button';
import CountUp from '../components/CountUp';
import Icon, { Arrow } from '../components/Icon';
import Media from '../components/Media';
import PageState from '../components/PageState';
import Reveal from '../components/Reveal';
import { SectionLabel } from '../components/Typography';
import CTA from '../sections/CTA';
import NotFound from './NotFound';

export default function Project() {
  const { slug } = useParams();
  const { t } = useSettings();
  const p = t.pages;
  const { data: pr, loading, error, reload } = useContent(() => getProject(slug), [slug]);
  const { data: all } = useContent(getProjects, []);
  const go = useGoSection();
  useDocTitle(pr?.title);

  if (error instanceof NotFoundError) return <NotFound />;
  if (!pr) return <main className="page"><PageState loading={loading} error={error} onRetry={reload} /></main>;

  const i = all ? all.findIndex((x) => x.slug === pr.slug) : -1;
  const prev = all && i >= 0 ? all[(i - 1 + all.length) % all.length] : null;
  const next = all && i >= 0 ? all[(i + 1) % all.length] : null;

  const meta = [
    [p.client, pr.client],
    [p.year, pr.year],
    [p.duration, pr.duration],
    [p.services, pr.services.join(' · ')],
  ];

  return (
    <main className="page" key={pr.slug}>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Link to="/" state={{ scrollTo: 'portfolio' }} className="back-link">
            <span className="circle-arrow sm back-arrow"><Arrow size={14} /></span>
            <span>{p.backProjects}</span>
          </Link>
          <Reveal dir="start"><SectionLabel>{t.portfolio.categories[pr.category]}</SectionLabel></Reveal>
          <Reveal delay={80}><h1 className="title page-title"><span className="hl">{pr.title}</span></h1></Reveal>
          <Reveal delay={160}><p className="lead page-lead">{pr.summary}</p></Reveal>
          <Reveal delay={220} className="page-actions">
            <Button onClick={go('contact')}>{p.startSimilar}</Button>
            {pr.liveUrl && <Button variant="outline" href={pr.liveUrl} target="_blank" rel="noreferrer">{p.visitSite}</Button>}
          </Reveal>
        </div>
      </section>

      <section className="container">
        <Reveal dir="zoom" className="proj-cover">
          <Media src={pr.cover} art={pr.art} alt={pr.title} />
        </Reveal>
        <Reveal className="proj-meta">
          {meta.map(([k, v]) => (
            <div key={k}><span>{k}</span><strong>{v}</strong></div>
          ))}
        </Reveal>
      </section>

      <section className="container proj-layout">
        <div className="proj-main">
          <Reveal>
            <h2 className="proj-h">{p.overview}</h2>
            {pr.overview.map((para, k) => <p key={k} className="body story-p">{para}</p>)}
          </Reveal>
          <Reveal>
            <h2 className="proj-h">{p.challenge}</h2>
            <p className="body story-p">{pr.challenge}</p>
          </Reveal>
          <Reveal>
            <h2 className="proj-h">{p.solution}</h2>
            <p className="body story-p">{pr.solution}</p>
          </Reveal>
        </div>
        <aside className="proj-side">
          <Reveal dir="end" className="side-card">
            <h3>{p.features}</h3>
            <ul className="checks">
              {pr.features.map((f) => (<li key={f}><Icon name="check" size={14} stroke={2.4} />{f}</li>))}
            </ul>
          </Reveal>
          <Reveal dir="end" delay={80} className="side-card">
            <h3>{p.tools}</h3>
            <div className="tool-chips">{pr.tools.map((x) => <span key={x} className="tool-chip">{x}</span>)}</div>
          </Reveal>
        </aside>
      </section>

      <section className="container story-block">
        <Reveal className="story-block-head"><h2 className="proj-h">{p.results}</h2></Reveal>
        <div className="results-grid">
          {pr.results.map((r, k) => (
            <Reveal key={k} delay={k * 80} className="result-card">
              <strong><CountUp to={r.to} prefix={r.prefix} suffix={r.suffix} /></strong>
              <span>{r.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container story-block">
        <Reveal className="story-block-head"><h2 className="proj-h">{p.gallery}</h2></Reveal>
        <div className="gallery-grid">
          {(pr.gallery || []).map((g, k) => (
            <Reveal key={k} delay={k * 80} dir="zoom">
              <Media src={g} art={g} alt={`${pr.title} ${k + 1}`} className="gallery-item" />
            </Reveal>
          ))}
        </div>
      </section>

      {prev && next && prev.slug !== pr.slug && (
        <section className="container story-block">
          <div className="pn-nav">
            <Link to={`/projects/${prev.slug}`} className="pn-link pn-prev">
              <span className="circle-arrow sm back-arrow"><Arrow size={14} /></span>
              <span><small>{p.prev}</small><strong>{prev.title}</strong></span>
            </Link>
            <Link to={`/projects/${next.slug}`} className="pn-link pn-next">
              <span><small>{p.next}</small><strong>{next.title}</strong></span>
              <span className="circle-arrow sm"><Arrow size={14} /></span>
            </Link>
          </div>
        </section>
      )}

      <CTA />
    </main>
  );
}
