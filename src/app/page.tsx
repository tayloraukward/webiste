import { ContactSection } from "@/components/sections/contact-section";
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
      <ContactSection />
      <footer className="border-t border-white/8 bg-void/80 py-12 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-silver-dim">
        Next.js · Tailwind · Framer Motion · Spotify Web API
      </footer>
    </main>
  );
}
