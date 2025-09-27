import { Route } from "@/types/custom-types";

export const home: Route = { label: "Home", href: "/" };
export const products: Route = { label: "Products", href: "/products" };
export const about: Route = { label: "About", href: "/about" };
export const faq: Route = { label: "FAQ", href: "/faq" };

export const publicRoutes: Route[] = [home, products, about, faq];

export const banners = [
  {
    id: 1,
    src: "/assets/banner/banner-1.png",
  },
  {
    id: 2,
    src: "/assets/banner/banner-2.jpg",
  },
  {
    id: 3,
    src: "/assets/banner/banner-3.jpg",
  },
  {
    id: 4,
    src: "/assets/banner/banner-4.jpg",
  },
  {
    id: 5,
    src: "/assets/banner/banner-5.jpg",
  },
];
