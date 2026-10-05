import { PMark } from './Logo';
import pMark from '../assets/p-mark.png';
import heroBg from '../assets/hero-bg.jpg';
import Reveal from './Reveal';

/* ───────── Hero: icy mountains + clouds backdrop (mirrored via CSS in RTL) ───────── */
export function HeroBackdrop() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <img className="hero-scene-img" src={heroBg} alt="" draggable="false" />
      {/* floating P: anchored to the centre of the icy platform inside the scene */}
      <Reveal dir="zoom" delay={150} className="hero-p-anchor">
        <div className="hero-p-wrap"><HeroLogo3D /></div>
        <span className="spark s1" /><span className="spark s2" /><span className="spark s3" />
      </Reveal>
    </div>
  );
}

/* ───────── Hero: floating 3D P mark ───────── */
export function HeroLogo3D() {
  return (
    <svg className="hero-p" viewBox="0 0 320 400" aria-hidden="true">
      <defs>
        <radialGradient id="p3-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#9cc6ff" stopOpacity=".95" />
          <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="125" cy="356" rx="105" ry="16" fill="url(#p3-glow)" />
      <image href={pMark} x="12" y="8" width="296" height="352" />
      <circle cx="125" cy="356" r="5" fill="#fff" opacity=".9" />
    </svg>
  );
}

/* ───────── CTA banner mountains (low) ───────── */
export function MountainStrip() {
  return (
    <svg className="strip-svg" viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="ms-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--sky-1)" />
          <stop offset="1" stopColor="var(--sky-2)" />
        </linearGradient>
        <linearGradient id="ms-m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--m1-a)" /><stop offset="1" stopColor="var(--m1-b)" /></linearGradient>
        <linearGradient id="ms-m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--m2-a)" /><stop offset="1" stopColor="var(--m2-b)" /></linearGradient>
        <filter id="ms-blur"><feGaussianBlur stdDeviation="14" /></filter>
      </defs>
      <rect width="1200" height="220" fill="url(#ms-sky)" />
      <g filter="url(#ms-blur)" fill="#fff" opacity="var(--cloud-o)">
        <ellipse cx="200" cy="40" rx="200" ry="26" />
        <ellipse cx="780" cy="30" rx="240" ry="24" />
        <ellipse cx="1100" cy="90" rx="160" ry="24" />
      </g>
      <polygon points="380,220 520,120 600,150 720,70 810,140 900,100 1010,160 1200,100 1200,220" fill="url(#ms-m1)" />
      <polygon points="720,70 690,112 716,106 734,126 760,100 780,116 810,140" fill="#fff" opacity=".85" />
      <polygon points="300,220 470,160 560,190 700,130 820,190 940,150 1060,200 1200,160 1200,220" fill="url(#ms-m2)" />
      <polygon points="700,130 670,168 696,162 714,178 740,156 760,170 820,190" fill="#fff" opacity=".85" />
      <polygon points="0,220 0,190 140,170 260,196 380,184 480,220" fill="url(#ms-m2)" opacity=".7" />
    </svg>
  );
}

/* ───────── Service illustrations ───────── */
const Blob = ({ id, d }) => (
  <>
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="var(--blob-a)" />
        <stop offset="1" stopColor="var(--blob-b)" />
      </linearGradient>
    </defs>
    <path d={d} fill={`url(#${id})`} />
  </>
);

const BLOB = 'M40 90Q50 20 150 24T420 36Q540 50 530 170T440 330Q330 372 190 350T50 250Q30 160 40 90z';

const Glass = ({ x, y, w, h, children, delay = 0 }) => (
  <g className="float" style={{ animationDelay: `${delay}s` }}>
    <rect x={x} y={y} width={w} height={h} rx="12" className="a-glass" />
    {children}
  </g>
);

const Lines = ({ x, y, w, n = 3 }) => (
  <>
    {Array.from({ length: n }).map((_, i) => (
      <rect key={i} x={x} y={y + i * 9} width={i === 0 ? w * 0.55 : w * (1 - i * 0.18)} height="4" rx="2" className="a-line" />
    ))}
  </>
);

export function LaptopArt() {
  return (
    <svg className="art" viewBox="0 0 560 380" role="img" aria-label="Web development">
      <defs>
        <linearGradient id="la-scr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0c2a86" /><stop offset="1" stopColor="#06143f" /></linearGradient>
        <linearGradient id="la-mt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8db6ff" /><stop offset="1" stopColor="#2c58c8" /></linearGradient>
        <linearGradient id="la-base" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c9d6ee" /><stop offset="1" stopColor="#8fa3cc" /></linearGradient>
      </defs>
      <Blob id="la-b" d={BLOB} />
      <Glass x={22} y={74} w={130} h={104}>
        <circle cx="42" cy="96" r="9" fill="#2f6bff" /><Lines x={58} y={92} w={80} n={2} /><Lines x={36} y={122} w={96} n={4} />
      </Glass>
      <Glass x={30} y={196} w={118} h={80} delay={1.2}>
        <Lines x={44} y={212} w={90} n={3} /><rect x="44" y="242" width="40" height="14" rx="7" fill="#2f6bff" />
      </Glass>
      <path d="M178 238h264l22 44H156z" fill="url(#la-base)" />
      <rect x="168" y="62" width="284" height="180" rx="10" fill="url(#la-scr)" stroke="#16264f" strokeWidth="5" />
      <rect x="178" y="72" width="264" height="160" rx="4" fill="#0a1c5a" />
      <rect x="178" y="72" width="44" height="160" fill="#08164a" />
      <Lines x={186} y={90} w={28} n={5} />
      <rect x="236" y="84" width="196" height="92" rx="6" fill="#1b3a93" />
      <polygon points="236,176 290,110 318,140 352,98 396,150 432,176" fill="url(#la-mt)" />
      <polygon points="352,98 338,118 350,114 360,124 372,110" fill="#fff" opacity=".9" />
      <rect x="250" y="190" width="70" height="8" rx="4" fill="#4a85ff" />
      <rect x="250" y="204" width="110" height="5" rx="2.5" fill="#2a4aa6" />
      <Glass x={418} y={106} w={124} h={110} delay={.6}>
        <Lines x={432} y={122} w={96} n={3} /><rect x="432" y="154" width="96" height="40" rx="8" fill="#dbe8ff" />
        <polyline points="438,186 456,172 474,180 496,164 518,170" fill="none" stroke="#2f6bff" strokeWidth="2.5" strokeLinecap="round" />
      </Glass>
      <g className="float" style={{ animationDelay: '1.8s' }}>
        <rect x="458" y="238" width="72" height="56" rx="12" className="a-glass" />
        <path d="M482 254l-10 12 10 12M506 254l10 12-10 12M498 250l-8 32" stroke="#2f6bff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function PhoneArt() {
  return (
    <svg className="art" viewBox="0 0 560 380" role="img" aria-label="UI/UX design">
      <defs>
        <linearGradient id="pa-ph" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0a2a8c" /><stop offset="1" stopColor="#061554" /></linearGradient>
        <linearGradient id="pa-bl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4d86ff" /><stop offset="1" stopColor="#1740d6" /></linearGradient>
      </defs>
      <Blob id="pa-b" d={BLOB} />
      <Glass x={44} y={70} w={120} h={92}>
        <Lines x={58} y={84} w={90} n={2} />
        <polyline points="58,148 78,128 98,136 120,112 146,120" fill="none" stroke="#2f6bff" strokeWidth="2.6" strokeLinecap="round" />
      </Glass>
      <Glass x={44} y={178} w={120} h={110} delay={1}>
        <rect x="56" y="190" width="96" height="62" rx="8" fill="url(#pa-bl)" />
        <polyline points="64,244 84,222 104,232 126,208 146,216" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        <Lines x={58} y={262} w={90} n={2} />
      </Glass>
      <Glass x={110} y={30} w={90} h={60} delay={.5}>
        <Lines x={122} y={44} w={64} n={3} />
      </Glass>
      <g className="float" style={{ animationDelay: '.8s' }}>
        <rect x="186" y="22" width="132" height="316" rx="26" fill="url(#pa-ph)" stroke="#0a1a52" strokeWidth="6" />
        <rect x="196" y="34" width="112" height="292" rx="18" fill="#e9f1ff" />
        <rect x="236" y="38" width="32" height="8" rx="4" fill="#0a1a52" />
        <rect x="204" y="60" width="96" height="70" rx="12" fill="url(#pa-bl)" />
        <polyline points="212,120 232,100 252,108 272,84 292,92" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
        <rect x="204" y="142" width="46" height="46" rx="10" fill="#cfe0ff" /><rect x="254" y="142" width="46" height="46" rx="10" fill="#2f6bff" />
        <Lines x={206} y={202} w={92} n={3} />
        <rect x="204" y="262" width="96" height="30" rx="15" fill="#2f6bff" />
      </g>
      <g className="float" style={{ animationDelay: '1.5s' }}>
        <rect x="350" y="150" width="130" height="130" rx="20" fill="url(#pa-bl)" />
        <text x="415" y="232" textAnchor="middle" fontSize="48" fontWeight="700" fill="#fff" fontFamily="Lexend, sans-serif">Aa</text>
        <circle cx="380" cy="172" r="5" fill="#fff" opacity=".6" /><circle cx="396" cy="172" r="5" fill="#fff" opacity=".35" />
      </g>
      <Glass x={366} y={58} w={110} h={72} delay={.3}>
        <circle cx="386" cy="82" r="10" fill="#2f6bff" opacity=".8" /><Lines x={404} y={76} w={60} n={2} /><Lines x={380} y={104} w={84} n={2} />
      </Glass>
    </svg>
  );
}

export function ChartArt() {
  return (
    <svg className="art" viewBox="0 0 560 340" role="img" aria-label="Digital marketing">
      <defs>
        <linearGradient id="ca-ar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2f6bff" stopOpacity=".35" /><stop offset="1" stopColor="#2f6bff" stopOpacity="0" /></linearGradient>
        <radialGradient id="ca-t" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#4d86ff" /><stop offset="1" stopColor="#0b2fd0" /></radialGradient>
      </defs>
      <Blob id="ca-b" d={BLOB} />
      <g className="float">
        <rect x="120" y="50" width="330" height="200" rx="14" className="a-glass" />
        <rect x="138" y="68" width="60" height="164" rx="8" fill="var(--art-soft)" />
        <Lines x={146} y={84} w={44} n={4} />
        <rect x="212" y="68" width="226" height="164" rx="8" fill="var(--art-white)" />
        <path d="M222 200L262 178L292 190L330 140L360 160L392 100L428 84V212H222z" fill="url(#ca-ar)" />
        <polyline points="222,200 262,178 292,190 330,140 360,160 392,100 428,84" fill="none" stroke="#1f55ff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        {[[262, 178], [330, 140], [392, 100], [428, 84]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4.5" fill="#fff" stroke="#1f55ff" strokeWidth="2.5" />)}
        <path d="M200 262h170l16 22H184z" fill="var(--art-soft)" />
      </g>
      <Glass x={44} y={150} w={110} h={86} delay={1}>
        <Lines x={58} y={164} w={80} n={2} />
        <rect x="58" y="192" width="22" height="30" rx="4" fill="#2f6bff" /><rect x="86" y="202" width="22" height="20" rx="4" fill="#7ea8ff" /><rect x="114" y="184" width="22" height="38" rx="4" fill="#1f45d6" />
      </Glass>
      <g className="float" style={{ animationDelay: '1.4s' }}>
        <rect x="414" y="60" width="78" height="64" rx="12" className="a-glass" />
        <circle cx="436" cy="82" r="8" fill="#2f6bff" /><circle cx="466" cy="82" r="8" fill="#7ea8ff" /><Lines x={424} y={102} w={60} n={2} />
        <circle cx="486" cy="226" r="56" fill="url(#ca-t)" />
        <circle cx="486" cy="226" r="40" fill="#fff" /><circle cx="486" cy="226" r="26" fill="#2f6bff" /><circle cx="486" cy="226" r="11" fill="#fff" />
        <path d="M486 226L534 188M528 178l10 2 2 10" stroke="#0b2fd0" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </g>
      <Glass x={160} y={262} w={150} h={50} delay={.7}>
        <circle cx="182" cy="287" r="10" fill="#2f6bff" opacity=".85" /><Lines x={202} y={279} w={90} n={2} />
      </Glass>
    </svg>
  );
}

