/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/layout/section-layout";
import React from "react";

export function FreeTraining() {
  return (
    <div className="relative bg-brand-pink-200 pt-10 pb-20">
      <SectionLayout>
        <svg
          className="fill-brand-pink-200 scale-150 -inset-x-10 -top-5 absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2331 175.2"
        >
          <path d="M1302 31.2c-657.5 91.9-1102-173-1302 86l2331 58c-23-134-614-202-1029-144z"></path>
        </svg>
        <div className="relative mx-auto w-[129px] h-[120px]">
          <img
            className="w-full h-full object-contain"
            alt=""
            src="https://static.showit.co/file/gZ2nxAZ-RB6-Q5Kvxb8Q3w/107331/like_free_stuff.svg"
          />
        </div>
        <h1 className="font-poynter lg:text-[70px] text-[40px] text-center text-brand-black-500 font-bold leading-[0.95]">
          Take a Free Training
        </h1>
        <p className="text-xl leading-[1.6] text-brand-black-500 font-sentinel text-center font-normal italic opacity-90 mt-10">
          Want to build a business on a budget? I’ve got you covered.
          <br /> Get some of my top trainings for free.
        </p>
        <div className="flex lg:flex-row flex-col gap-10 items-center justify-center mt-10">
          <img
            className="lg:w-[212px] lg:h-[262px] w-[160px] h-[129px] object-contain"
            src="https://static.showit.co/400/YgBwKd1CT0SD-Y2HfqASUw/107331/list.png"
            alt=""
          />
          <div className="space-y-4 ">
            <h1 className="lg:text-start text-center font-cervo text-brand-black-500 text-[14px] tracking-[0.2em] font-bold">
              FREE ONLINE WORKSHOP
            </h1>
            <p className="lg:text-start text-center  text-[35px] leading-[1.1] font-poynter font-semibold">
              The 3 Systems You Need to <br className="hidden lg:inline" />{" "}
              Create a 6-Figure Online Course
            </p>
            <Button className="bg-brand-blue-500 lg:w-max w-full">
              WATCH THE FREE TRAINING
            </Button>
          </div>
        </div>
        <div className="flex  lg:flex-row flex-col-reverse gap-10 items-center justify-center mt-10">
          <div className="space-y-4 ">
            <h1 className="lg:text-start text-center font-cervo text-brand-black-500 text-[14px] tracking-[0.2em] font-bold">
              FREE ONLINE WORKSHOP
            </h1>
            <p className="lg:text-start text-center  text-[35px] leading-[1.1] font-poynter font-semibold">
              Get Your Customized <br className="hidden lg:inline" />{" "}
              List-Building Plan
            </p>
            <Button className="bg-brand-pink-700 lg:w-max w-full">
              WATCH THE FREE TRAINING
            </Button>
          </div>
          <img
            className="lg:w-[212px] lg:h-[262px] w-[160px] h-[129px] object-contain"
            src="https://static.showit.co/400/lZWnp5u8R6CTciY_vJ6M_w/107331/email.png"
            alt=""
          />
        </div>
      </SectionLayout>
    </div>
  );
}
