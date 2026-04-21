"use client";

import { useEffect, useRef, useState } from "react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export default function CompanyTimeline({
  items,
}: {
  items: TimelineItem[];
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      if (scroller.scrollLeft > 8) setShowHint(false);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-0 right-0 top-[4.75rem] h-px bg-white/20" />
      <div
        ref={scrollerRef}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Timeline storica CM Impianti"
      >
        {items.map((item, index) => (
          <article
            key={item.year}
            className="fade-in-up relative min-h-[17rem] min-w-[15.5rem] snap-start rounded-2xl border border-white/14 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:min-w-[18rem]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="pointer-events-none absolute left-5 top-[-1.15rem] h-8 w-px bg-gradient-to-b from-white/80 to-white/25" />
            <p className="font-technical text-[12px] font-medium tracking-[0.26em] text-[#F8FCFF]/85">
              {item.year}
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[0.01em] text-white">
              {item.title}
            </h3>
            <p className="mt-4 max-w-[25ch] text-sm leading-7 text-slate-200">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div
        className={`timeline-hint pointer-events-none absolute right-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#001a33]/70 p-2 text-white/80 shadow-[0_0_18px_rgba(0,0,0,0.35)] transition-opacity duration-500 sm:flex ${
          showHint ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
