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
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          {label}
        </p>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-6xl leading-none ${
          gold ? "text-[#C9A84C]" : "text-[#E8EDF5]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#9BA8C0] text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
