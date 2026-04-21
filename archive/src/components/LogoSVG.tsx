"use client";

interface LogoSVGProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function LogoSVG({ className = "", width = 160, height = 48 }: LogoSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CM Impianti"
    >
      {/* PLACEHOLDER — sostituire con SVG originale del cliente */}
      <rect x="0" y="8" width="4" height="32" fill="#C9A84C" />
      <rect x="8" y="8" width="4" height="32" fill="#C9A84C" />
      <rect x="4" y="8" width="4" height="4" fill="#C9A84C" />
      <rect x="4" y="36" width="4" height="4" fill="#C9A84C" />

      <text
        x="22"
        y="32"
        fontFamily="Arial Black, Arial"
        fontWeight="900"
        fontSize="22"
        fill="#E8EDF5"
        letterSpacing="0.05em"
      >
        CM
      </text>

      <text
        x="52"
        y="28"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="10"
        fill="#C9A84C"
        letterSpacing="0.15em"
      >
        IMPIANTI
      </text>
      <text
        x="52"
        y="40"
        fontFamily="Arial, sans-serif"
        fontWeight="300"
        fontSize="7"
        fill="#9BA8C0"
        letterSpacing="0.08em"
      >
        PERFORMANCE TECHNOLOGY
      </text>
    </svg>
  );
}
