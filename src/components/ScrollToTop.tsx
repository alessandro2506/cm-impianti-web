"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
      setVisible(scrollTop > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Wave geometry
  const SIZE = 56;
  const R = SIZE / 2;
  const fillY = R * 2 * (1 - progress); // from bottom
  const waveAmp = 4;
  const clipId = "scroll-wave-clip";

  // Build wave path that clips the circle fill
  // We draw a shape: wave across top + rect down to bottom of circle
  const buildWavePath = () => {
    const pts = 40;
    const step = (R * 2) / pts;
    let d = `M 0 ${fillY}`;
    for (let i = 0; i <= pts; i++) {
      const x = i * step;
      const y = fillY + Math.sin((i / pts) * Math.PI * 4) * waveAmp;
      d += ` L ${x} ${y}`;
    }
    d += ` L ${R * 2} ${R * 2} L 0 ${R * 2} Z`;
    return d;
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Torna in cima"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ width: SIZE, height: SIZE }}
    >
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {/* Background circle */}
        <circle cx={R} cy={R} r={R - 1} fill="#111827" stroke="#1E2A42" strokeWidth="1.5" />

        {/* Wave fill clipped to circle */}
        <defs>
          <clipPath id={clipId}>
            <circle cx={R} cy={R} r={R - 2} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <path d={buildWavePath()} fill="#C9A84C" opacity="0.85" className="transition-all duration-300">
            <animateTransform
              attributeName="transform"
              type="translate"
              from={`-${R * 2} 0`}
              to="0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          {/* Second wave offset for depth */}
          <path d={buildWavePath()} fill="#C9A84C" opacity="0.5" className="transition-all duration-300">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to={`${R * 2} 0`}
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Progress ring */}
        <circle
          cx={R}
          cy={R}
          r={R - 1.5}
          fill="none"
          stroke="#C9A84C"
          strokeWidth="1.5"
          strokeDasharray={`${2 * Math.PI * (R - 1.5)}`}
          strokeDashoffset={`${2 * Math.PI * (R - 1.5) * (1 - progress)}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${R} ${R})`}
          className="transition-all duration-300"
        />

        {/* Arrow up */}
        <path
          d={`M ${R} ${R - 7} L ${R - 5} ${R + 3} L ${R} ${R} L ${R + 5} ${R + 3} Z`}
          fill={progress > 0.4 ? "#0A0F1E" : "#E8EDF5"}
          className="transition-colors duration-300"
        />
      </svg>
    </button>
  );
}
