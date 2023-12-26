import { Button } from "@/components/ui/button";
import React from "react";

export function HelpUs() {
  return (
    <div className="h-screen w-full mt-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#C49185] bg-opacity-80 flex flex-col items-center justify-center">
        <div className="space-y-4 px-3">
          <h1 className="text-center text-brand-black-500 text-[21px] font-cervo">
            OUR WHY?
          </h1>
          <h1 className="text-center text-[55px] leading-[1.1] font-poynter font-bold text-brand-white-500">
            You Help Us Create <br className="hidden lg:inline" /> Lasting
            Change
          </h1>
          <p className="text-brand-black-500 text-[18px] font-sentinel text-center">
            To us, “giving back” should be part of every entrepreneur’s job
            description.
            <br className="hidden lg:inline" /> We give a portion of our sales
            to charitable organizations and love hosting{" "}
            <br className="hidden lg:inline" /> fundraisers for our favorite
            philanthropies. To date, we’ve raised and{" "}
            <br className="hidden lg:inline" /> donated almost $200,000 to
            organizations we care about.
          </p>
          <Button className="mx-auto">THE PROJECTS WE'VE SUPPORTED</Button>
        </div>
      </div>
      <video
        autoPlay
        controls={false}
        className="w-full h-full object-cover"
        src="https://static.showit.co/file/52ZWykbpQ5-7snLU5QqGVA/107331/our_impact_in_ghana_for_pencils_of_promise_short2.mp4"
      ></video>
      <svg
        className="fill-brand-pink-200 -inset-x-10 -top-10 scale-150 absolute rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2331 175.2"
      >
        <path d="M1302 31.2c-657.5 91.9-1102-173-1302 86l2331 58c-23-134-614-202-1029-144z"></path>
      </svg>
    </div>
  );
}