export function BrandArt() {
  return (
    <svg className="art" viewBox="0 0 560 340" role="img" aria-label="Branding & identity">
      <defs>
        <linearGradient id="ba-n" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#102a85" /><stop offset="1" stopColor="#050f42" /></linearGradient>
        <linearGradient id="ba-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4d86ff" /><stop offset="1" stopColor="#1740d6" /></linearGradient>
      </defs>
      <Blob id="ba-bg" d={BLOB} />
      <g transform="rotate(-18 280 170)">
        <rect x="150" y="60" width="300" height="170" rx="14" fill="#6f9cff" opacity=".35" transform="translate(-34 -30)" />
        <rect x="120" y="86" width="320" height="170" rx="12" fill="url(#ba-n)" />
        <g transform="translate(222 148)"><PMark size={42} /><text x="52" y="32" fontSize="26" fontWeight="800" fill="#fff" fontFamily="Lexend, sans-serif" letterSpacing="3">PDM</text></g>
      </g>
      <g transform="rotate(-18 380 250)">
        <g className="float">
          <rect x="290" y="206" width="190" height="104" rx="10" fill="#fff" stroke="#d8e4fb" />
          <g transform="translate(320 232)"><PMark size={24} /><text x="32" y="20" fontSize="15" fontWeight="800" fill="#0a1b4d" fontFamily="Lexend, sans-serif" letterSpacing="2">PDM</text></g>
          <rect x="320" y="272" width="80" height="4" rx="2" fill="#c8d6f2" /><rect x="320" y="282" width="56" height="4" rx="2" fill="#dbe6fa" />
        </g>
      </g>
      <g transform="rotate(-24 330 300)"><rect x="260" y="296" width="130" height="10" rx="5" fill="url(#ba-b)" /><rect x="380" y="296" width="14" height="10" rx="3" fill="#0a1b4d" /></g>
      <rect x="40" y="220" width="100" height="70" rx="12" fill="url(#ba-b)" opacity=".55" className="float" style={{ animationDelay: '1s' }} />
    </svg>
  );
}

