import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

/** Animated counter that runs once when scrolled into view. */
export default function CountUp({ to, prefix = '', suffix = '', duration = 1400 }) {
  const [ref, inView] = useInView();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(to);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.round(to * (1 - (1 - p) ** 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} dir="ltr" className="countup">
      {prefix}{val}{suffix}
    </span>
  );
}
