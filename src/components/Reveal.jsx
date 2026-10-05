import { useInView } from '../hooks/useInView';

/** Scroll-reveal wrapper. dir: up | start | end | zoom */
export default function Reveal({ children, delay = 0, dir = 'up', as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${dir} ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
