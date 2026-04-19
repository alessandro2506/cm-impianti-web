"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    document.documentElement.classList.add("has-reveal");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-group")
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
