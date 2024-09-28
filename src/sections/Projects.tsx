import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import GoldenLegendsImg from "@/assets/images/goldenLegends.png";
import GoldenLegendsDocImg from "@/assets/images/goldenLegendsDoc.png";
import TCPImg from "@/assets/images/tcp.png";
import PortfolioImg from "@/assets/images/portfolio.png";
import DailyGreenImg from "@/assets/images/dailyGreen.png";
import KeycloakImg from "@/assets/images/keycloak.png";

import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "University/Personal project",
    year: "2024",
    title: "Ethereum Lottery",
    results: [
      { title: "Decentralised lottery application" },
      { title: "Using Ethereum blockchain" },
      { title: "Solidity, Python, and Ganache" },
    ],
    link: "https://github.com/nicolasjp/EthereumLottery",
    image: darkSaasLandingPage,
  },
  {
    company: "Games on Web competition",
    year: "2023/2024",
    title: "Golden Legends",
    results: [
      { title: "Game developed with 2 friends" },
      { title: "We finished 1st in the competition" },
      { title: "Immerses players in the Olympics" },
      { title: "Babylon.js, Blender and Vue.js" },
    ],
    link: "https://golden-legends.github.io/golden-legends/#/",
    image: GoldenLegendsImg,
  },
  {
    company: "Games on Web competition",
    year: "2023/2024",
    title: "Golden Legends documentation",
    results: [
      { title: "Website following our adventure" },
      { title: "Uncover the secrets of our success" },
      { title: "Docusaurus and Markdown" },
    ],
    link: "https://golden-legends.github.io/golden-legends-docs/",
    image: GoldenLegendsDocImg,
  },
  {
    company: "Tennis Club Pibrac",
    year: "2024",
    title: "TCP Teamwear Studio",
    results: [
      { title: "3D web application" },
      { title: "Teamwear for my tennis club" },
      { title: "Assisting the committee" },
    ],
    link: "https://nicolasjp.github.io/TCP-Teamwear-Studio/",
    image: TCPImg,
  },
  {
    company: "Personal project",
    year: "2024",
    title: "3D Portfolio Website",
    results: [
      { title: "My old portfolio in 3D" },
      { title: "Showcasing my projects and skills" },
      { title: "React, Three.js and Blender" },
    ],
    link: "https://nicolasjp.github.io/Portfolio/",
    image: PortfolioImg,
  },
  {
    company: "University/Personal project",
    year: "2023",
    title: "Keycloak RBAC Website",
    results: [
      { title: "Website prototype with RBAC model" },
      { title: "Grade management system" },
      { title: "Node.js, Keycloak and Docker" },
    ],
    link: "https://github.com/nicolasjp/keycloakProject",
    image: KeycloakImg,
  },
  {
    company: "Games on Web competition",
    year: "2022/2023",
    title: "Daily Green",
    results: [
      { title: "Game developed with 2 friends" },
      { title: "We finished 3rd in the competition" },
      { title: "Educates players about ecology" },
      { title: "Babylon.js and Blender" },
    ],
    link: "https://shannorr.github.io/games-on-web-2023/",
    image: DailyGreenImg,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="Real-world Results" 
          title="All My Projects" 
          description="See how I transformed concepts into reality with my projects from 3D to web development, and even cybersecurity." 
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card 
              key={project.title} 
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}                
                  </ul>
                  <a href={project.link} target='_blank' rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


// {
  //   company: "Acme Corp",
  //   year: "2022",
  //   title: "Dark Saas Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/4k7IdSLxh6w",
  //   image: darkSaasLandingPage,
  // },
  // {
  //   company: "Innovative Co",
  //   year: "2021",
  //   title: "Light Saas Landing Page",
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   link: "https://youtu.be/7hi5zwO75yc",
  //   image: lightSaasLandingPage,
  // },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },