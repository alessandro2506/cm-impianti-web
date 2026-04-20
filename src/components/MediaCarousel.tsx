"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type CarouselItem = {
  href: string;
  image: string;
  title: string;
  meta: string;
  description: string;
};

export default function MediaCarousel({
  items,
  ariaLabel,
}: {
  items: CarouselItem[];
  ariaLabel: string;
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
      <div
        ref={scrollerRef}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={ariaLabel}
      >
        {items.map((item, index) => (
          <Link
            key={`${item.href}-${index}`}
            href={item.href}
            className="group relative min-h-[24rem] min-w-[calc(100vw-3.8rem)] snap-start overflow-hidden rounded-2xl border border-white/15 bg-[#001a33]/50 shadow-[0_12px_36px_rgba(0,0,0,0.26)] sm:min-w-[26rem] lg:min-w-[28rem]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-[1.06] group-hover:brightness-110"
              sizes="(max-width: 640px) calc(100vw - 3.8rem), (max-width: 1024px) 26rem, 28rem"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#001428]/95 via-[#001a33]/42 to-[#001a33]/12" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="font-technical text-[11px] uppercase tracking-[0.25em] text-white/90 sm:text-xs">
                {item.meta}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-sm leading-7 text-white">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div
        className={`carousel-hint pointer-events-none absolute right-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#001a33]/75 p-2 text-white/85 shadow-[0_0_18px_rgba(0,0,0,0.35)] transition-opacity duration-500 md:flex ${
          showHint ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
