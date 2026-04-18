"use client";

import { useEffect, useRef, useState } from "react";
import { KPI } from "@/lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function KpiCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1E2A42] rounded-lg overflow-hidden">
      {KPI.map((kpi, i) => (
        <div
          key={i}
          className={`px-6 py-8 text-center ${
            i < KPI.length - 1 ? "border-r border-[#1E2A42] lg:border-r" : ""
          } ${i === 1 ? "border-b lg:border-b-0 border-[#1E2A42]" : ""}`}
        >
          <div className="font-heading text-5xl lg:text-6xl text-[#C9A84C] leading-none">
            <Counter target={parseInt(kpi.value)} suffix={kpi.suffix} />
          </div>
          <p className="mt-2 text-[#9BA8C0] text-sm leading-snug">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
}
