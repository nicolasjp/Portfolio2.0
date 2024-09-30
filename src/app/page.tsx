import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { WorkSection } from "@/sections/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
        <ProjectsSection />
      <div id="experience">
        <WorkSection />
        <TapeSection />
        <TestimonialsSection />
      </div>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
