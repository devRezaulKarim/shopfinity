import React from "react";
import { Logo } from "./logo";
import { publicRoutes } from "@/lib/constants";
import { NavLink } from "./nav-link";

export const Navbar = () => {
  return (
    <div className="container flex items-center justify-between py-4">
      <Logo />
      <nav className="flex items-center gap-x-6">
        {publicRoutes.map((route) => (
          <NavLink key={route.label} {...route} />
        ))}
      </nav>
    </div>
  );
};
