/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/layout/section-layout";
import React, { useEffect, useState } from "react";
const images = [
  "https://static.showit.co/800/EAI4sTYoTTO5vIC83H1lkw/107331/20200701-melgriff-2641.jpg",
  "https://static.showit.co/400/Vp-TfNsPTDKByZDzJpfNqQ/107331/20200701-melgriff-1833.jpg",
  "https://static.showit.co/400/C1iokJR0RfWH_SiiFqjobg/107331/20200701-melgriff-2573.jpg",
  "https://static.showit.co/400/kYHqZWhfR4-BxdU19arxdw/107331/20200630-melgriff-1064.jpg",
];
export function Introduction() {
  const [currentImage, setcurrentImage] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      let n = images.length;
      if (currentImage >= n - 1) {
        setcurrentImage(0);
      } else {
        setcurrentImage(currentImage + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImage]);
  console.log({ currentImage });
  return (
    <div className="relative">
      <svg
        className="absolute z-0 lg:top-24 -top-40 -left-[350px] fill-brand-yellow-700 w-[485px] h-[597px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 261.93 314.24"
      >
        <g data-name="Layer 2">
          <path
            d="M0 314.24c154.44-18.43 294.26-99.39 255.34-216.12-12.33-37-51.1-60-68.56-94.91L185.17 0H0z"
            data-name="Layer 1"
          ></path>
        </g>
      </svg>
      <svg
        className="absolute -top-60 -right-[350px] fill-brand-blue-500 w-[485px] h-[597px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 404.9 494.4"
      >
        <path d="M140.1 19.4c129.5-71.5 315.5 71.5 252 162-43 70-15 122-33 185-19.9 69.7-90.5 129.3-193 128-152-2-202.3-179.5-140-235 100-89-20-166 114-240z"></path>
      </svg>
      <SectionLayout className="relative mt-20">
        <div className="flex flex-col lg:flex-row relative gap-20">
          <div className="lg:h-[616px] lg:w-[417px] h-[300px] w-[70%] mx-auto relative">
            <div
              className="bg-cover bg-center h-[100%]"
              style={{ backgroundImage: `url('${images[currentImage]}')` }}
            ></div>
            <div className="absolute lg:-bottom-20 -bottom-10 lg:-right-20 -right-10  lg:w-[250px] w-[150px] lg:h-[250px] h-[150px] lg:border-[20px] border-[10px] border-brand-pink-200 bg-[url('https://static.showit.co/400/BpDpKW6qSnu_05iD7PQsWw/107331/20200701-melgriff-1959.jpg')] bg-cover bg-center"></div>
          </div>
          <div className="flex-1">
            <h1 className="font-signature text-center font-extralight italic text-[32px] text-brand-black-500 opacity-80">
              hey there!
            </h1>
            <h1 className="font-poynter lg:text-5xl text-[28px] font-bold text-center text-brand-black-500">
              {`I’m Melyssa Griffin`}
            </h1>
            <div className="bg-brand-black-500 h-[1px] opacity-50 my-7 w-28 mx-auto" />
            <p className="leading-[1.6] lg:text-[32px] text-[24px] font-semibold font-poynter text-center  mx-auto tracking-wide">
              I believe that an unstoppable mindset can be your #1 business
              tactic. So, my job is to lead you back to yourself and to help you
              reprogram the limiting beliefs and patterns that are keeping you
              small.
            </p>
            <p className="font-sentinel text-base text-center mx-auto leading-[1.5] mt-7">
              {`Around these parts, I share my best business secrets, as well as
              help you cultivate a life of true freedom, purpose, and fun. I’m
              also big on bear hugs, anything unconventional and creative, and
              teaching people like you how to live an abundant and limitless
              life. Let’s get weird.`}
            </p>
            <Button className="mx-auto mt-7 bg-brand-yellow-500">
              READ THE WHOLE STORY
            </Button>
          </div>
        </div>
        <div className="lg:mt-40 mt-20  flex items-center md:gap-20 flex-col lg:flex-row relative z-[2]">
          <h1 className="font-cervo text-xl whitespace-nowrap">
            {`I’VE BEEN`} <br className="lg:inline-block hidden" /> FEATURED IN...
          </h1>
          <div>
            <img
              src="https://static.showit.co/1200/UTLQiJEwQpSfgOY9hfsBdw/shared/entrepreneur.png"
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
