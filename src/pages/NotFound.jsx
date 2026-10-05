import { useSettings } from '../context/SettingsContext';
import Button from '../components/Button';
import { SectionLabel, Title } from '../components/Typography';
import { useDocTitle } from '../hooks/useDocTitle';

export default function NotFound() {
  const { t } = useSettings();
  const p = t.pages;
  useDocTitle('404');
  return (
    <main className="page">
      <section className="page-hero not-found">
        <div className="container page-hero-inner">
          <SectionLabel>404</SectionLabel>
          <Title as="h1" lines={p.notFoundTitle} hl={[1]} className="page-title" />
          <p className="lead">{p.notFoundDesc}</p>
          <Button to="/">{p.goHome}</Button>
        </div>
      </section>
    </main>
  );
}
