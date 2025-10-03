import { topLeftRoutes, topRightRoutes } from "@/lib/constants";
import React from "react";
import { NavLink } from "./nav-link";

export const TopBar = () => {
  return (
    <div className="bg-primary">
      <div className="container flex items-center justify-between py-2 text-white">
        <nav className="flex items-center gap-x-4 divide-x-2 divide-white">
          {topLeftRoutes.map((route, index) => (
            <NavLink
              key={route.href}
              {...route}
              className={index !== topLeftRoutes.length - 1 ? "pr-4" : ""}
            />
          ))}
        </nav>
        <nav className="flex items-center gap-x-4 divide-x-2 divide-white">
          {topRightRoutes.map((route, index) => (
            <NavLink
              key={route.href}
              {...route}
              className={index !== topRightRoutes.length - 1 ? "pr-4" : ""}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};
