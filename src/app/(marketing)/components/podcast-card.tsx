/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Podcast } from "./utils";
import Link from "next/link";

export function PodCastCard({ podCast }: { podCast: Podcast }) {
  return (
    <Link href={podCast.href} title={podCast.title} passHref>
      <div
        className="relative h-[306px] bg-cover bg-center object-cover "
        style={{ backgroundImage: `url('${podCast.imgUrl}')` }}
      >
        <div
          role="button"
          className="absolute right-5 -bottom-5 w-[51px] h-[51px]"
        >
          <svg
            className=" fill-brand-yellow-500 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 85.78 85.15"
          >
            <g data-name="Layer 2">
              <path
                d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z"
                data-name="Layer 1"
              ></path>
            </g>
          </svg>
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M192 128l128 128-128 128"></path>
          </svg>
        </div>
      </div>
      <div className="!mt-8">
        <p className="underline_text_hover leading-[1.3] text-xl font-sentinel">
          <span>{podCast.title}</span>
        </p>
      </div>
    </Link>
  );
}
