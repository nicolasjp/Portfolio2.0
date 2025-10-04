"use client";
import { useState } from "react";

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
    name: "Cloud Data Engineer - Product Manager Data",
    position: "May 2025 - November 2025 @ Airbus Atlantic",
    text: [
      "Provisioning and processing data in Azure through Big Data pipelines on Synapse (SQL/PySpark).",
      "Managing a Master Data Management (MDM) system and a data warehouse, including the creation of business views.",
      "Feeding and maintaining the Data Catalog (DataGalaxy) to ensure proper data referencing.",
      "Monitoring data ingestions and MDM flows with Power BI dashboards.",
      "Interface between business teams and ABAP developers, handling requirements, testing, and validation of SAP data extractions (via CHARM and Redmine).",
    ],
    avatar: airbusLogo,
    color: "bg-blue-500",
  },
  {
    name: "Data Engineer / Analyst for MAP A320",
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
    name: "Data Analyst",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === experiences.length - 1 ? 0 : prev + 1
    );
  };

  // Gestion du swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      nextSlide(); // swipe gauche → suivant
    } else if (swipeDistance < -50) {
      prevSlide(); // swipe droite → précédent
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My professional journey"
          title="A few of my past experiences"
          description="I've had the pleasure of working with some amazing people and companies. Check out my experiences below."
        />

        {/* Zone du carousel */}
        <div
          className="relative mt-8 md:-mt-8 lg:mt-20 flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex items-center justify-center relative h-auto sm:h-[590px] lg:h-[380px]">
              {experiences.map((experience, index) => {
                const offset = index - currentIndex;
                let className =
                  "absolute transition-all duration-500 ease-in-out flex justify-center w-full";

                if (offset === 0) {
                  className += " opacity-100 scale-100 z-10";
                } else if (offset === -1 || offset === experiences.length - 1) {
                  className += " opacity-60 scale-95 -translate-x-1/2 z-0";
                } else if (offset === 1 || offset === -(experiences.length - 1)) {
                  className += " opacity-60 scale-95 translate-x-1/2 z-0";
                } else {
                  className += " opacity-0 scale-90 pointer-events-none";
                }

                return (
                  <Card
                    key={experience.name}
                    className={
                      className +
                      " h-[400px] w-[500px] lg:h-[380px] md:h-[380px] md:w-[600px] sm:h-[590px] sm:w-[325px] flex flex-col p-8 justify-center"
                    }
                  >
                    <div className="flex gap-4 items-center sm:mt-4">
                      <div className="size-16 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={experience.avatar}
                          alt={experience.name}
                          width={64}
                          height={64}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{experience.name}</div>
                        <div className="text-sm text-white/40">
                          {experience.position}
                        </div>
                      </div>
                    </div>
                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {experience.text.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className="text-black-500/50 font-normal pl-1 text-sm"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Bullet points */}
          <div className="flex gap-4 mt-8 md:-mt-12 md:mb-4 lg:mt-16 lg:mb-0 z-20 relative">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/40"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="py-16 lg:py-24">
  //     <div className="container">
  //       <SectionHeader 
  //         eyebrow="My professional journey"
  //         title="A few of my past experiences" 
  //         description="I've had the pleasure of working with some amazing people and companies. Check out my experiences below." 
  //       />
  //       <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_05%,black_95%,transparent)] py-4 -my-4">
  //       <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
  //           {[...new Array(2)].fill(0).map((_, index) => (
  //             <Fragment key={index}>
  //               {experiences.map((experience) => (
  //                 <Card key={experience.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
  //                   <div className="flex gap-4 items-center">
  //                     <div className={twMerge(experience.color,"size-14 inline-flex rounded-full items-center justify-center flex-shrink-0")}>
  //                       <Image 
  //                         src={experience.avatar} 
  //                         alt={experience.name} 
  //                         className="" 
  //                       />
  //                     </div>
  //                     <div>
  //                       <div className="font-semibold">{experience.name}</div>
  //                       <div className="text-sm text-white/40">{experience.position}</div>
  //                     </div>
  //                   </div>
  //                   <ul className="my-5 list-disc ml-5 space-y-2">
  //                     {experience.text.map((point, index) => (
  //                       <li key={`experience-point-${index}`}
  //                         className="text-black-500/50 font-normal pl-1 text-sm"
  //                       >
  //                         {point}
  //                       </li>
  //                     ))}
  //                   </ul>
  //                     {/* <p className="mt-4 md:mt-6 text-sm md:text-base">{experience.text}</p> */}
  //                 </Card>
  //               ))}
  //             </Fragment>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};


