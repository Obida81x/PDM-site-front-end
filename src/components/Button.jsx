import { Link } from 'react-router-dom';
import { Arrow } from './Icon';

/** variant: primary | outline | ghost-link. `onClick` or `href` */
export default function Button({ children, variant = 'primary', size = 'md', arrow = true, className = '', ...rest }) {
  const Tag = rest.to ? Link : rest.href ? 'a' : 'button';
  return (
    <Tag className={`btn btn-${variant} btn-${size} ${className}`} {...(Tag === 'button' ? { type: 'button' } : {})} {...rest}>
      <span>{children}</span>
      {arrow && <Arrow size={size === 'sm' ? 14 : 16} />}
    </Tag>
  );
}
