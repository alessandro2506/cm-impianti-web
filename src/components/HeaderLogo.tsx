/**
 * Logo CM Impianti — marchio ondulato (riferimento brand) + wordmark + tagline.
 */
export default function HeaderLogo({
  className = "",
  compact = false,
}: {
  className?: string;
  /** Layout più compatto (menu mobile) */
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 sm:gap-3 min-w-0 max-w-[min(78vw,280px)] sm:max-w-none ${className}`}
    >
      <svg
        className={`shrink-0 ${compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"}`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="cm-logo-grad" x1="6" y1="8" x2="42" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38D9FF" />
            <stop offset="1" stopColor="#0090E0" />
          </linearGradient>
        </defs>
        {/* Silhouette tipo “M” / heartbeat — tratto unico, angoli morbidi */}
        <path
          fill="url(#cm-logo-grad)"
          d="M8 40V10h6.2l6.8 12.2L27.8 10H34v30h-5.8V22.2L22.2 32h-2.4L13.8 22.4V40H8z"
        />
      </svg>
      <span className="flex flex-col justify-center min-w-0 leading-none">
        <span
          className={`font-heading tracking-[0.06em] text-[#F0F7FF] truncate ${
            compact ? "text-[22px] sm:text-[24px]" : "text-[24px] sm:text-[28px] lg:text-[30px]"
          }`}
        >
          CM IMPIANTI
        </span>
        <span
          className={`font-body font-medium uppercase text-[#B8D4EC] tracking-[0.22em] mt-1.5 leading-tight ${
            compact ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[10px] lg:text-[11px]"
          }`}
        >
          Performance Technology
        </span>
      </span>
    </span>
  );
}
