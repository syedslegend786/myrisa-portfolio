import { Button } from "@/components/ui/button";
import React from "react";

export default function WorkWithMe() {
  return (
    <div className="relative lg:h-screen lg:aspect-auto aspect-square bg-cover bg-no-repeat lg:bg-center bg-right bg-[url('https://static.showit.co/1600/uoZnvFv4T1Orzvk6MNUAOw/shared/melyssag-98.jpg')]">
      <div className="w-max text-center space-y-4 absolute lg:top-[16%] lg:left-[10%] lg:-translate-x-0 lg:-translate-y-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="font-signature leading-[1.1] lg:text-[55px] text-[30px] text-brand-white-500 tracking-[0em]">
          {`it's kind of the best!`}
        </p>
        <p className="text-brand-white-500 leading-[1.1] lg:text-[58px] text-[33px] font-poynter font-bold">
          Work With Me
        </p>
        <p className="lg:px-0  px-3   lg:text-[18px] text-sm leading-[1.6] font-sentinel text-brand-white-500">
          Check out my Aligned Abundance Mastermind <br /> program for
          entrepreneurs who are determined to get <br /> to the next level of
          their business and mindset.
        </p>
        <Button className="bg-brand-yellow-500 mx-auto">MY MASTERMIND</Button>
      </div>
    </div>
  );
}
