// Design System v2 — CM Impianti
import { PARTNERS } from "@/lib/data";

export default function InfiniteMarquee() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 border-y border-[#9AD5FF]/20 overflow-hidden bg-[linear-gradient(180deg,#07172D_0%,#0A2240_100%)]">
      <div className="text-center mb-10">
        <p className="text-[#8FD1FF] text-[10px] tracking-[0.3em] uppercase font-semibold mb-1">
          Hanno scelto CM Impianti
        </p>
        <p className="text-[#CFE2F6] text-xs">Partner e committenti internazionali</p>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #07172D, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0A2240, transparent)" }}
        />

        <div className="flex marquee-track items-center gap-4">
          {items.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: partner.width + 40, height: 56 }}
            >
              {partner.logo ? (
                <div
                  className="text-[#E6F4FF]/85 hover:text-white transition-all duration-300 hover:scale-105"
                  style={{ width: partner.width, height: partner.height }}
                  title={partner.name}
                  aria-label={`Partner CM Impianti: ${partner.name}`}
                  dangerouslySetInnerHTML={{ __html: partner.logo }}
                />
              ) : (
                <span className="text-[#E6F4FF]/85 hover:text-white font-medium text-sm tracking-wide transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
