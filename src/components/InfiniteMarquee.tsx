// Design System v2 — CM Impianti
import { PARTNERS } from "@/lib/data";

export default function InfiniteMarquee() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-14 border-y border-[#C9A84C]/10 overflow-hidden">
      <p className="text-center text-[#8A9BAD] text-xs tracking-[0.2em] uppercase mb-8">
        Hanno scelto CM Impianti
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0A0F1E] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0A0F1E] to-transparent pointer-events-none" />

        <div className="flex marquee-track">
          {items.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-6 flex items-center"
            >
              <div
                className="px-5 py-2 border border-white/10 rounded-full hover:border-[#C9A84C]/40 transition-colors duration-300 cursor-default"
                title={`${partner.name} — Partner CM Impianti`}
              >
                <span
                  className="text-[#8A9BAD] hover:text-[#F0F4F8] transition-colors font-medium text-sm tracking-wide whitespace-nowrap"
                  aria-label={`Partner CM Impianti: ${partner.name}`}
                >
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
