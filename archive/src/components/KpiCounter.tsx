// Design System v2 — CM Impianti
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
      { threshold: 0, rootMargin: "-100px" }
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
    <div
      className="grid w-full min-w-0 max-w-full grid-cols-2 gap-0 overflow-hidden rounded-2xl lg:grid-cols-4"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(201,168,76,0.12)",
        boxShadow: "0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,168,76,0.06)",
      }}
    >
      {KPI.map((kpi, i) => (
        <div
          key={i}
          className={`px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8 ${
            i < KPI.length - 1 ? "border-r border-[#C9A84C]/10" : ""
          } ${i === 1 ? "border-b lg:border-b-0 border-[#C9A84C]/10" : ""}`}
        >
          <div className="font-heading text-5xl lg:text-6xl leading-none text-[#C9A84C]">
            <Counter target={parseInt(kpi.value)} suffix={kpi.suffix} />
          </div>
          <p className="mt-3 text-sm leading-snug text-slate-200">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
}
