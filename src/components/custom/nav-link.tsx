"use client";
import { cn } from "@/lib/utils";
import { Route } from "@/types/custom-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps extends Route {
  className?: string;
}
export const NavLink = ({ label, href, className }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "text-sm sm:text-base",
        pathname === href && "text-primary font-medium",
        className,
      )}
    >
      {label}
    </Link>
  );
};
