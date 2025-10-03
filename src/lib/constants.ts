import { Route } from "@/types/custom-types";
import {
  Sparkles, // beauty
  FlaskConical, // fragrances
  Sofa, // furniture
  ShoppingBasket, // groceries
  Utensils, // kitchen accessories
  Laptop, // laptops
  Shirt, // mens shirts
  Watch, // mens watches
  Bike, // motorcycle
  Droplets, // skin care
  Smartphone, // smartphones
  Glasses, // sunglasses
  TabletSmartphone, // tablets
  Car, // vehicle
  Briefcase, // womens bags (closest available)
  Gem, // womens jewellery
  Footprints,
  Paintbrush,
  Headset,
  Trophy, // womens shoes
} from "lucide-react";

// 1. Define all routes in a single object (dictionary style)
export const routes = {
  home: { label: "Home", href: "/" },
  products: { label: "Products", href: "/products" },
  faq: { label: "FAQ", href: "/faq" },
  about: { label: "About Us", href: "/about" },
  contact: { label: "Contact Us", href: "/contact" },
  freeDelivery: { label: "Free Delivery", href: "/free-delivery" },
  returnPolicy: { label: "Returns Policy", href: "/return-policy" },
  help: { label: "Help Center", href: "/help-center" },
  account: { label: "My Account", href: "/account" },
  favorite: { label: "Favorite", href: "/favorite" },
  cart: { label: "Cart", href: "/cart" },
};

// 2. Create groups from the base routes
export const topLeftRoutes: Route[] = [
  routes.about,
  routes.freeDelivery,
  routes.returnPolicy,
];

export const topRightRoutes: Route[] = [routes.help, routes.account];

export const publicRoutes: Route[] = [
  routes.home,
  routes.products,
  routes.faq,
  routes.contact,
];

export const banners = [
  {
    id: 1,
    src: "/assets/banner/banner-1.jpg",
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

export const categoryIcons: Record<string, any> = {
  beauty: Sparkles,
  fragrances: FlaskConical,
  furniture: Sofa,
  groceries: ShoppingBasket,
  "home-decoration": Paintbrush,
  "kitchen-accessories": Utensils,
  laptops: Laptop,
  "mens-shirts": Shirt,
  "mens-shoes": Footprints,
  "mens-watches": Watch,
  "mobile-accessories": Headset,
  motorcycle: Bike,
  "skin-care": Droplets,
  smartphones: Smartphone,
  "sports-accessories": Trophy,
  sunglasses: Glasses,
  tablets: TabletSmartphone,
  tops: Shirt,
  vehicle: Car,
  "womens-bags": Briefcase,
  "womens-dresses": Shirt,
  "womens-jewellery": Gem,
  "womens-shoes": Footprints,
  "womens-watches": Watch,
};
