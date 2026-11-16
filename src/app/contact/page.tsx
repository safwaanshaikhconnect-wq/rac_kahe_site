import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLUB } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${CLUB.shortName} — reach out to join, collaborate, or learn more.`,
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-indigo-400 text-xs uppercase tracking-widest font-medium mb-4">
            Contact
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-white/50 text-lg">
            Want to collaborate, join the club, or simply say hello? We&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-white mb-6">
              Send a Message
            </h2>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Rtr. Your Name"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how you'd like to get involved..."
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                />
              </div>
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 mt-2 shadow-lg shadow-indigo-900/40"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {/* Location */}
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-900/60 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-white font-medium mb-1">Location</p>
                <p className="text-white/40 text-sm">
                  Karpagam Academy of Higher Education
                  <br />
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-900/60 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <a
                  href={`mailto:${CLUB.socials.email}`}
                  className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
                >
                  {CLUB.socials.email}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="glass-card rounded-xl p-6">
              <p className="text-white font-medium mb-4">Follow Us</p>
              <div className="flex flex-col gap-3">
                <a
                  href={CLUB.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={CLUB.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

