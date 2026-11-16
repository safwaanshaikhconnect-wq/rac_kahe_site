"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { PRESIDENTS } from "@/lib/data";

export function HistoryPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        listRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="history"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[var(--surface)]/40 border-t border-[var(--border)]"
      aria-label="Club History and Presidential Lineage"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
                04
              </span>
              <span className="w-8 h-px bg-[var(--border-gold)]" />
              <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] font-medium">
                Leadership Heritage
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)] leading-[1.05]">
              Lineage of purpose.
              <br />
              <span className="text-[var(--muted-foreground)]">
                Presidents of Rotaract KAHE.
              </span>
            </h2>
          </div>

          <Link
            href="/history"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--gold)] hover:text-[var(--gold-light)] group transition-colors duration-200 self-start sm:self-auto"
          >
            <span>Full Presidential Archive</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Editorial Chronological Timeline List */}
        <div ref={listRef} className="border-t border-[var(--border)]">
          {PRESIDENTS.map((pres) => (
            <div
              key={pres.id}
              className="py-8 sm:py-10 border-b border-[var(--border)] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[var(--surface)]/60 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors duration-200"
            >
              {/* Year column */}
              <div className="md:col-span-3 flex items-center gap-2">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--gold)] font-bold">
                  {pres.year}
                </span>
                {pres.isCurrent && (
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[var(--gold)] text-[var(--background)] font-extrabold">
                    Current
                  </span>
                )}
              </div>

              {/* President Name & Role */}
              <div className="md:col-span-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--gold)] transition-colors leading-tight mb-1">
                  {pres.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-medium">
                  {pres.role}
                </p>
              </div>

              {/* Theme & Milestone */}
              <div className="md:col-span-5">
                {pres.theme && (
                  <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] tracking-wide mb-1.5">
                    &ldquo;{pres.theme}&rdquo;
                  </p>
                )}
                <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {pres.milestone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

