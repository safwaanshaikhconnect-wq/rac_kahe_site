"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { CLUB } from "@/lib/data";

const PILLARS = [
  { name: "Community Welfare", desc: "Sustained civic & health interventions" },
  { name: "Youth Leadership", desc: "Professional summits & career development" },
  { name: "District Priority", desc: "District 3206 flagship social initiatives" },
];

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[var(--background)] border-t border-[var(--border)]"
      aria-label="About Preview"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
            01
          </span>
          <span className="w-8 h-px bg-[var(--border-gold)]" />
          <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] font-medium">
            Who We Are
          </span>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heavy Headline & Ethos */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)] leading-[1.05]">
              Building leaders,
              <br />
              <span className="text-[var(--muted-foreground)]">serving communities</span>
              <br />
              across Coimbatore.
            </h2>

            <div className="mt-8 sm:mt-12 pt-6 border-t border-[var(--border)] flex items-center gap-4">
              <span className="text-xs font-mono tracking-wider uppercase text-[var(--muted-foreground)]">
                Core Ethos
              </span>
              <span className="text-sm font-semibold tracking-wide text-[var(--foreground)] uppercase">
                &ldquo;{CLUB.motto}&rdquo;
              </span>
            </div>
          </div>

          {/* Right Column: Narrative, Pillars & Link */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <p className="text-base sm:text-lg text-[var(--foreground)]/85 leading-relaxed font-normal mb-10">
              The {CLUB.name} (affiliated with {CLUB.district}) is a student-led
              service organization based at {CLUB.institution}. Since chartering
              in {CLUB.founded}, our members have bridged academic rigor with
              direct community service, youth leadership development, and
              district-wide impact projects.
            </p>

            {/* Three Structured Pillar Rows */}
            <div className="flex flex-col border-t border-[var(--border)] mb-10">
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.name}
                  className="py-4 border-b border-[var(--border)] flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[11px] font-mono text-[var(--gold)] font-bold">
                      0{i + 1}
                    </span>
                    <span className="text-sm font-semibold text-[var(--foreground)] tracking-wide group-hover:text-[var(--gold)] transition-colors">
                      {pillar.name}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--muted-foreground)] hidden sm:inline">
                    {pillar.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Read More Link */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--gold)] group transition-colors duration-200"
              >
                <span>Read our full charter &amp; story</span>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
