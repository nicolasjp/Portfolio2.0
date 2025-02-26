'use client';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
//import bookImage from "@/assets/images/book-cover.png";
import bookImage from "@/assets/images/book.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import OracleIcon from "@/assets/icons/oracle.svg";
import BlenderIcon from "@/assets/icons/blender.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import HadoopIcon from "@/assets/icons/hadoop.svg";
import JavaIcon from "@/assets/icons/java.svg";
import KeycloakIcon from "@/assets/icons/keycloak.svg";
import MongoDB from "@/assets/icons/leaf.svg";
import Python from "@/assets/icons/python.svg";
import RBACIcon from "@/assets/icons/rbac.svg";
import SQLIcon from "@/assets/icons/serveur-sql.svg";
import ShellIcon from "@/assets/icons/shell.svg";
import Neo4jIcon from "@/assets/icons/neo4j.svg";
import QlikIcon from "@/assets/icons/qlik.svg";
import ManagementIcon from "@/assets/icons/management.svg";
import GitIcon from "@/assets/icons/git.svg";
import BabylonIcon from "@/assets/icons/babylon.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";

//import mapImage from "@/assets/images/map.png";
import mapImage from "@/assets/images/toulouse.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems"; 
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'Oracle',
    iconType: OracleIcon,
  },
  {
    title: 'SQL',
    iconType: SQLIcon,
  },
  {
    title: 'MongoDB',
    iconType: MongoDB,
  },
  {
    title: 'Neo4j',
    iconType: Neo4jIcon,
  },
  {
    title: 'Hadoop',
    iconType: HadoopIcon,
  },
  {
    title: 'Qlik',
    iconType: QlikIcon,
  },

  {
    title: 'Keycloak',
    iconType: KeycloakIcon,
  },
  {
    title: 'RBAC',
    iconType: RBACIcon,
  },
  {
    title: 'Python',
    iconType: Python,
  },
  {
    title: 'Shell',
    iconType: ShellIcon,
  },
  {
    title: 'Java',
    iconType: JavaIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'Node.js',
    iconType: NodejsIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Docker',
    iconType: DockerIcon,
  },
  {
    title: 'Babylon.js',
    iconType: BabylonIcon,
  },  
  {
    title: 'Blender',
    iconType: BlenderIcon,
  },
  {
    title: 'Git',
    iconType: GitIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Figma',
    iconType: FigmaIcon,
  },
  {
    title: 'Management',
    iconType: ManagementIcon,
  },  
]

const hobbies = [
  {
    title: 'Tennis',
    emoji: '🎾',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Running',
    emoji: '🏃‍♂️',
    left: '40%',
    top: '5%',
  },
  {
    title: 'Piano',
    emoji: '🎹',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '65%',
    top: '42%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
  {
    title: 'Travel',
    emoji: '✈️',
    left: '77%',
    top: '73%',
  },
  {
    title: 'Skiing',
    emoji: '⛷️',
    left: '75%',
    top: '-10%',
  },
  {
    title: 'Stock market',
    emoji: '📈',
    left: '70%',
    top: '15%',
  }
]

const formations = [
  {
    title: 'Master MIAGE parcours IDP @ Université Toulouse III - Paul Sabatier (2022-2024)',
    emoji: '🧑‍💻',
    left: '5%',
    top: '-10%',
  },
  {
    title: 'Licence MIASHS parcours MIAGE @ Université Toulouse III - Paul Sabatier (2019-2022)',
    emoji: '🧑‍💻',
    left: '5%',
    top: '25%',
  },
  {
    title: 'Brevet d\'Initiation à l\'Aéronautique (BIA) - (2015-2016)',
    emoji: '✈️',
    left: '5%',
    top: '60%',
  },
]

const certifications = [
  {
    title: '<strong>AWS Certified Solutions Architect (Associate) @ AWS Training and Certification (3 January 2025)</strong>',
    emoji: '🌐',
    left: '5%',
    top: '-10%',
  },
  {
    title: 'AWS Certified Cloud Practitioner @ AWS Training and Certification (25 October 2024)',
    emoji: '🌐',
    left: '5%',
    top: '25%',
  },
  {
    title: 'Métiers de l\'ingénieur (Level 2) C2i @ Université Toulouse III - Paul Sabatier (2023-2024)',
    emoji: '🌟',//⭐
    left: '5%',
    top: '60%',
  },
  // {
  //   title: 'Language Assessment (Level C1-2) @ EF Auckland (2023)',
  //   emoji: '🌟',
  //   left: '5%',
  //   top: '60%',
  // },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into My World" 
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader 
                title="My reads" 
                description="Discover the book I'm immersed in right now." 
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="My Toolbox" 
                description="Explore the technologies and tools I use to craft exceptional digital experiences." 
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:40s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:30s]" />
            </Card>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-8"> 
            <Card className="h-[340px] md:h-[400px] lg:h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="Education" 
                description="Have a look at my academic background."
                className="px-6 py-6" 
              />
              <div className="relative flex-1" ref={constraintRef}>
                {formations.map((formation) => (
                  <motion.div key={formation.title} className="inline-flex items-center gap-2 px-2 lg:px-4 rounded-full sm:py-4 md:py-1.5 lg:py-1.5 absolute" 
                    style={{
                      left: formation.left,
                      top: formation.top,
                    }} 
                    
                    dragConstraints={constraintRef}
                  >
                    <span>{formation.emoji}</span>
                    <span className="font-medium text-white/80 overflow-hidden break-words">{formation.title}</span>
                    
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[340px] md:h-[400px] lg:h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="Certifications" 
                description="Check out the certifications I've earned."
                className="px-6 py-6" 
              />
              <div className="relative flex-1" ref={constraintRef}>
                {certifications.map((certification) => (
                  <motion.div key={certification.title} className="inline-flex items-center gap-2 px-2 rounded-full sm:py-4 md:py-1.5 lg:py-1.5 absolute" 
                    style={{
                      left: certification.left,
                      top: certification.top,
                    }} 
                    
                    dragConstraints={constraintRef}
                  >
                    <span>{certification.emoji}</span>
                    <span className="font-medium text-white/80 overflow-hidden break-words" dangerouslySetInnerHTML={{ __html: certification.title }} />
                    
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>




          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8"> 
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="Beyond the Code" 
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6" 
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }} 
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 overflow-hidden whitespace-nowrap">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
