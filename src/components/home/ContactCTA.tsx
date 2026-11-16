import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Award } from "lucide-react";
import { CLUB } from "@/lib/data";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--surface)]/40 overflow-hidden"
      aria-label="Join and Contact Rotaract KAHE"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--gold)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Headline & Action Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--cranberry)]" />
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--gold)] font-medium">
                // GET INVOLVED
              </p>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-[var(--foreground)] tracking-tight leading-[1.05] mb-6">
              BECOME PART OF A LEGACY OF PURPOSE.
            </h2>

            <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed mb-10 max-w-xl">
              Whether you are passionate about community service, looking to sharpen
              executive leadership skills, or ready to connect with changemakers
              across District 3206 — your impact journey begins at Rotaract KAHE.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-[var(--gold)] text-[var(--background)] font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[var(--gold-light)] hover:shadow-lg hover:shadow-[var(--gold)]/20 active:scale-[0.98]"
              >
                <span>Apply for Membership</span>
                <ArrowUpRight size={18} />
              </Link>

              <a
                href={`mailto:${CLUB.socials.email}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-[var(--border)] text-[var(--foreground)] font-medium text-sm tracking-wide transition-all duration-200 hover:bg-[var(--surface-2)] hover:border-white/20 active:scale-[0.98]"
              >
                <Mail size={16} />
                <span>Partner with Us</span>
              </a>
            </div>
          </div>

          {/* Touchpoints & Club Details Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-medium mb-6">
                CLUB TOUCHPOINTS
              </p>

              <div className="space-y-6">
                {/* Meeting Base */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[var(--surface-2)] text-[var(--gold)] shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--foreground)] mb-1">
                      Meeting Base & Campus
                    </h4>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {CLUB.location}
                      <br />
                      Pollachi Main Road, Eachanari, Coimbatore – 641 021
                    </p>
                  </div>
                </div>

                {/* District Charter */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[var(--surface-2)] text-[var(--gold)] shrink-0 mt-0.5">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--foreground)] mb-1">
                      District Affiliation
                    </h4>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      Rotary International District 3206
                      <br />
                      Sponsored by {CLUB.sponsorClub}
                      <br />
                      Club ID: [TODO: Rotary Club ID]
                    </p>
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[var(--surface-2)] text-[var(--gold)] shrink-0 mt-0.5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--foreground)] mb-1">
                      Direct Inquiries
                    </h4>
                    <p className="text-xs text-[var(--muted-foreground)] mb-1">
                      {CLUB.socials.email}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Instagram: {CLUB.socials.instagram ? "@rotaract_kahe" : "[TODO]"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted-foreground)]">
              <span>Rotary Year {CLUB.rotaryYear}</span>
              <span className="text-[var(--gold)] font-medium">Open for Students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

