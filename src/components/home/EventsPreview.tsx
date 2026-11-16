"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { EVENTS } from "@/lib/data";

const STATUS_MAP: Record<
  string,
  { label: string; className: string }
> = {
  done: {
    label: "Completed",
    className:
      "bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-800",
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
    month: "short",
    year: "numeric",
  });
}

export function EventsPreview() {
  const previewEvents = EVENTS.slice(0, 3);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-indigo-400 text-xs uppercase tracking-widest font-medium mb-2">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Events &amp; Initiatives
            </h2>
          </div>
          <Link
            href="/events"
            className={buttonVariants({
              variant: "ghost",
              className: "text-white/50 hover:text-white hover:bg-white/5 self-start sm:self-auto",
            })}
          >
            View all events <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewEvents.map((event, i) => {
            const status = STATUS_MAP[event.status] ?? STATUS_MAP.planning;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-500/30 transition-colors group"
              >
                <div className="flex items-start justify-between gap-2">
                  <Badge
                    variant="outline"
                    className={status.className}
                  >
                    {status.label}
                  </Badge>
                  <span className="text-white/30 text-xs">{event.avenue}</span>
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors">
                  {event.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed flex-1">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 text-white/30 text-xs pt-2 border-t border-white/5">
                  <Calendar size={12} />
                  {formatDate(event.date)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

