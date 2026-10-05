import pMark from '../assets/p-mark.png';

export function PMark({ size = 40, className = '' }) {
  return (
    <svg className={className} width={size * 0.84} height={size} viewBox="0 0 584 694" aria-hidden="true">
      <image href={pMark} width="584" height="694" />
    </svg>
  );
}

export default function Logo({ size = 40, onClick }) {
  return (
    <a className="logo" href="#home" onClick={onClick} aria-label="PDM">
      <PMark size={size} />
      <span className="logo-word">PDM</span>
    </a>
  );
}
