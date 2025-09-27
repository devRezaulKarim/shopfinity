import { Route } from "@/types/custom-types";

export const home: Route = { label: "Home", href: "/" };
export const products: Route = { label: "Products", href: "/products" };
export const about: Route = { label: "About", href: "/about" };
export const faq: Route = { label: "FAQ", href: "/faq" };

export const publicRoutes: Route[] = [home, products, about, faq];
