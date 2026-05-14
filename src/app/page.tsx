import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MusicSection } from "@/components/sections/music-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
  return (
    <main id="main" className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <MusicSection />
      <ExperienceSection />
      <ContactSection />
      <footer className="border-t border-parchment/5 py-10 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-silver-dim">
        Next.js · Tailwind · Framer Motion · Spotify Web API
      </footer>
    </main>
  );
}
