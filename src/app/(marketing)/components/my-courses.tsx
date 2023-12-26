import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/layout/section-layout";
import Link from "next/link";
import React from "react";

export function MyCourses() {
  return (
    <div className="relative bg-brand-blue-500 pt-6 pb-28">
      <svg
        className="absolute -top-5 scale-150 -inset-x-5 fill-brand-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2331 175.2"
      >
        <path d="M1302 31.2c-657.5 91.9-1102-173-1302 86l2331 58c-23-134-614-202-1029-144z"></path>
      </svg>
      <SectionLayout className="relative">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 ">
          <div className="lg:mt-32 lg:order-1 order-2">
            <p className="leading-[1.2] text-brand-black-500 lg:text-[48px] text-[30px] font-poynter font-bold text-center">
              My Courses:
            </p>
            <p className="leading-[1.2] text-brand-white-500 lg:text-[48px] text-[30px] font-poynter font-bold text-center mt-3">
              Unapologetic <br className="hidden lg:inline" /> Results for Your
              <br className="hidden lg:inline" /> Business + Mindset
            </p>
            <div className="h-[1px] bg-brand-black-500 my-10" />
            <p className="text-center leading-[1.7] text-xl font-sentinel">
              Over 20,000 digital entrepreneurs from around the world have taken
              my top-rated online courses to step into their next level of
              leadership and cash money. Ready to grow?
            </p>
            <Button className="mx-auto mt-10">LEARN WITH MELYSSA</Button>
          </div>
          <div className="lg:order-2 order-1 mx-auto">
            {/* cards */}
            <div className="">
              <div className="relative lg:w-[340px] lg:h-[410px] w-[230px] h-[270px] border-[20px] border-brand-white-500 bg-cover bg-center bg-no-repeat bg-[url('https://static.showit.co/400/RIC0RhufTcKqj2IJTU7ONw/107331/nana_yaa_ansah.jpg')]">
                <div className="bg-brand-yellow-500 text-base p-3 text-brand-black-500 font-cervo absolute top-10 -right-14">
                  NANA YAA
                </div>
                <div className="lg:inline hidden bg-brand-yellow-500 text-base p-3 text-brand-black-500 font-cervo absolute top-28 -right-14">
                  PINFINITE GROWTH STUDENT
                </div>
              </div>
              <div className="relative lg:-mt-52 -mt-20 lg:ml-52 ml-20 lg:w-[340px] lg:h-[410px] w-[200px] h-[240px] border-[20px] border-brand-white-500 bg-cover bg-center bg-no-repeat bg-[url('https://static.showit.co/800/bG-T7UyGQwqzs9RGJEJ5Zg/107331/emilia_farrace.jpg')]">
                <div className="bg-brand-yellow-500 text-base p-3 text-brand-black-500 font-cervo absolute top-10 -right-14">
                  NANA YAA
                </div>
                <div className="lg:inline hidden bg-brand-yellow-500 text-base p-3 text-brand-black-500 font-cervo absolute top-28 -right-14">
                  PINFINITE GROWTH STUDENT
                </div>
              </div>
            </div>
            <div className="lg:-mt-32 lg:-ml-10 ml-0 -mt-10 relative lg:w-[230px] lg:h-[270px] w-[200px] h-[240px] border-[20px] border-brand-white-500 bg-cover bg-center bg-no-repeat bg-[url('https://static.showit.co/400/CDpStoQnQiufoF2wwA9-og/107331/img_6685_-_anjali_nair_-_a_desi_girl_in_us_1.jpg')]">
              <div className="bg-brand-yellow-500 text-base p-3 text-brand-black-500 font-cervo absolute -right-14 bottom-5">
                NANA YAA
              </div>
              <div className="lg:inline hidden bg-brand-yellow-500 text-base p-3 text-brand-black-500 font-cervo absolute  -right-14 -bottom-10">
                PINFINITE GROWTH STUDENT
              </div>
            </div>
            <div className="h-24 lg:inline-block hidden" />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
