import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn("text-2xl font-semibold md:text-3xl lg:text-4xl", className)}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
