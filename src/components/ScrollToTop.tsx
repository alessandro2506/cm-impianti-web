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

  const SIZE = 52;
  const R = SIZE / 2;
  const clipId = "stt-clip";

  // Fill rises from bottom. fillY = top of the fill area (0 = full circle, SIZE = empty)
  // At progress=1, fillY=0 → entire circle filled (solid)
  // Wave amplitude shrinks to 0 as progress→1 for clean solid circle at 100%
  const fillY = SIZE * (1 - progress);
  const amp = progress >= 0.98 ? 0 : 3.5 * (1 - progress * 0.6);

  const buildFill = () => {
    if (progress >= 0.98) {
      // Solid fill — full rectangle inside clip
      return `M 0 0 L ${SIZE} 0 L ${SIZE} ${SIZE} L 0 ${SIZE} Z`;
    }
    const pts = 32;
    let d = `M 0 ${fillY}`;
    for (let i = 0; i <= pts; i++) {
      const x = (i / pts) * SIZE;
      const y = fillY + Math.sin((i / pts) * Math.PI * 3) * amp;
      d += ` L ${x} ${y}`;
    }
    d += ` L ${SIZE} ${SIZE} L 0 ${SIZE} Z`;
    return d;
  };

  // Progress ring circumference
  const ringR = R - 2;
  const circ = 2 * Math.PI * ringR;

  return (
    <button
      onClick={handleClick}
      aria-label="Torna in cima alla pagina"
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 hover:scale-110 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ width: SIZE, height: SIZE }}
    >
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} overflow="visible">
        {/* Shadow */}
        <filter id="stt-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#2563EB" floodOpacity="0.35" />
        </filter>

        {/* Clip to circle */}
        <defs>
          <clipPath id={clipId}>
            <circle cx={R} cy={R} r={R - 1} />
          </clipPath>
        </defs>

        {/* Background */}
        <circle cx={R} cy={R} r={R - 1} fill="#0F172A" />

        {/* Wave fill — vertical only, no horizontal animation */}
        <g clipPath={`url(#${clipId})`}>
          <path
            d={buildFill()}
            fill="url(#stt-grad)"
            style={{ transition: "d 0.2s ease" }}
          />
        </g>

        {/* Gradient def */}
        <defs>
          <linearGradient id="stt-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>

        {/* Progress ring */}
        <circle
          cx={R}
          cy={R}
          r={ringR}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - progress)}
          strokeLinecap="round"
          transform={`rotate(-90 ${R} ${R})`}
          style={{ transition: "stroke-dashoffset 0.2s ease" }}
        />

        {/* Arrow up icon */}
        <polyline
          points={`${R - 5},${R + 4} ${R},${R - 4} ${R + 5},${R + 4}`}
          fill="none"
          stroke={progress > 0.35 ? "#fff" : "#94A3B8"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "stroke 0.3s" }}
        />
      </svg>
    </button>
  );
}
