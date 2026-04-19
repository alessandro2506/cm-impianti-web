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
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {KPI.map((kpi, i) => (
        <div
          key={i}
          className={`px-8 py-10 text-center ${
            i < KPI.length - 1 ? "border-r border-white/[0.06]" : ""
          } ${i === 1 ? "border-b lg:border-b-0 border-white/[0.06]" : ""}`}
        >
          <div className="font-heading text-5xl lg:text-6xl leading-none bg-gradient-to-br from-white to-blue-400 bg-clip-text text-transparent">
            <Counter target={parseInt(kpi.value)} suffix={kpi.suffix} />
          </div>
          <p className="mt-3 text-[#64748B] text-sm leading-snug">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
}
