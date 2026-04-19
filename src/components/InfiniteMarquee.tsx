// Design System v2 — CM Impianti
import { PARTNERS } from "@/lib/data";

export default function InfiniteMarquee() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 border-y border-[#C9A84C]/10 overflow-hidden bg-[#060C14]">
      <div className="text-center mb-10">
        <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-semibold mb-1">
          Hanno scelto CM Impianti
        </p>
        <p className="text-[#8A9BAD] text-xs">Partner e committenti internazionali</p>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #060C14, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #060C14, transparent)" }}
        />

        <div className="flex marquee-track items-center">
          {items.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: partner.width + 40, height: 56 }}
            >
              {partner.logo ? (
                <div
                  className="text-[#8A9BAD]/60 hover:text-[#F0F4F8]/80 transition-all duration-300 hover:scale-105"
                  style={{ width: partner.width, height: partner.height }}
                  title={partner.name}
                  aria-label={`Partner CM Impianti: ${partner.name}`}
                  dangerouslySetInnerHTML={{ __html: partner.logo }}
                />
              ) : (
                <span className="text-[#8A9BAD]/60 hover:text-[#F0F4F8]/80 font-medium text-sm tracking-wide transition-colors whitespace-nowrap">
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