export function TeamArt() {
  const people = [
    [120, 170, '#e8c4a0'], [200, 130, '#d9a982'], [290, 160, '#f0cfae'],
    [370, 175, '#c99572'], [250, 215, '#e8c4a0'], [160, 225, '#d9a982'],
  ];
  return (
    <svg className="team-art" viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Team">
      <defs>
        <linearGradient id="ta-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0b3fd1" /><stop offset="1" stopColor="#08154f" /></linearGradient>
        <radialGradient id="ta-g" cx="50%" cy="40%" r="60%"><stop offset="0" stopColor="#6fa2ff" stopOpacity=".9" /><stop offset="1" stopColor="#6fa2ff" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="480" height="300" fill="url(#ta-bg)" />
      <rect width="480" height="300" fill="url(#ta-g)" />
      <rect x="20" y="40" width="130" height="90" fill="#fff" opacity=".12" /><rect x="340" y="46" width="120" height="80" fill="#fff" opacity=".1" />
      <g transform="translate(150 54)"><PMark size={46} /><text x="58" y="36" fontSize="30" fontWeight="800" fill="#fff" fontFamily="Lexend, sans-serif" letterSpacing="3">PDM</text></g>
      <ellipse cx="245" cy="215" rx="150" ry="42" fill="#d9e6ff" opacity=".9" />
      <ellipse cx="245" cy="212" rx="150" ry="40" fill="#f3f7ff" opacity=".6" />
      {people.map(([x, y, c], i) => (
        <g key={i}>
          <path d={`M${x - 24} ${y + 70}q0-38 24-38t24 38z`} fill={i % 2 ? '#0b1a55' : '#16307f'} />
          <circle cx={x} cy={y} r="14" fill={c} />
          <path d={`M${x - 14} ${y - 4}q14-18 28 0q-6-12-14-12t-14 12z`} fill="#241a14" />
        </g>
      ))}
      <rect x="215" y="206" width="30" height="18" rx="2" fill="#a9c4ff" opacity=".9" /><rect x="262" y="200" width="30" height="18" rx="2" fill="#a9c4ff" opacity=".9" />
    </svg>
  );
}

