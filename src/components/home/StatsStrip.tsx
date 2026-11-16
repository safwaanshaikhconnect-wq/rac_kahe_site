"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/data";

export function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const validItems = itemsRef.current.filter(Boolean);

      gsap.fromTo(
        validItems,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative w-full bg-[var(--surface)]/60 border-y border-[var(--border)] py-16 sm:py-20 px-4 sm:px-8 lg:px-12"
      aria-label="Club Statistics"
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
            02
          </span>
          <span className="w-8 h-px bg-[var(--border-gold)]" />
          <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] font-medium">
            Impact in Numbers
          </span>
        </div>

        {/* 5-Column Hairline Grid (Not cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-[var(--border)]">
          {STATS.map((stat, i) => (
            <div
              key={stat.id}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className={`p-4 sm:p-6 lg:p-6 border-r border-b border-[var(--border)] flex flex-col justify-between transition-colors duration-200 hover:bg-[var(--surface-2)]/40 overflow-hidden ${
                i === STATS.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[var(--muted-foreground)]">
                  // 0{i + 1}
                </span>
              </div>

              <div>
                <p
                  className={`font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-none mb-3 truncate ${
                    stat.highlight
                      ? "text-[var(--gold)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)] leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
