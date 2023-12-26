import { cn } from "@/utils/styles";
import React from "react";
interface SideRightSVGProps {
  className?: string;
}
export  function SideRightSVG({ className }: SideRightSVGProps) {
  return (
    <svg
      className={cn("w-[485px] h-[597px]", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 404.9 494.4"
    >
      <path d="M140.1 19.4c129.5-71.5 315.5 71.5 252 162-43 70-15 122-33 185-19.9 69.7-90.5 129.3-193 128-152-2-202.3-179.5-140-235 100-89-20-166 114-240z"></path>
    </svg>
  );
}
