import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { CLUB } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

const FOOTER_NAV = [
  { label: "Home", href: "/#hero" },
  { label: "About Us", href: "/about" },
  { label: "Projects & Impact", href: "/projects" },
  { label: "Leadership Heritage", href: "/history" },
  { label: "Board of Directors", href: "/team" },
  { label: "Join & Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Identity (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-8 w-auto">
                <Image
                  src="/assets/district-3206-logo.png"
                  alt="Rotary District 3206"
                  width={90}
                  height={32}
                  className="object-contain brightness-110"
                />
              </div>
              <span className="text-[var(--gold)] text-xs font-mono font-medium tracking-widest uppercase">
                // DISTRICT 3206
              </span>
            </div>

            <p className="font-display font-bold text-xl text-[var(--foreground)] mb-2">
              {CLUB.name}
            </p>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed max-w-sm mb-4">
              A premier campus-based service organization chartered under Rotary International
              District 3206 at {CLUB.location}, dedicated to purpose-driven leadership and community transformation.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--gold)]">
              <span>Rotary Year {CLUB.rotaryYear}</span>
              <span className="text-[var(--border)]">•</span>
              <span>Sponsored by {CLUB.sponsorClub}</span>
            </div>
          </div>

          {/* Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono text-[var(--gold)] uppercase tracking-[0.2em] mb-4">
              NAVIGATION
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--gold)]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Touchpoints (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono text-[var(--gold)] uppercase tracking-[0.2em] mb-4">
              CONNECT
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={CLUB.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs sm:text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors p-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--gold)]/40"
              >
                <span>Instagram</span>
                <span className="text-[11px] text-[var(--gold)]">@rotaract_kahe</span>
              </a>

              <a
                href={CLUB.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs sm:text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors p-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--gold)]/40"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="text-[var(--muted-foreground)]" />
              </a>

              <a
                href={`mailto:${CLUB.socials.email}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-[var(--muted-foreground)] hover:text-[var(--gold)] transition-colors pt-1"
              >
                <Mail size={14} className="text-[var(--gold)] shrink-0" />
                <span className="truncate">{CLUB.socials.email}</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-[var(--border)]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted-foreground)]/80">
          <p>
            &copy; 2026 {CLUB.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>RI District 3206</span>
            <span>•</span>
            <span>Coimbatore, Tamil Nadu</span>
            <span>•</span>
            <span className="text-[var(--gold)]">Rotary Year {CLUB.rotaryYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
