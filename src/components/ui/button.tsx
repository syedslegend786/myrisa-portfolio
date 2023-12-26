import { cn } from "@/utils/styles";
import Link from "next/link";
import React from "react";
interface ButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children: React.ReactNode;
}
export const Button = ({
  onClick,
  href = "",
  className = "",
  children,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "bg-brand-white-500 py-3 pr-3 pl-6 flex items-center gap-5 font-cervo font-normal md:text-xl text-[15px] w-max whitespace-nowrap justify-between",
        className
      )}
    >
      {children}
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 86 39"
        className="text-brand-black-500 w-20 h-full object-contain"
      >
        <path d="M64.24 16h-2.52l2.47 2.47H17.81v1h46.38l-2.47 2.46h2.52l2.97-2.96L64.24 16z"></path>
      </svg>
    </Link>
  );
};
