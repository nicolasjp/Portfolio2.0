'use client';
import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("home");

  const handleClick = (section: string) => {
    setActive(section);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"> 
        <a 
          href="#home" 
          onClick={() => handleClick("home")}
          className={`nav-item ${active === "home" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}
        >
          Home
        </a>
        <a 
          href="#projects" 
          onClick={() => handleClick("projects")}
          className={`nav-item ${active === "projects" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}
        >
          Projects
        </a>
        <a 
          href="#about" 
          onClick={() => handleClick("about")}
          className={`nav-item ${active === "about" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}
        >
          About
        </a>
        <a 
          href="#contact" 
          onClick={() => handleClick("contact")}
          className={`nav-item ${active === "contact" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
