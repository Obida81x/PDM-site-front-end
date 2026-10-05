import { Thumb } from './Illustrations';

/**
 * Renders a project/page visual. `src` can be a real image URL coming from the backend
 * (http(s):// or /path) – otherwise `art` picks one of the built-in illustrations.
 */
export default function Media({ src, art = 'laptop', alt = '', className = '' }) {
  const isUrl = typeof src === 'string' && /^(https?:)?\/\/|^\//.test(src);
  return (
    <div className={`media ${className}`}>
      {isUrl ? <img src={src} alt={alt} loading="lazy" /> : <Thumb kind={art} />}
    </div>
  );
}
