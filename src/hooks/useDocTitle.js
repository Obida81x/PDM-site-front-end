import { useEffect } from 'react';

export function useDocTitle(title) {
  useEffect(() => {
    const prev = document.title;
    if (title) document.title = `${title} — PDM`;
    return () => { document.title = prev; };
  }, [title]);
}
