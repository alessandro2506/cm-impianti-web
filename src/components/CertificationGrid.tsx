function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2.5l7 3.2v5.4c0 4.6-2.9 8.9-7 10.4-4.1-1.5-7-5.8-7-10.4V5.7l7-3.2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9 12.2l2 2 4-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CertificationGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((cert) => (
        <div
          key={cert}
          className="flex items-start gap-4 rounded-2xl border border-[#C9A84C]/25 bg-[#0A1424]/80 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/12 text-[#C9A84C]">
            <ShieldIcon className="h-6 w-6" />
          </div>
          <p className="text-sm font-medium leading-snug text-[#E8EDF5] pt-1">{cert}</p>
        </div>
      ))}
    </div>
  );
}
