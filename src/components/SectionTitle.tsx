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
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <p className="text-blue-400 text-xs font-semibold tracking-[0.22em] uppercase">
            {label}
          </p>
        </div>
      )}
      <h2
        className={`font-heading leading-none ${
          gold
            ? "text-[#C9A84C]"
            : "text-white"
        } text-4xl md:text-5xl lg:text-[56px]`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-[#64748B] text-lg leading-[1.85] ${center ? "mx-auto" : ""} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
