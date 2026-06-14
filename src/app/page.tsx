import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ListeningSection } from "@/components/sections/listening-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
  return (
    <main id="main" className="relative">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ListeningSection />
    </main>
  );
}
