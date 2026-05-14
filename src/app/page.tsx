import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PersonalSection } from "@/components/sections/personal-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
  return (
    <main id="main" className="relative">
      <HeroSection />
      <PersonalSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="border-t border-white/8 bg-void/80 py-12 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-silver-dim">
        Next.js · Tailwind · Framer Motion · Spotify Web API
      </footer>
    </main>
  );
}
