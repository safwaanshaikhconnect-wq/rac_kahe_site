import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { StatsStrip } from "@/components/home/StatsStrip";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { HistoryPreview } from "@/components/home/HistoryPreview";
import { TeamPreview } from "@/components/home/TeamPreview";
import { PhotoMarquee } from "@/components/home/PhotoMarquee";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <StatsStrip />
      <ProjectsPreview />
      <HistoryPreview />
      <TeamPreview />
      <PhotoMarquee />
      <ContactCTA />
    </>
  );
}
