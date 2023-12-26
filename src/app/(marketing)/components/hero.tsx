/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { HeroCard } from "./hreo-card";
import { SectionLayout } from "@/layout/section-layout";

export function Hero() {
  return (
    <div className="relative">
      {/* DESKTOP */}
      <div className="lg:inline-block hidden">
        <div className="absolute right-0 flex items-center justify-end h-[794px] w-[60%] bg-center bg-cover  bg-[url('https://static.showit.co/file/e13q9kvZRmKW9ZONqWhJTg/107331/ezgif_com-optimize_14.gif')] bg-no-repeat"></div>
        <div className="absolute top-20 left-44">
          <div className="h-max relative w-max">
            <div className="absolute bg-brand-yellow-500 h-8 left-0 right-5 bottom-0" />
            <p className="relative text-7xl font-poynter font-bold leading-[1.1]">
              Let’s grow your
              <br />
              business from
              <br />
              the inside out.
            </p>
          </div>
          <div className="mt-20 ml-20">
            <HeroCard />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden inline-block">
        <div className="">
          <HeroCard />
        </div>
        <div className="flex items-center justify-end h-[550px] bg-center bg-cover  bg-[url('https://static.showit.co/file/e13q9kvZRmKW9ZONqWhJTg/107331/ezgif_com-optimize_14.gif')] bg-no-repeat"></div>
        <SectionLayout>
          <div className="flex items-center justify-center py-3">
            <div className="h-max relative w-max">
              <div className="absolute bg-brand-yellow-500 h-5 left-0 right-5 bottom-0" />
              <p className="relative text-4xl font-poynter font-extrabold leading-[1.3]">
                Let’s grow your
                <br />
                business from
                <br />
                the inside out.
              </p>
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
}
