import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CLUB, PRESIDENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Club History & Leadership Heritage",
  description: `The presidential lineage, charter milestones, and leadership history of ${CLUB.name}.`,
};

export default function HistoryPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 lg:px-12 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#history"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--gold)] mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
              Heritage
            </span>
            <span className="w-8 h-px bg-[var(--border-gold)]" />
            <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
              Since 2015
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-6">
            A Legacy of Service Above Self.
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed">
            From our chartering under Rotary District 3206 to the present day, each
            generation of leaders has expanded our community reach, inspired youth
            volunteers, and carried forward the Rotary torch.
          </p>
        </div>

        {/* Presidential Lineage Timeline */}
        <div className="border-t border-[var(--border)]">
          {PRESIDENTS.map((pres) => (
            <div
              key={pres.id}
              className="py-10 border-b border-[var(--border)] grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] font-bold">
                  {pres.year}
                </span>
                {pres.isCurrent && (
                  <span className="ml-3 inline-block text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-[2px] bg-[var(--gold)] text-[var(--background)] font-bold">
                    Current
                  </span>
                )}
              </div>

              <div className="md:col-span-4">
                <h2 className="font-display text-2xl font-bold text-[var(--foreground)] tracking-tight mb-1">
                  {pres.name}
                </h2>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                  {pres.role}
                </p>
              </div>

              <div className="md:col-span-5">
                {pres.theme && (
                  <p className="text-sm font-semibold text-[var(--gold)] tracking-wide mb-2">
                    &ldquo;{pres.theme}&rdquo;
                  </p>
                )}
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {pres.milestone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

