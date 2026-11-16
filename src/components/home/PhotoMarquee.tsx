"use client";

import Image from "next/image";

const CLUB_PHOTOS = [
  {
    title: "KAHE General Body & Member Delegation",
    avenue: "Club Service",
    year: "RY 2026–27",
    src: "/assets/marquee/club-assembly-1.jpg",
    alt: "Rotaract Club of KAHE General Body Assembly and Active Members",
  },
  {
    title: "The CommUNITY Platter Initiative",
    avenue: "Community Service",
    year: "District Outreach",
    src: "/assets/marquee/community-platter.png",
    alt: "CommUNITY Platter community feeding outreach program",
  },
  {
    title: "District Sports & Fellowship League",
    avenue: "District Priority",
    year: "RY 2025–26",
    src: "/assets/marquee/cricket-quest.webp",
    alt: "District 3206 Cricket and Quest Sports Fellowship",
  },
  {
    title: "Presidential Briefing & Strategic Vision",
    avenue: "Leadership",
    year: "RY 2026–27",
    src: "/assets/marquee/safwaan.jpg",
    alt: "Rtr. Mohammed Safwaan, Club President RY 2026-27",
  },
  {
    title: "Youth Leadership & Professional Forum",
    avenue: "Professional Dev",
    year: "Campus Forum",
    src: "/assets/marquee/event-showcase-1.webp",
    alt: "Youth empowerment and career leadership conference",
  },
  {
    title: "Heritage of Service & Handover",
    avenue: "Heritage",
    year: "RY 2025–26",
    src: "/assets/marquee/karthick.jpg",
    alt: "Rtr. Karthick Chandrasekar, Immediate Past President",
  },
  {
    title: "Cross-Club Fellowship & Exchange",
    avenue: "International Service",
    year: "Fellowship Meet",
    src: "/assets/marquee/event-showcase-2.webp",
    alt: "District 3206 inter-club fellowship and networking",
  },
  {
    title: "District 3206 Annual Conference Delegation",
    avenue: "District Assembly",
    year: "Coimbatore",
    src: "/assets/marquee/event-showcase-3.webp",
    alt: "KAHE delegation at Rotary International District 3206 Conference",
  },
];

export function PhotoMarquee() {
  // Duplicate array once for seamless infinite loop
  const marqueeItems = [...CLUB_PHOTOS, ...CLUB_PHOTOS];

  return (
    <section
      id="moments"
      className="relative py-20 sm:py-24 border-t border-[var(--border)] overflow-hidden bg-[var(--background)]"
      aria-label="Club Photos and Fellowship Moments"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-10 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--cranberry)]" />
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] font-medium">
                // LIFE AT ROTARACT KAHE
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[var(--foreground)] tracking-tight">
              MOMENTS OF PURPOSE & FELLOWSHIP.
            </h2>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] max-w-md">
            Snapshots from general body meets, community service drives,
            district conferences, and leadership initiatives across District 3206.
          </p>
        </div>
      </div>

      {/* Marquee Viewport with Edge Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left gradient mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/80 to-transparent z-10" />

        {/* Right gradient mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--background)] via-[var(--background)]/80 to-transparent z-10" />

        {/* Running Track */}
        <div className="marquee-track py-2">
          {marqueeItems.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 mx-3 group relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--gold-light)]/40 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-[220px] sm:h-[250px] w-full overflow-hidden bg-[var(--surface-2)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 360px, 400px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle Navy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5">
                  <span className="text-[var(--gold)] font-medium">
                    {photo.avenue}
                  </span>
                  <span>{photo.year}</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[var(--foreground)] line-clamp-1 group-hover:text-[var(--gold)] transition-colors">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Hint */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-6 flex items-center justify-between text-xs text-[var(--muted-foreground)]">
        <span className="hidden sm:inline">
          Rotary International District 3206 • Karpagam Academy of Higher Education
        </span>
        <span className="text-[11px] text-[var(--muted-foreground)]/70">
          Hover to pause inspection
        </span>
      </div>
    </section>
  );
}

