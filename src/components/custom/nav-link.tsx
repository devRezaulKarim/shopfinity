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
        "",
        pathname === href && "text-primary font-semibold",
        className,
      )}
    >
      {label}
    </Link>
  );
};
