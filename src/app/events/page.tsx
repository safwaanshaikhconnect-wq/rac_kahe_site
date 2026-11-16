import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EVENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore Rotaract KAHE's events — from community service drives to leadership summits.",
};

const STATUS_MAP: Record<string, { label: string; className: string }> = {
  done: {
    label: "Completed",
    className: "bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-800",
  },
  active: {
    label: "Upcoming",
    className:
      "bg-indigo-900/60 text-indigo-300 border-indigo-800 hover:bg-indigo-900/60",
  },
  planning: {
    label: "Planning",
    className:
      "bg-violet-900/60 text-violet-300 border-violet-800 hover:bg-violet-900/60",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventsPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-indigo-400 text-xs uppercase tracking-widest font-medium mb-4">
            Events
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Our Initiatives
          </h1>
          <p className="text-white/50 text-lg">
            A snapshot of the projects and events that define Rotaract KAHE's
            Rotary Year 2026–27.
          </p>
        </div>

        {/* Event grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENTS.map((event) => {
            const status = STATUS_MAP[event.status] ?? STATUS_MAP.planning;
            return (
              <div
                key={event.id}
                className="glass-card rounded-xl p-8 flex flex-col gap-4 hover:border-indigo-500/20 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Badge variant="outline" className={status.className}>
                    {status.label}
                  </Badge>
                  <span className="text-white/30 text-xs">{event.avenue}</span>
                </div>

                <h2 className="text-xl font-semibold text-white">
                  {event.title}
                </h2>

                <p className="text-white/50 text-sm leading-relaxed flex-1">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-white/30 text-xs pt-4 border-t border-white/5">
                  <Calendar size={12} />
                  {formatDate(event.date)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

