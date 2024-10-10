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
      <div id="experience">
        <WorkSection />
        <TapeSection />
        <TestimonialsSection />
      </div>
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
