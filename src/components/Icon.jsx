const P = {
  code: <><path d="M8 7l-5 5 5 5" /><path d="M16 7l5 5-5 5" /><path d="M14 4l-4 16" /></>,
  pen: <><path d="M4 20l1-4L17 4l3 3L8 19z" /><path d="M14 7l3 3" /><path d="M3 21c3 0 4-2 6-2" /></>,
  megaphone: <><path d="M3 11v3a1 1 0 001 1h3l9 5V5L7 10H4a1 1 0 00-1 1z" /><path d="M19 9a4 4 0 010 6" /><path d="M7 15l1.5 5" /></>,
  chart: <><rect x="4" y="12" width="4" height="8" rx="1" /><rect x="10" y="6" width="4" height="14" rx="1" /><rect x="16" y="3" width="4" height="17" rx="1" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
  arrowLeft: <><path d="M19 12H5" /><path d="M11 6l-6 6 6 6" /></>,
  arrowUp: <><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  checkCircle: <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></>,
  play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /><path d="M12 12l8-8M17 3v4h4" /></>,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  diamond: <><path d="M6 4h12l4 6-10 11L2 10z" /><path d="M2 10h20M9 4l-2 6 5 11 5-11-2-6" /></>,
  chevron: <path d="M6 9l6 6 6-6" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>,
  send: <><path d="M21 3L10 14" /><path d="M21 3l-7 18-4-7-7-4z" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".8" fill="currentColor" /></>,
  linkedin: <><rect x="3.5" y="9" width="3.5" height="11" /><circle cx="5.2" cy="5.2" r="1.7" /><path d="M10 20V9h3.4v1.6C14 9.4 15.4 8.8 17 8.8c3 0 3.8 2 3.8 4.6V20h-3.5v-6c0-1.4-.4-2.3-1.7-2.3S13.5 12.6 13.5 14V20z" /></>,
  x: <><path d="M4 4l16 16" /><path d="M20 4L4 20" /></>,
  youtube: <><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" /></>,
  trend: <><path d="M3 17l6-6 4 4 8-9" /><path d="M15 6h6v6" /></>,
};

export default function Icon({ name, size = 20, stroke = 1.8, className = '', flip = false }) {
  return (
    <svg
      className={`icon ${flip ? 'icon-flip' : ''} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  );
}

/** Arrow that points in the reading direction (flips automatically in RTL via CSS). */
export function Arrow({ size = 16 }) {
  return <Icon name="arrowRight" size={size} flip />;
}