/* ───────── Portfolio thumbnails ───────── */
export function Thumb({ kind }) {
  const bg = { laptop: ['#cfe0ff', '#eaf2ff'], phones: ['#dbe8ff', '#f4f8ff'], dash: ['#0b1d63', '#071345'], brand: ['#0c2a86', '#071757'], finance: ['#e3edff', '#f7faff'], app: ['#0c2a86', '#08195e'] }[kind];
  const id = `th-${kind}`;
  return (
    <svg className="thumb" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={bg[0]} /><stop offset="1" stopColor={bg[1]} /></linearGradient>
        <linearGradient id={`${id}-s`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0d2d94" /><stop offset="1" stopColor="#06143f" /></linearGradient>
      </defs>
      <rect width="300" height="160" fill={`url(#${id})`} />
      {kind === 'laptop' && (
        <>
          <rect x="70" y="26" width="170" height="104" rx="6" fill={`url(#${id}-s)`} stroke="#16264f" strokeWidth="3" />
          <polygon points="76,126 130,70 156,98 190,60 236,112 236,126" fill="#5d93ff" opacity=".8" />
          <rect x="88" y="42" width="60" height="7" rx="3" fill="#fff" /><rect x="88" y="54" width="44" height="4" rx="2" fill="#7ea8ff" />
          <path d="M52 134h206l-12 12H64z" fill="#aebfe0" />
        </>
      )}
      {kind === 'phones' && (
        <>
          <rect x="108" y="14" width="56" height="132" rx="12" fill="#0a2a8c" /><rect x="113" y="20" width="46" height="120" rx="8" fill="#e9f1ff" />
          <rect x="117" y="30" width="38" height="30" rx="5" fill="#2f6bff" /><rect x="117" y="66" width="38" height="6" rx="3" fill="#c7d8fb" /><rect x="117" y="78" width="26" height="6" rx="3" fill="#c7d8fb" />
          <rect x="176" y="22" width="60" height="124" rx="10" fill="#f6f9ff" stroke="#cfdcf7" /><circle cx="206" cy="56" r="16" fill="#7aa6ff" /><rect x="186" y="82" width="40" height="40" rx="8" fill="#2f6bff" />
          <rect x="52" y="30" width="46" height="34" rx="8" fill="#fff" stroke="#d3e0f9" /><rect x="52" y="74" width="46" height="34" rx="8" fill="#fff" stroke="#d3e0f9" />
        </>
      )}
      {kind === 'dash' && (
        <>
          <rect x="34" y="22" width="150" height="100" rx="6" fill="#0a1f78" stroke="#2a4cc0" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => <rect key={i} x={48 + i * 19} y={110 - (12 + i * 9)} width="11" height={12 + i * 9} rx="2" fill={i % 2 ? '#3d78ff' : '#6aa0ff'} />)}
          <rect x="196" y="38" width="76" height="84" rx="6" fill="#0a1f78" stroke="#2a4cc0" />
          <polyline points="204,104 220,86 236,94 252,70 266,76" fill="none" stroke="#7fb2ff" strokeWidth="2.6" strokeLinecap="round" />
        </>
      )}
      {kind === 'brand' && (
        <>
          <g transform="rotate(-8 150 80)"><rect x="60" y="30" width="130" height="86" rx="6" fill="#0e2f9b" /><text x="125" y="82" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff" fontFamily="Lexend, sans-serif" letterSpacing="3">NEXORA</text><path d="M118 46l7 10 7-10v14" stroke="#9cc0ff" strokeWidth="3" fill="none" /></g>
          <g transform="rotate(8 220 90)"><rect x="170" y="50" width="96" height="66" rx="6" fill="#f4f8ff" /><text x="218" y="88" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0a1b4d" fontFamily="Lexend, sans-serif" letterSpacing="2">NEXORA</text></g>
        </>
      )}
      {kind === 'finance' && (
        <>
          <rect x="30" y="22" width="240" height="116" rx="8" fill="#fff" stroke="#d3e0f9" />
          <rect x="30" y="22" width="40" height="116" rx="8" fill="#eef4ff" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <rect key={i} x={118 + i * 17} y={118 - (14 + (i * 7) % 40 + i * 4)} width="9" height={14 + (i * 7) % 40 + i * 4} rx="2" fill="#2f6bff" opacity={0.45 + i * 0.07} />)}
          <rect x="82" y="34" width="60" height="6" rx="3" fill="#2f6bff" /><rect x="82" y="46" width="90" height="4" rx="2" fill="#c7d8fb" />
        </>
      )}
      {kind === 'app' && (
        <>
          <g transform="rotate(-6 100 80)"><rect x="40" y="26" width="110" height="98" rx="6" fill="#0e2f9b" /><text x="95" y="82" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Lexend, sans-serif" letterSpacing="2">NEXORA</text></g>
          <rect x="164" y="14" width="64" height="132" rx="12" fill="#06143f" stroke="#2a4cc0" strokeWidth="2" /><rect x="169" y="22" width="54" height="116" rx="8" fill="#1a3fb4" />
          <circle cx="196" cy="58" r="14" fill="#6aa0ff" opacity=".7" /><rect x="176" y="84" width="40" height="6" rx="3" fill="#fff" opacity=".8" /><rect x="176" y="96" width="30" height="6" rx="3" fill="#fff" opacity=".5" />
        </>
      )}
    </svg>
  );
}

