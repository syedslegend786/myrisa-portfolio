"use client";
import React, { useEffect, useState } from "react";
import { Review } from "./utils";
import { SideLeftSVG } from "./side-left-svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const reviewsData: Review[] = [
  {
    text: `“Loved how raw and heart-centered it was, every few seconds I would nod my head because it resonated so much. Highly recommend if you’re looking for more purpose, passion and well-being in your life!”`,
    signature: "- YunzheZhou",
  },
  {
    text: `“A daily reminder towards greatness... Listening to these podcast episodes are the highlight of my day. It’s my rock and anchor in a chaotic storm of trying to better my life. So so thankful for it!”`,
    signature: "- YunzheZhou",
  },
];
export function PodcastReviews() {
  const [currentSelected, setcurrentSelected] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const n = reviewsData.length;
      if (currentSelected >= n - 1) {
        setcurrentSelected(0);
      } else {
        setcurrentSelected(currentSelected + 1);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSelected]);

  const data = reviewsData[currentSelected];
  return (
    <div className="relative flex lg:flex-row flex-col gap-10">
      <div className="flex-1">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <div className="flex items-center gap-2">
            {[1, 1, 1, 1, 1].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.9 14.2"
                className="fill-brand-yellow-500 h-5 w-5"
              >
                <path d="M14.9 5.4L11.2 9l.8 5.1-4.6-2.4-4.6 2.4.9-5.1L0 5.4l5.1-.8L7.4 0l2.3 4.7 5.2.7z"></path>
              </svg>
            ))}
          </div>
          <h1 className="font-cervo text-2xl leading-[1.8] text-brand-black-500">
            LIMITLESS LIFE™ HAS 700+ 5-STAR REVIEWS!
          </h1>
        </div>
        <div className="mt-10">
          <div className="space-y-10">
            <p className="leading-[1.2] text-[35px] text-brand-black-500 font-poynter">
              {data.text}
            </p>
            <p className="font-signature leading-[1.1] text-brand-black-500 text-[45px]">
              {data.signature}
            </p>
          </div>
        </div>
      </div>
      <div className="relative lg:mt-32 space-y-10">
        <svg
          className="lg:hidden inline h-[368px] w-[368px] fill-brand-yellow-500 absolute -right-[300px] -top-40"
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
          className="lg:hidden inline w-[156px] h-[156px] fill-brand-pink-700 absolute right-20"
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
        <div className="relative space-y-10">
          <h1 className="w-full underline text-brand-black-500 text-[15px] font-cervo tracking-[0.1em] underline-offset-[16px]">
            <Link href={"/"}>LISTEN ON SPOTIFY</Link>
          </h1>
          <h1 className="underline text-brand-black-500 text-[15px] font-cervo tracking-[0.1em] underline-offset-[16px]">
            <Link href={"/"}>LISTEN ON ITUNES</Link>
          </h1>
          <h1 className="underline text-brand-black-500 text-[15px] font-cervo tracking-[0.1em] underline-offset-[16px]">
            <Link href={"/"}>LISTEN ON STITCHERS</Link>
          </h1>
          <Button className="bg-brand-pink-600">THE PODCAST</Button>
        </div>
      </div>
    </div>
  );
}
