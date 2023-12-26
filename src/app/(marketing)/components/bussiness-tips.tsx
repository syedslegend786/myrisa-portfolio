import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/layout/section-layout";
import React from "react";

export function BusinessTips() {
  return (
    <SectionLayout className="mt-20 relative">
      <div className="grid lg:grid-cols-3 gap-20">
        <div className="h-[454px] bg-center bg-no-repeat bg-cover bg-[url('https://www.melyssagriffin.com/wp-content/uploads/2020/08/sop-1536x1536.jpg')]"></div>
        {/* middle section */}
        <div className="">
          <div>
            <h1 className="underline_text_hover cursor-pointer text-[13px] font-brandon tracking-[0.1em] text-brand-pink-800 font-bold">
              BUSINESS TIPS
            </h1>
          </div>
          <div className="mt-3">
            <h1 className="underline_text_hover cursor-pointer font-poynter text-[32px] leading-[1.2] font-semibold text-brand-black-500">
              5 Steps to Hiring Your First Virtual Assistant
            </h1>
          </div>

          <div className="mt-20">
            <p className="font-sentinel text-[17px] leading-[1.7]">
              If you have paying clients who love what you have to offer, an
              exhaustive list of tasks to complete each day, and the desire to
              have someone support you in your business – then it’s probably
              time to hire your first Virtual
            </p>
            <Button className="bg-transparent">READ THE POST</Button>
          </div>
        </div>
        {/* tips */}
        <div className="space-y-5">
          <div>
            <div>
              <h1 className="underline_text_hover cursor-pointer text-[13px] font-brandon tracking-[0.1em] text-brand-pink-800 font-bold">
                BUSINESS TIPS
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="underline_text_hover cursor-pointer font-poynter text-[20px] leading-[1.2] text-brand-black-500">
                3 Ways To Set Goals That Actually Work
              </h1>
            </div>
            <div className="mt-8 bg-brand-black-500 h-[1px]" />
          </div>
          <div>
            <div>
              <h1 className="underline_text_hover cursor-pointer text-[13px] font-brandon tracking-[0.1em] text-brand-pink-800 font-bold">
                BUSINESS TIPS
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="underline_text_hover cursor-pointer font-poynter text-[20px] leading-[1.2] text-brand-black-500">
                3 Ways To Set Goals That Actually Work
              </h1>
            </div>
            <div className="mt-8 bg-brand-black-500 h-[1px]" />
          </div>
          <div>
            <div>
              <h1 className="underline_text_hover cursor-pointer text-[13px] font-brandon tracking-[0.1em] text-brand-pink-800 font-bold">
                BUSINESS TIPS
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="underline_text_hover cursor-pointer font-poynter text-[20px] leading-[1.2] text-brand-black-500">
                3 Ways To Set Goals That Actually Work
              </h1>
            </div>
            <div className="mt-8 bg-brand-black-500 h-[1px]" />
          </div>
          <Button className="bg-brand-yellow-500 w-full">VIEW ALL POSTS</Button>
        </div>
      </div>
    </SectionLayout>
  );
}
