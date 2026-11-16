import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CLUB, TEAM, type TeamMember } from "@/lib/data";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: `Meet the 23 board members and directors of ${CLUB.name} for Rotary Year 2026–27.`,
};

function groupByDepartment(
  members: TeamMember[]
): Record<string, TeamMember[]> {
  return members.reduce<Record<string, TeamMember[]>>((acc, m) => {
    if (!acc[m.department]) acc[m.department] = [];
    acc[m.department].push(m);
    return acc;
  }, {});
}

const DEPT_ORDER = [
  "Secretariat & Executive",
  "Special Portfolios",
  "District Priority Projects",
  "Avenues of Service",
  "Media & PR",
  "Campus Outreach",
];

export default function TeamPage() {
  const grouped = groupByDepartment(TEAM);
  const orderedDepts = [
    ...DEPT_ORDER.filter((d) => grouped[d]),
    ...Object.keys(grouped).filter((d) => !DEPT_ORDER.includes(d)),
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 lg:px-12 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--muted-foreground)] hover:text-[var(--gold)] mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
              Leadership
            </span>
            <span className="w-8 h-px bg-[var(--border-gold)]" />
            <span className="text-xs uppercase tracking-widest text-[var(--muted-foreground)]">
              Rotary Year {CLUB.rotaryYear}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-6">
            The 2026–27 Board.
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed">
            The 23 rostered officers and avenue directors executing {CLUB.name}&apos;s
            vision across Coimbatore and Rotary District 3206.
          </p>
        </div>

        {/* Departments */}
        <div className="flex flex-col gap-16">
          {orderedDepts.map((dept) => (
            <div key={dept}>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-6">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
                  // {dept}
                </h2>
                <span className="text-[11px] font-mono text-[var(--muted-foreground)]">
                  {grouped[dept].length} Officers
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {grouped[dept].map((member) => (
                  <div
                    key={`${member.name}-${member.role}`}
                    className="p-5 sm:p-6 rounded-[3px] bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-gold)] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] mb-1.5">
                        {member.role}
                      </p>
                      <h3 className="font-display text-lg font-bold text-[var(--foreground)] tracking-tight">
                        {member.name}
                      </h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--muted-foreground)]">
                      <span>{member.tenure}</span>
                      <span>District 3206</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
