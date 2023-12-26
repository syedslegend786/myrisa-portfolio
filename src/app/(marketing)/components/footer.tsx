import { SectionLayout } from "@/layout/section-layout";
import { cn } from "@/utils/styles";
import Link from "next/link";
import React from "react";
type TLink = { title: string; href: string };
export const footerLink1: TLink[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/",
  },
  {
    title: "OUR VALUES",
    href: "/",
  },
  {
    title: "GIVE BACK",
    href: "/",
  },
  {
    title: "CONTACT",
    href: "/",
  },
  {
    title: "FREE QUIZ",
    href: "/",
  },
];
export const footerLink2: TLink[] = [
  {
    title: "ONLINE COURSES",
    href: "/",
  },
  {
    title: "PODCAST",
    href: "/",
  },
  {
    title: "MASTERMIND",
    href: "/",
  },
  {
    title: "FREE RESOURCES",
    href: "/",
  },
  {
    title: "SUCCESS STORIES",
    href: "/",
  },
  {
    title: "THE BLOG",
    href: "/",
  },
];
const data: { text: string; href: string; color: string }[] = [
  {
    text: "FIND ME ON INSTAGRAM",
    href: "/",
    color: "#FEACA0",
  },
  {
    text: "MY FACEBOOK GROUP",
    href: "/",
    color: "#FFCA49",
  },
  {
    text: "LIMITLESS LIFE PODCAST",
    href: "/",
    color: "#EF761D",
  },
  {
    text: "CASE STUDIES",
    href: "/",
    color: "#6B9ABE",
  },
];

export function Footer() {
  return (
    <div className="pb-20 space-y-5">
      <SectionLayout className="flex lg:flex-row flex-col gap-10 mt-20 ">
        <div className="border-[18px]  border-brand-white-500 lg:w-[240px] lg:aspect-auto aspect-square lg:h-[260px] bg-cover bg-no-repeat bg-center bg-[url('https://static.showit.co/file/c7gXYDRAQSSwLqVbg3IwbQ/107331/ezgif_com-gif-maker_1.gif')]"></div>
        <div className="flex-1 lg:text-start text-center">
          <h1 className="lg:text-[40px] text-[32px] font-bold leading-[1.1] text-brand-black-500 font-poynter">
            {`Hey! I’m Melyssa.`}
          </h1>
          <div className="bg-brand-black-500 h-[1px] my-6" />
          <h1 className="leading-[1.6] text-[18px] font-sentinel ">
            {`I’m a former school teacher turned entrepreneur who believes that
            the best way to grow a thriving business is to heal the leader
            behind the scenes (that’s you!). Together, we’ll reprogram the
            limiting beliefs and patterns that are keeping you stuck so that you
            can create unapologetic success and abundance.`}
          </h1>
        </div>
        <div className="flex gap-10">
          <div>
            {footerLink1.map((item, index) => {
              return (
                <h1
                  role="button"
                  className="leading-[2.4] text-brand-black-500 hover:opacity-60 transition tracking-[0.05em] text-[17px] font-cervo hover:underline hover:underline-offset-2"
                  key={index}
                >
                  {item.title}
                </h1>
              );
            })}
          </div>
          <div>
            {footerLink2.map((item, index) => {
              return (
                <h1
                  role="button"
                  className="leading-[2.4] text-brand-black-500 hover:opacity-60 transition tracking-[0.05em] text-[17px] font-cervo hover:underline hover:underline-offset-2"
                  key={index}
                >
                  {item.title}
                </h1>
              );
            })}
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex py-3 items-center justify-center text-brand-black-500 tracking-[0.05em] text-[13px] text-center font-brandon font-semibold"
              style={{
                backgroundColor: item.color,
              }}
            >
              <h1>{item.text}</h1>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
