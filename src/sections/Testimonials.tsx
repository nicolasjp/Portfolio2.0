"use client";
import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";
// import { SectionHeader } from "./SectionHeader";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Jean-Jacques B.",
    position: "Head of Operations Support @ Airbus Defence and Space",
    text: "His dynamism, curiosity and friendliness enabled Nicolas to integrate quickly into the existing team. He wasn't in an IT department, so he had to show a great deal of autonomy to carry out the mission he was given - a mission he accomplished brilliantly.",
    avatar: memojiAvatar1,
  },
  {
    name: "Jean-Jacques B.",
    position: "Head of Operations Support @ Airbus Defence and Space",
    text: "Nicolas will be remembered for his kindness, his curiosity, his motivation and his responses to all the end-users' requests. He was able to deal effectively and quickly with the various problems encountered. The presentations he made to the various users were much appreciated.",
    avatar: memojiAvatar1,
  },  
  {
    name: "Nicolas B.",
    position: "HO Data Analytics @ Airbus Atlantic",
    text: "During this period, I was particularly impressed by how quickly Nicolas was able to develop his skills across all the technologies and challenges involved in the project. Initially, Nicolas demonstrated remarkable self-learning abilities, quickly mastering new tools and languages, which is an essential asset in the field of data engineering.",
    avatar: memojiAvatar3,
  },
   {
    name: "Nicolas B.",
    position: "HO Data Analytics @ Airbus Atlantic",
    text: "His dynamic and proactive mindset has been a constant driving force. He has never been content to simply follow instructions, but has always sought to understand the 'why' and propose innovative solutions. This approach has been essential to the effective structuring of his business, enabling him to successfully carry out the complex activities entrusted to him.",
    avatar: memojiAvatar3,
  },
  {
    name: "Nicolas B.",
    position: "HO Data Analytics @ Airbus Atlantic",
    text: "Nicolas is a valuable asset, recognised by his peers for his commitment and ability to turn technical challenges into concrete successes. He possesses both the technical rigour of an excellent Data Engineer and the intellectual curiosity that ensures rapid adaptation to future technological developments. I am convinced that Nicolas will be a major asset to any organisation looking for a skilled, autonomous Data Engineer who is able to integrate quickly.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Managers"
          title="What Managers Say About Me"
          description="Don't just take my word for it. See what my managers and colleagues have to say about my work."
        />

        {/* Zone du carousel */}
        <div className="relative mt-8 md:-mt-2 lg:mt-20 flex flex-col items-center">
          <div className="relative w-full max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex items-center justify-center relative h-auto sm:h-[550px] lg:h-[380px]">
              {testimonials.map((testimonial, index) => {
                const offset = index - currentIndex;
                let className =
                  "absolute transition-all duration-500 ease-in-out flex justify-center w-full";

                if (offset === 0) {
                  className += " opacity-100 scale-100 z-10";
                } else if (offset === -1 || offset === testimonials.length - 1) {
                  className += " opacity-60 scale-95 -translate-x-1/2 z-0";
                } else if (offset === 1 || offset === -(testimonials.length - 1)) {
                  className += " opacity-60 scale-95 translate-x-1/2 z-0";
                } else {
                  className += " opacity-0 scale-90 pointer-events-none";
                }

                return (
                  <Card
                    key={testimonial.name}
                    className={
                      className +
                      " h-[400px] w-[500px] lg:h-[380px] md:h-[380px] md:w-[600px] sm:h-[525px] sm:w-[325px] flex flex-col p-8 justify-center"
                    }
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-16 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-base md:text-lg flex-1 overflow-hidden text-ellipsis">
                      {testimonial.text}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Bullet points */}
          <div className="flex gap-4 mt-6 md:-mt-4 md:mb-24 lg:mt-16 lg:mb-4 z-20 relative">
            {testimonials.map((_, index) => (
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
};