// Design System v2 — CM Impianti
interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  gold?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = false,
  gold = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && (
        <div className={`inline-flex items-center gap-2 mb-5 ${center ? "justify-center" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
          <p className="font-technical text-[#C9A84C] text-xs font-medium tracking-[0.22em] uppercase">
            {label}
          </p>
        </div>
      )}
      <h2
        className={`font-heading leading-none ${
          gold ? "text-[#C9A84C]" : "text-white"
        } text-[clamp(1.9rem,4.1vw,3.2rem)]`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-sm leading-8 text-slate-100 sm:text-base ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
