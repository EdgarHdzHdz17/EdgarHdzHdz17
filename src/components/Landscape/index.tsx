const contours = [
  "M-30 90 C 260 60, 540 140, 820 95 S 1220 40, 1520 110",
  "M-30 210 C 180 260, 420 150, 700 230 S 1100 300, 1520 190",
  "M-40 390 C 150 330, 360 470, 620 400 S 980 300, 1240 430 S 1460 500, 1560 380",
  "M-40 520 C 220 470, 480 600, 780 510 S 1140 420, 1520 560",
  "M-40 680 C 200 610, 460 780, 760 670 S 1120 560, 1520 720",
  "M-40 820 C 260 760, 540 900, 860 800 S 1220 700, 1560 860",
];

const trail =
  "M-70 760 C 120 690, 260 600, 430 650 S 700 790, 880 680 S 1120 500, 1320 560 S 1500 480, 1580 400";

const particles = [
  [260, 720],
  [390, 650],
  [520, 700],
  [670, 740],
  [810, 660],
  [960, 590],
  [1100, 540],
  [1230, 570],
  [1360, 490],
  [980, 360],
  [1140, 300],
  [1280, 240],
  [700, 430],
];

const pins = [
  { x: 1180, y: 70, h: 78 },
  { x: 1304, y: 36, h: 92 },
  { x: 1410, y: 96, h: 60 },
];

const Landscape = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ridge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--ridge-far)" stopOpacity="0.08" />
            <stop offset="55%" stopColor="var(--ridge-mid)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--ridge-near)" stopOpacity="0.34" />
          </linearGradient>
          <linearGradient id="trail" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--glow)" stopOpacity="0" />
            <stop offset="22%" stopColor="var(--glow)" stopOpacity="0.35" />
            <stop offset="55%" stopColor="var(--glow)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--glow)" stopOpacity="0.15" />
          </linearGradient>
          <filter id="trail-glow" x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1440" height="900" fill="url(#ridge)" />

        {contours.map((d, index) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="var(--contour)"
            strokeWidth={index > 3 ? 1.25 : 1}
            opacity={0.45 + index * 0.08}
            strokeDasharray={index === 2 || index === 4 ? "1.4 9" : undefined}
            strokeLinecap="round"
          />
        ))}

        <path
          d={trail}
          fill="none"
          stroke="url(#trail)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.42"
          filter="url(#trail-glow)"
        />
        <path
          d={trail}
          fill="none"
          stroke="url(#trail)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {particles.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" fill="var(--particle)" />
        ))}

        {pins.map((pin) => (
          <g key={pin.x}>
            <line
              x1={pin.x}
              y1={pin.y}
              x2={pin.x}
              y2={pin.y + pin.h}
              stroke="var(--contour)"
              strokeWidth="1"
            />
            <circle cx={pin.x} cy={pin.y - 3} r="2.1" fill="var(--particle)" />
          </g>
        ))}

        {Array.from({ length: 12 }, (_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          return (
            <circle
              key={`grid-${i}`}
              cx={1248 + col * 22}
              cy={150 + row * 22}
              r="1"
              fill="var(--contour)"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Landscape;
