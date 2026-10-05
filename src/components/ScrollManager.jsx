import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the top when the page (path) changes — unless we're heading to a home section. */
export default function ScrollManager() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.scrollTo) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
    // only react to path changes (clearing `state` after a section jump must not re-scroll to top)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return null;
}
