import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { localize } from '../utils/i18n';

/**
 * Loads content through the data service and returns it already translated
 * to the current language (re-translates instantly when the language changes).
 *   const { data, loading, error, reload } = useContent(() => getProject(slug), [slug]);
 */
export function useContent(fetcher, deps = []) {
  const { lang } = useSettings();
  const [state, setState] = useState({ raw: null, error: null, loading: true });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let alive = true;
    setState((s) => ({ ...s, error: null, loading: true }));
    fetcher()
      .then((raw) => alive && setState({ raw, error: null, loading: false }))
      .catch((error) => alive && setState({ raw: null, error, loading: false }));
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, tick]);

  const data = useMemo(() => (state.raw ? localize(state.raw, lang) : null), [state.raw, lang]);
  const reload = useCallback(() => setTick((n) => n + 1), []);
  return { data, loading: state.loading, error: state.error, reload };
}
