import { cn } from "@/utils/styles";
import React from "react";
interface SideLeftSVGProps {
  className?: string;
}
export function SideLeftSVG({ className }: SideLeftSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 353.8 350.2"
      className={cn("w-[485px] h-[597px]", className)}
    >
      <path d="M134.2 310c8.8 11 20.6 19.4 32.2 27.4 27.3 18.8 64.4 14.4 95.8 3.8 22.3-7.6 44.4-18.4 59.5-36.4 15.8-18.8 22.4-43.3 28.6-66.9 1.9-7.4 3.9-14.9 3.5-22.5-.4-8.8-1.3-25.2-15.5-37.3-35.4-30.3-3.2-88.5-42.7-115.9-20.1-13.9-39.8-18.4-64.4-18.7-42.6-.5-46.8-17.2-61.9-29.5C156 3.2 133.4.6 114.3 0 95.6-.5 37.6 26.7 31.6 79.4c-6.1 53-46 64.8-26 115.4 28.2 64.3 73.7 47.1 128.6 115.2z"></path>
    </svg>
  );
}
