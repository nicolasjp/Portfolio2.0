import airbusLogo from "@/assets/images/airbus2.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { color } from "framer-motion";
import { twMerge } from "tailwind-merge";

const experiences = [
  {
    name: "Data Analyst for MAP A320",
    position: "September 2022 - August 2024 @ Airbus Operations",
    text: [
      "Created a Digital Control Room for the MAP A320, enabling real-time monitoring of production data.",
      "Centralized data from various sources into a single platform using Qlik Sense and conducted ETL processes.",
      "Used Skywise for data sourcing and transformations, enabling the creation of comprehensive dashboards in Qlik Sense.",
      "Presented the project to the MAP A320 team, facilitating its adoption for production monitoring.",
      "Collaborated with teams in Hamburg to ensure quality and consistency of data.",
    ],
    avatar: airbusLogo,
    color: "bg-blue-500",
  },
  {
    name: "Developer on production tool",
    position: "August 2021 - August 2022 @ Airbus Defence and Space",
    text: [
      "Developed and maintained a production tool to centralize data from five distinct systems using Python and Visual Planning API.",
      "Connected and extracted data from various tools via APIs and processing the information to create a unified data repository for improved accessibility.",
      "Demonstrated the tool's features to team leaders, highlighting its benefits and fostering its adoption across different teams.",
      "Created a comprehensive user manual detailing the tool's functionalities, facilitating utilization by end-users."
    ] ,
    avatar: airbusLogo,
    color: "bg-blue-400",
  }, 
];

export const WorkSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="My professional journey"
          title="A few of my past experiences" 
          description="I've had the pleasure of working with some amazing people and companies. Check out my experiences below." 
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_05%,black_95%,transparent)] py-4 -my-4">
        <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {experiences.map((experience) => (
                  <Card key={experience.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className={twMerge(experience.color,"size-14 inline-flex rounded-full items-center justify-center flex-shrink-0")}>
                        <Image 
                          src={experience.avatar} 
                          alt={experience.name} 
                          className="" 
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{experience.name}</div>
                        <div className="text-sm text-white/40">{experience.position}</div>
                      </div>
                    </div>
                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {experience.text.map((point, index) => (
                        <li key={`experience-point-${index}`}
                          className="text-black-500/50 font-normal pl-1 text-sm"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                      {/* <p className="mt-4 md:mt-6 text-sm md:text-base">{experience.text}</p> */}
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
