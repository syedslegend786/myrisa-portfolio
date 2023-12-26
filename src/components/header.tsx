"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type TLink = {
  title: string;
  href: string;
};
const links: TLink[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/",
  },
  {
    title: "PODCAST",
    href: "/",
  },
  {
    title: "ONLINE COURSES",
    href: "/",
  },
  {
    title: "MASTER MIND",
    href: "/",
  },
  {
    title: "SUCCESS STORIES",
    href: "/",
  },
  {
    title: "CONTACT",
    href: "/",
  },
];
export function Header() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={() => {
          setisOpen(false);
        }}
      >
        <SheetContent className="bg-brand-pink-200">
          <div className="relative w-full h-full">
            <svg
              className="absolute -inset-x-20 md:-top-[510px] -top-[250px] fill-brand-pink-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 257.9 256.5"
            >
              <path d="M98.7 227.5c6.5 8 15.1 14.1 23.6 19.8 20 13.6 47 10.1 69.7 2 16.2-5.7 32.2-13.9 43-27.2 11.3-13.9 16-32 20.3-49.4 1.3-5.4 2.7-11 2.4-16.5-.3-6.5-1.2-18.5-11.5-27.3-26-22-3-65-32-84.8-14.7-10.1-29.1-13.2-47-13.2-31 0-34.2-12.2-45.3-21.2C112.3 2 95.8.3 81.9 0 68.3-.3 26.3 20.2 22.3 59c-4 39-33 48-18 85 21 47 54 34 94.4 83.5z"></path>
            </svg>
            <div className="mt-20">
              <Link href={"/"}>
                <div className="relative">
                  <div className="relative z-[2] flex items-center gap-3">
                    <h1 className="font-poynter font-bold text-5xl ml-6">M</h1>
                    <h1 className="font-brandon text-base font-bold tracking-widest">
                      MELYSSA GRIFFIN
                    </h1>
                  </div>
                  <svg
                    className="w-14 h-14 fill-brand-yellow-500 absolute top-0 z-[1]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 85.78 85.15"
                  >
                    <g data-name="Layer 2">
                      <path
                        className=""
                        d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z"
                        data-name="Layer 1"
                      ></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <div className="flex flex-col relative gap-5 mt-10 ml-10">
                {links.map((link, index) => (
                  <Link href={link.href} key={index}>
                    <span className="text-xl font-bold tracking-wider font-cervo text-[rgba(0,0,0,1)]">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="px-6 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <div className="relative">
            <div className="relative z-[2] flex items-center gap-3">
              <h1 className="font-poynter font-bold text-5xl ml-6">M</h1>
              <h1 className="font-brandon text-base font-bold tracking-widest">
                MELYSSA GRIFFIN
              </h1>
            </div>
            <svg
              className="w-14 h-14 fill-brand-pink-500 absolute top-0 z-[1]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 85.78 85.15"
            >
              <g data-name="Layer 2">
                <path
                  className="text-brand-pink-500"
                  d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z"
                  data-name="Layer 1"
                ></path>
              </g>
            </svg>
          </div>
        </Link>
        <div className="lg:flex hidden items-center gap-5 ">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <span className="text-[15px] tracking-wider font-cervo text-[rgba(0,0,0,1)]">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
        <svg
          onClick={() => {
            setisOpen(true);
          }}
          role="button"
          className="block lg:hidden w-10 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M0 144h512v32H0zM0 240h512v32H0zM0 336h512v32H0z"></path>
        </svg>
      </div>
    </>
  );
}
