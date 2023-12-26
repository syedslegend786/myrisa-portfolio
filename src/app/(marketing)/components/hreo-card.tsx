import { Button } from "@/components/ui/button";
import React from "react";

export function HeroCard() {
  return (
    <div className="bg-brand-pink-600 px-14 py-14 lg:w-[674px]">
      <div className="space-y-2">
        <div className="lg:flex lg:items-center lg:gap-5 lg:space-y-0 space-y-3">
          <p className="leading-[1.2] font-poynter font-bold hover:opacity-50 transition  text-[rgba(255,255,255,1)] text-[40px]">
            Take the Quiz!
          </p>
          <p className="leading-[1.2] font-poynter hover:opacity-50 transition font-bold text-brand-black-500 text-[40px]">
            Discover Your
          </p>
        </div>
        <p className="leading-[1.2] font-poynter hover:opacity-50 transition font-bold text-brand-black-500 text-[40px]">
          Money Magnetism Archetype
        </p>
      </div>
      <div className="bg-brand-black-500 h-[1px] opacity-50 my-5" />
      <p className="font-sentinel text-[18px] leading-[1.6]">
        {`What’s stopping you from making more money, reaching your goals, and
        bringing your big dreams to life? It’s probably your relationship with
        money. Answer a few key questions and you’ll get instant access to a
        customized path to step into more abundance and ease.`}
      </p>
      <Button className="mt-5 w-max">
        CLICK HERE TO TAKE QUIZ
      </Button>
    </div>
  );
}
