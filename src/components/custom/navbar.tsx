import React from "react";
import { Logo } from "./logo";
import { publicRoutes, routes } from "@/lib/constants";
import { NavLink } from "./nav-link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Heart,
  MapPin,
  PhoneIcon,
  SearchIcon,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="bg-primary/10 border-b">
        <div className="container flex items-center justify-between p-4">
          <Logo />
          <div className="flex grow items-center justify-center gap-x-4">
            <div className="relative flex w-full max-w-50 items-stretch overflow-hidden md:max-w-60 lg:max-w-80">
              <Input
                className="grow rounded-l-full rounded-r-none border-0 px-4 focus:outline-0 focus-visible:shadow-none focus-visible:ring-0"
                placeholder="Search for products"
              />
              <Button
                variant="default"
                size="icon"
                className="shrink-0 rounded-l-none rounded-r-full px-4"
              >
                <SearchIcon />
              </Button>
            </div>
            <div className="text-primary flex h-full items-center gap-x-2 rounded-full bg-white px-4 py-2 font-semibold">
              <MapPin size={20} />
              <span>Dhaka</span>
            </div>
          </div>
          <nav className="flex items-center gap-x-4">
            <Link href={routes.favorite.href}>
              <Heart />
            </Link>
            <Link href={routes.cart.href}>
              <ShoppingCart />
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-b">
        <div className="container flex items-center justify-between px-4">
          <nav className="flex shrink-0 items-center gap-x-6 py-2">
            {publicRoutes.map((route) => (
              <NavLink key={route.label} {...route} />
            ))}
          </nav>
          <div className="bg-primary flex items-center gap-x-2 px-4 py-2 font-semibold text-white">
            <PhoneIcon size={20} />
            <a href="tel:+123456789">+1 234 56789</a>
          </div>
        </div>
      </div>
    </>
  );
};
