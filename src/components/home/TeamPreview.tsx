"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { TEAM } from "@/lib/data";

export function TeamPreview() {
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

  // Show a representative cross-section of leadership (Secretariat & key chairs)
  const previewOfficers = [
    TEAM.find((m) => m.role === "President"),
    TEAM.find((m) => m.role === "Secretary"),
    TEAM.find((m) => m.role === "Immediate Past President"),
    TEAM.find((m) => m.role === "Vice President"),
    TEAM.find((m) => m.role.includes("District Priority")),
    TEAM.find((m) => m.role.includes("Treasurer")),
  ].filter(Boolean) as typeof TEAM;

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[var(--background)] border-t border-[var(--border)]"
      aria-label="Board of Directors Preview"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto">
        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Section Header, Headline & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
                  05
                </span>
                <span className="w-8 h-px bg-[var(--border-gold)]" />
                <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] font-medium">
                  Board of Directors
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)] leading-[1.05] mb-6">
                Stewards of
                <br />
                <span className="text-[var(--gold)]">the Charter.</span>
                <br />
                RY 2026–27.
              </h2>

              <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed font-normal mb-8">
                The Rotaract Club of Karpagam Academy of Higher Education is led
                by 23 dedicated student officers and avenue directors coordinating
                civic engagement across Coimbatore and District 3206.
              </p>
            </div>

            <div>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--gold)] group transition-colors duration-200"
              >
                <span>Meet all 23 board officers</span>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Leadership Directory Strip */}
          <div className="lg:col-span-7">
            <div className="border-t border-[var(--border)]">
              {previewOfficers.map((officer, i) => (
                <div
                  key={`${officer.name}-${officer.role}`}
                  className="py-5 sm:py-6 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 group hover:bg-[var(--surface)]/50 px-3 -mx-3 transition-colors duration-200"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] font-mono text-[var(--gold)] font-bold">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--gold)] transition-colors leading-tight">
                        {officer.name}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)] mt-0.5">
                        {officer.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pl-8 sm:pl-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[var(--surface-2)] text-[var(--muted-foreground)]">
                      {officer.department}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--gold)] font-medium">
                      2026–27
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick summary link */}
            <div className="mt-8 flex items-center justify-between text-xs text-[var(--muted-foreground)] font-mono">
              <span>Roster: 23 Officers</span>
              <span>Rotary District 3206</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

