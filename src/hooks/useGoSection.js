import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';

/**
 * Returns a click handler factory for "go to a home-page section".
 * On the home page it smooth-scrolls; from any other page it navigates home and then scrolls.
 */
export function useGoSection(after) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (id) => (e) => {
    e?.preventDefault();
    after?.();
    if (pathname === '/') scrollToSection(id);
    else navigate('/', { state: { scrollTo: id } });
  };
}