/* ───────── Map ───────── */
export function MapArt() {
  return (
    <svg className="map-svg" viewBox="0 0 760 260" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Map">
      <rect width="760" height="260" fill="var(--map-bg)" />
      <g stroke="var(--map-road)" strokeWidth="9" fill="none" strokeLinecap="round">
        <path d="M0 190C120 170 220 140 330 150S520 200 760 150" />
        <path d="M250 0C260 70 290 130 330 150S420 260 440 260" />
        <path d="M520 0C500 60 470 110 440 150" />
        <path d="M120 260C180 210 240 190 330 150" />
        <path d="M600 260C620 200 680 160 760 120" />
      </g>
      <g stroke="var(--map-road-2)" strokeWidth="3" fill="none">
        <path d="M0 80H760M0 130H300M0 230H760M60 0V260M180 0V260M380 0V260M580 0V260M680 0V260" opacity=".7" />
      </g>
      <g fill="var(--map-block)" opacity=".7"><rect x="600" y="30" width="110" height="60" rx="6" /><rect x="40" y="30" width="90" height="40" rx="6" /><rect x="470" y="190" width="90" height="50" rx="6" /></g>
      <g fontFamily="Lexend, sans-serif" fontSize="9" fill="var(--map-text)">
        <text x="640" y="40" fontWeight="600" fontSize="10">Al-Bireh</text>
        <text x="130" y="152">Al-Mezan Center</text>
        <text x="420" y="190">Ramallah Cultural Palace</text>
      </g>
      <circle cx="116" cy="148" r="5" fill="#8fb2ff" /><circle cx="560" cy="188" r="5" fill="#8fb2ff" />
      <g transform="translate(330 120)">
        <path d="M0 0c-14-18-14-34 0-34s14 16 0 34z" fill="#1f55ff" transform="translate(0 20) scale(1.5)" />
        <circle cx="0" cy="-12" r="5" fill="#fff" />
      </g>
      <g transform="translate(360 54)">
        <rect width="146" height="44" rx="10" fill="var(--card)" stroke="var(--border)" />
        <g transform="translate(10 8)"><PMark size={26} /></g>
        <text x="42" y="19" fontSize="9" fontWeight="700" fill="var(--text)" fontFamily="Lexend, sans-serif">PDM</text>
        <text x="42" y="31" fontSize="8" fill="var(--muted)" fontFamily="Lexend, sans-serif">Ramallah, Palestine</text>
      </g>
    </svg>
  );
}
