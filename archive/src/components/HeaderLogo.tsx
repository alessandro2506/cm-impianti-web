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
    <span className={`inline-flex min-w-0 max-w-full flex-col gap-1.5 ${className}`}>
      <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-0">
        <span
          className={`font-heading leading-none tracking-tight ${compact ? "text-3xl sm:text-[2.05rem]" : "text-[2.05rem] sm:text-[2.3rem] lg:text-[2.45rem]"}`}
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
          className={`font-heading leading-none tracking-[0.12em] text-white ${compact ? "text-[1.38rem] sm:text-[1.55rem]" : "text-[1.55rem] sm:text-[1.75rem] lg:text-[1.95rem]"}`}
        >
          IMPIANTI
        </span>
      </span>
      <span
        className={`font-body font-extralight uppercase tracking-[0.28em] text-slate-300 ${compact ? "text-[0.56rem] sm:text-[0.6rem]" : "text-[0.62rem] sm:text-[0.67rem] lg:text-[0.73rem]"}`}
      >
        Performance Technology
      </span>
    </span>
  );
}
