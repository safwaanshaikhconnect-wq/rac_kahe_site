"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lines = [line1Ref.current, line2Ref.current].filter(Boolean);

    if (prefersReducedMotion) {
      gsap.set(lines, { yPercent: 0, opacity: 1 });
      if (metaRef.current) gsap.set(metaRef.current, { opacity: 1, y: 0 });
      if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      // Staggered reveal of the headline lines from behind overflow:hidden wrappers
      tl.fromTo(
        lines,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.18,
        }
      );

      // Metadata reveal
      if (metaRef.current) {
        tl.fromTo(
          metaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        );
      }

      // Action & scroll reveal
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[var(--background)] px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-8 sm:pb-10"
      aria-label="Hero Section"
    >
      {/* Background Image: team photo with rich navy gradient (stronger at bottom/left, faces stay bright) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/assets/team-photo.jpg"
          alt="Rotaract Club of Karpagam Academy of Higher Education Team Photo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-[center_35%] opacity-40 filter contrast-[1.12] brightness-[0.94]"
        />
        {/* Navy gradient overlay: stronger at bottom and left for text legibility, keeping faces bright */}
        <div className="absolute inset-0 hero-navy-overlay" />
        {/* Bottom fade into solid navy surface */}
        <div className="absolute inset-x-0 bottom-0 h-44 hero-bottom-fade" />
      </div>

      {/* Top District / Chapter Identifier */}
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div
          ref={metaRef}
          className="opacity-0 flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase text-[var(--muted-foreground)] font-medium"
        >
          {/* Cranberry hover/status dot (tiny accent <= 5%) */}
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--cranberry)]" />
          <span className="text-[var(--foreground)]">Rotaract District 3206</span>
          <span className="text-white/20">/</span>
          <span className="text-[var(--muted-foreground)]">KAHE Chapter</span>
        </div>
      </div>

      {/* Main Oversized Headline (gold accent on impact line) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-8 sm:py-12">
        <h1 className="font-display hero-headline text-[var(--foreground)] uppercase flex flex-col">
          <span className="overflow-hidden block py-1">
            <span ref={line1Ref} className="block will-change-transform opacity-0">
              Rise with Purpose,
            </span>
          </span>
          <span className="overflow-hidden block py-1">
            <span
              ref={line2Ref}
              className="block will-change-transform opacity-0 text-[var(--gold)]"
            >
              Soar with Impact.
            </span>
          </span>
        </h1>

        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[var(--muted-foreground)] max-w-xl font-normal leading-relaxed">
          Rotaract Club of Karpagam Academy of Higher Education. Committed to
          youth leadership, community service, and purposeful action across
          Coimbatore.
        </p>
      </div>

      {/* Bottom Bar: Action & Scroll Indicator */}
      <div
        ref={ctaRef}
        className="relative z-10 max-w-7xl w-full mx-auto opacity-0 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4 border-t border-[var(--border)]"
      >
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-[3px] bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--background)] transition-colors duration-200 shadow-sm"
          >
            Join our mission
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-[3px] border border-[var(--border)] hover:border-[var(--gold)] text-[var(--foreground)] hover:text-[var(--gold)] transition-colors duration-200"
          >
            About club
          </Link>
        </div>

        <div className="flex items-center gap-3 text-[var(--muted-foreground)] text-xs tracking-wider uppercase">
          <span>Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce text-[var(--gold)]" />
        </div>
      </div>
    </section>
  );
}
