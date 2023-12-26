import { cn } from "@/utils/styles";
import React from "react";

export function SectionLayout({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("mx-10 lg:mx-40", className)}
    >
      {children}
    </div>
  );
}
