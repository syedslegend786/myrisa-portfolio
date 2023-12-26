import { SectionLayout } from "@/layout/section-layout";
import React from "react";
const data: { text: string; href: string; color: string }[] = [
  {
    text: "BUSINESS",
    href: "/",
    color: "#FEACA0",
  },
  {
    text: "MINDSET",
    href: "/",
    color: "#FFCA49",
  },
  {
    text: "PERSONAL",
    href: "/",
    color: "#EF761D",
  },
  {
    text: "CASE STUDIES",
    href: "/",
    color: "#6B9ABE",
  },
];
export default function TheBlog() {
  return (
    <div className="relative lg:-mt-20">
      <SectionLayout className="bg-brand-white-500 p-10 space-y-7  mx-0">
        <p className="font-signature leading-[1.1] text-[50px] text-center text-brand-black-500">
          dive into
        </p>
        <h1 className="font-poynter leading-[1] text-[70px] text-center text-brand-black-500 font-bold">
          The Blog
        </h1>
        <p className="text-center font-sentinel text-[17px] leading-[1.7] text-brand-black-500 ">
          Where it all began! Hundreds of in-depth articles designed to help you{" "}
          <br />
          {`re-program your limiting beliefs and create a booming, digital
          business. <br /> Guaranteed to make you scream: "I can't believe this
          stuff is free!!"`}
        </p>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-10">
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
          <div className="lg:col-span-1 py-3 col-span-2  border px-4 flex items-center justify-center text-brand-black-500 tracking-[0.05em] text-[13px] text-center font-brandon font-semibold">
            <input
              className="w-full h-full border-none outline-none"
              placeholder="SEARCH"
            />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
