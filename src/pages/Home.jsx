import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import About from '../sections/About';
import Contact from '../sections/Contact';
import CTA from '../sections/CTA';

export default function Home() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  // Arrived from another page asking for a specific section (e.g. nav "Contact" from a project page)
  useEffect(() => {
    const id = state?.scrollTo;
    if (!id) return undefined;
    const timer = setTimeout(() => {
      scrollToSection(id);
      navigate(pathname, { replace: true, state: null });
    }, 120);
    return () => clearTimeout(timer);
  }, [state, pathname, navigate]);

  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <CTA />
    </main>
  );
}
