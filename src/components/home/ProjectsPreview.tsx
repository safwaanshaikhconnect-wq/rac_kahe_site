"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function ProjectsPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
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

  const featured = PROJECTS[0];
  const listProjects = PROJECTS.slice(1, 3);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[var(--background)] border-t border-[var(--border)]"
      aria-label="Projects and Initiatives Preview"
    >
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
                03
              </span>
              <span className="w-8 h-px bg-[var(--border-gold)]" />
              <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] font-medium">
                Initiatives in Action
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)] leading-[1.05]">
              Targeted action.
              <br />
              <span className="text-[var(--muted-foreground)]">
                Measurable impact.
              </span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--gold)] hover:text-[var(--gold-light)] group transition-colors duration-200 self-start sm:self-auto"
          >
            <span>Explore all 50+ projects</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Asymmetrical Magazine Layout: Featured Showcase + Compact Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (7 cols): Featured Project Showcase */}
          {featured && (
            <div className="lg:col-span-7 rounded-[4px] bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-gold)] p-7 sm:p-10 flex flex-col justify-between transition-colors duration-200">
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-[2px] bg-[var(--surface-2)] text-[var(--gold)] font-bold">
                    {featured.avenue}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[var(--gold)] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    {featured.status}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--foreground)] tracking-tight uppercase leading-tight mb-4">
                  {featured.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed mb-8">
                  {featured.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--muted-foreground)]">
                <span>Rotary District 3206 Priority</span>
                <span className="text-[var(--foreground)] font-semibold">
                  {featured.year}
                </span>
              </div>
            </div>
          )}

          {/* Right Column (5 cols): 2 Compact Rows + Quick Link */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {listProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="rounded-[4px] bg-[var(--surface)]/70 border border-[var(--border)] hover:border-[var(--border-gold)] p-6 sm:p-7 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[var(--surface-2)] text-[var(--muted-foreground)]">
                      {proj.avenue}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--muted-foreground)]">
                      0{idx + 2} // {proj.status}
                    </span>
                  </div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight uppercase leading-snug mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--muted-foreground)]">
                  <span>{proj.year}</span>
                  <span className="text-[var(--gold)] font-medium">District 3206</span>
                </div>
              </div>
            ))}

            {/* Bottom Archive Banner */}
            <div className="p-5 rounded-[4px] border border-dashed border-[var(--border)] bg-[var(--surface)]/30 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                  Complete Project Archives
                </p>
                <p className="text-[11px] text-[var(--muted-foreground)]">
                  Track records, volunteer statistics, and reports
                </p>
              </div>
              <Link
                href="/projects"
                className="shrink-0 p-2 text-[var(--gold)] hover:text-[var(--gold-light)]"
                aria-label="View complete project archive"
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

