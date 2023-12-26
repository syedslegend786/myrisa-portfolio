import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/layout/section-layout";
import React from "react";
import { SideLeftSVG } from "./side-left-svg";
import { SideRightSVG } from "./side-right-svg";
import { PodCastCard } from "./podcast-card";
import { Podcast } from "./utils";
import { PodcastReviews } from "./podcast-reviews";
import Link from "next/link";
const podcastData: Podcast[] = [
  {
    title:
      "How to Embrace Ease & Flow in Your Life with Zakia Haughton (episode 112)",
    href: "/",
    imgUrl:
      "https://www.melyssagriffin.com/wp-content/uploads/2021/07/DSC00591.jpg",
  },
  {
    title: "The Sacred Power of Cacao with Christine Hernandez (episode 111)",
    href: "/",
    imgUrl:
      "https://www.melyssagriffin.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-09-at-7.57.07-PM.png",
  },
  {
    title: "Uplevel Your Life with Hypnosis with Juliet C. Obodo (episode 110)",
    href: "/",
    imgUrl:
      "https://www.melyssagriffin.com/wp-content/uploads/2021/05/IMG_8623-1.jpg",
  },
];
export function PodCasts() {
  return (
    <div className="relative bg-brand-pink-300 mt-20 pb-40">
      <svg
        className="absolute fill-brand-pink-300 -inset-x-40 -top-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2331 175.2"
      >
        <path d="M1302 31.2c-657.5 91.9-1102-173-1302 86l2331 58c-23-134-614-202-1029-144z"></path>
      </svg>
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
      <SectionLayout className="mt-20 relative">
        <h1 className="text-center text-brand-black-500 lg:text-7xl leading-[1.3] text-5xl font-poynter font-bold">
          Limitless Life™
          <br />
          Podcast
        </h1>
        <div className="flex items-baseline justify-center gap-3 mt-5">
          <h1 className="font-sentinel leading-[1.6] text-[18px] font-extralight">
            with
          </h1>
          <h1 className="font-cervo leading-[1.6] text-xl font-medium">
            MELYSSA GRIFFIN
          </h1>
        </div>
        <p className="text-center text-xl leading-[1.6] font-normal mt-5 font-sentinel lg:w-[50%] mx-auto">
          The Top 100 “personal development for entrepreneurs” podcast that
          teaches you how to grow your business by reprogramming the patterns
          and beliefs that keep you stuck.
        </p>
        <Button className="mx-auto mt-5 bg-brand-pink-700">TELL ME MORE</Button>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 mt-14">
          {podcastData.map((item, index) => (
            <PodCastCard podCast={item} key={index} />
          ))}
        </div>
      </SectionLayout>
      <div className="relative">
        <svg
          className="w-[485px] h-[597px] absolute -top-10 -left-[200px] fill-brand-white-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 646.62 872.39"
        >
          <g data-name="Layer 2">
            <path
              d="M22.72 444.1c6.52-27.47 16-54.1 23.31-81.36 10.1-37.5 6.19-73.76-4.58-110.1C33.86 227 22 203.06 12.52 178.19c-10-26.08-15.65-53.27-10.71-81C5.42 76.86 16.65 59.73 31.38 45c20.73-20.74 44-37.31 73.22-43.22C126.31-2.61 147.44 1.65 168 9c44.6 16 74.74 48.91 101 86.37 13.4 19.09 26.05 38.79 41.33 56.44 26.06 30.1 56.34 54.7 93.63 70 31.32 12.86 64.3 19 97.24 25.65 33.45 6.78 67.75 11.92 94.51 36.29 14.89 13.55 23.39 31.31 32.58 48.75 12.47 23.66 16.85 49.14 18.15 75.26.62 12.56-.28 25.19-5.43 37.33-5.55 13.08-7.27 27.42-12.63 40.78-8.87 22.13-19.6 43.1-34.45 61.65-16.66 20.8-33.5 41.69-56.35 56.29-13.73 8.77-27 18.4-42 25-6.32 2.75-11.71 7.3-17.8 10.69-29.94 16.69-61.44 30.58-90.11 49.55s-55.53 40-82.36 61.19c-35.14 27.81-69.88 56.13-105.51 83.3-20 15.23-41.07 29.12-65.9 35.69-9.13 2.42-18.4 4.07-27.9 2.64-27-4.09-34.74-22-34.56-47.25.16-22.74 4.88-45.14 5.64-67.8 1.06-31.46-4.35-62.12-13-92.39-8.9-31.32-23.61-60.32-35-90.64-17.36-46.55-21.62-78.03-6.36-129.69z"
              data-name="Layer 1"
            ></path>
          </g>
        </svg>
        <svg
          className="lg:inline hidden h-[368px] w-[368px] fill-brand-yellow-500 absolute -right-[300px] -top-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85.78 85.15"
        >
          <g data-name="Layer 2">
            <path
              d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z"
              data-name="Layer 1"
            ></path>
          </g>
        </svg>
        <svg
          className="lg:inline hidden w-[156px] h-[156px] fill-brand-pink-700 absolute right-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85.78 85.15"
        >
          <g data-name="Layer 2">
            <path
              d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z"
              data-name="Layer 1"
            ></path>
          </g>
        </svg>
        <SectionLayout className="mt-28">
          <PodcastReviews />
        </SectionLayout>
      </div>
    </div>
  );
}
