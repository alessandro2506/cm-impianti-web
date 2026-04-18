import { PARTNERS } from "@/lib/data";

export default function InfiniteMarquee() {
  // Duplicate for seamless loop
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-14 border-y border-[#1E2A42] overflow-hidden">
      <p className="text-center text-[#9BA8C0] text-xs tracking-[0.2em] uppercase mb-8">
        Hanno scelto CM Impianti
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0A0F1E] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0A0F1E] to-transparent pointer-events-none" />

        <div className="flex marquee-track">
          {items.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center"
            >
              <div
                className="px-6 py-3 border border-[#1E2A42] rounded-xl bg-[#060B16] hover:border-[#C9A84C]/40 transition-colors duration-300"
                title={`${partner.name} — Partner CM Impianti`}
              >
                <span
                  className="text-[#9BA8C0] hover:text-[#C9A84C] transition-colors font-semibold text-sm tracking-wide whitespace-nowrap"
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
