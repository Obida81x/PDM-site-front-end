import { useSettings } from '../context/SettingsContext';
import Button from './Button';

/** Loading / error placeholder shared by the data-driven pages. */
export default function PageState({ loading, error, onRetry }) {
  const { t } = useSettings();
  if (loading) {
    return (
      <div className="page-state" role="status">
        <span className="spinner" aria-hidden="true" />
        <p>{t.pages.loading}</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="page-state" role="alert">
        <p>{t.pages.loadError}</p>
        {onRetry && <Button size="sm" arrow={false} onClick={onRetry}>{t.pages.retry}</Button>}
      </div>
    );
  }
  return null;
}
