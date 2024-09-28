'use client';
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "pro", "about"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"> 
        <a href="#home" className={`nav-item ${activeSection === "home" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}>
          Home
        </a>
        <a href="#projects" className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}>
          Projects
        </a>
        <a href="#pro" className={`nav-item ${activeSection === "pro" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}>
          Pro
        </a>
        <a href="#about" className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}>
          About
        </a>
      </nav>
    </div>
  );
};
