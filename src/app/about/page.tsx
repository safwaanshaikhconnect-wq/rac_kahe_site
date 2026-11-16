import type { Metadata } from "next";
import { CLUB } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about the ${CLUB.name} — our mission, values, and Rotary roots.`,
};

const AVENUES = [
  {
    name: "Club Service",
    description:
      "Strengthening our club's internal culture, fellowship, and administrative excellence.",
  },
  {
    name: "Community Service",
    description:
      "Hands-on projects that address the needs of our local community in Coimbatore.",
  },
  {
    name: "Professional Development",
    description:
      "Workshops, mentoring, and industry interactions that sharpen leadership and career skills.",
  },
  {
    name: "International Service",
    description:
      "Collaborating beyond borders to foster global understanding and humanitarian impact.",
  },
  {
    name: "District Priority Projects",
    description:
      "Flagship initiatives aligned with Rotary District 3206's annual priorities.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero text */}
        <div className="max-w-3xl mb-20">
          <p className="text-indigo-400 text-xs uppercase tracking-widest font-medium mb-4">
            About Us
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Who We Are
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            The <strong className="text-white/80">{CLUB.name}</strong> is a
            youth service organisation affiliated with{" "}
            <strong className="text-white/80">{CLUB.district}</strong>. Founded
            in {CLUB.founded}, we operate under the global Rotaract framework —
            empowering young people to develop leadership skills and conduct
            community service.
          </p>
        </div>

        {/* Mission block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-white/50 leading-relaxed">
              To provide an opportunity for young men and women to enhance the
              knowledge and skills that will assist them in personal development,
              to address the physical and social needs of their communities, and
              to promote better relations between all people worldwide through a
              framework of friendship and service.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Rotary Connection
            </h2>
            <p className="text-white/50 leading-relaxed">
              We are sponsored by a local Rotary club and chartered under{" "}
              <strong className="text-white/60">{CLUB.district}</strong>. Our
              work aligns with Rotary International&apos;s six areas of focus —
              from peacebuilding and disease prevention to economic development
              and environmental sustainability. Rotary Year {CLUB.rotaryYear}.
            </p>
          </div>
        </div>

        {/* Service Avenues */}
        <div>
          <p className="text-indigo-400 text-xs uppercase tracking-widest font-medium mb-4">
            Service Avenues
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">
            Where We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AVENUES.map((avenue) => (
              <div
                key={avenue.name}
                className="glass-card rounded-xl p-6 hover:border-indigo-500/30 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">{avenue.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {avenue.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

