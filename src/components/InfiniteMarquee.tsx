// Design System v2 — CM Impianti
import { PARTNERS } from "@/lib/data";

export default function InfiniteMarquee() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="w-full min-w-0 overflow-hidden border-y border-[#9AD5FF]/20 bg-[linear-gradient(180deg,#07172D_0%,#071c33_45%,#0A2240_100%)] py-24 lg:py-28">
      <div className="mx-auto mb-12 max-w-7xl px-[5%] text-center sm:mb-14">
        <p className="mb-3 font-heading text-3xl font-bold tracking-[0.05em] text-white sm:text-4xl md:text-5xl">
          Hanno scelto CM Impianti
        </p>
        <p className="text-lg text-slate-200 sm:text-xl">Partner e committenti internazionali</p>
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
              style={{ width: `${(partner.width + 40) / 16}rem`, height: "3.5rem" }}
            >
              {partner.logo ? (
                <div
                  className="text-[#E6F4FF]/85 hover:text-white transition-all duration-300 hover:scale-105"
                  style={{ width: `${partner.width / 16}rem`, height: `${partner.height / 16}rem` }}
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
