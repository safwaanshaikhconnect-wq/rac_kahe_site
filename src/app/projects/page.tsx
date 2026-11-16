import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CLUB, PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects & Initiatives",
  description: `Explore service initiatives, community drives, and priority projects by ${CLUB.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 lg:px-12 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--gold)] mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
              Initiatives
            </span>
            <span className="w-8 h-px bg-[var(--border-gold)]" />
            <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
              Rotary Year {CLUB.rotaryYear}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-6">
            Action Driven by Purpose.
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed">
            With over 50+ projects executed across community welfare, youth
            leadership, and district priority campaigns, our initiatives embody
            the Rotary ideal of &ldquo;{CLUB.motto}&rdquo;.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-[4px] bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-gold)] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-[2px] bg-[var(--surface-2)] text-[var(--gold)] font-semibold">
                    {project.avenue}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--muted-foreground)]">
                    {project.status}
                  </span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight mb-3">
                  {project.title}
                </h2>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--muted-foreground)]">
                <span>{project.year}</span>
                <span>District 3206</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

