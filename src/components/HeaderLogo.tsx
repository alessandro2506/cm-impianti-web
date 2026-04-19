/**
 * Logo CM Impianti — "CM" iconico in gradiente + IMPIANTI + tagline sottile.
 */
export default function HeaderLogo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`inline-flex min-w-0 max-w-[min(85vw,320px)] flex-col gap-1.5 sm:max-w-none ${className}`}>
      <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-0">
        <span
          className={`font-heading leading-none tracking-tight ${compact ? "text-[1.85rem] sm:text-[2rem]" : "text-[2rem] sm:text-[2.35rem] lg:text-[2.5rem]"}`}
          style={{
            background: "linear-gradient(135deg, #5EEAD4 0%, #22D3EE 35%, #0EA5E9 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          CM
        </span>
        <span
          className={`font-heading leading-none tracking-[0.12em] text-white ${compact ? "text-[1.35rem] sm:text-[1.55rem]" : "text-[1.55rem] sm:text-[1.8rem] lg:text-[2rem]"}`}
        >
          IMPIANTI
        </span>
      </span>
      <span
        className={`font-body font-extralight uppercase tracking-[0.32em] text-slate-300 ${compact ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-[11px] lg:text-[12px]"}`}
      >
        Performance Technology
      </span>
    </span>
  );
}
