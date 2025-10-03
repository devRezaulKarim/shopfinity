import { Products } from "@/components/custom/products";
import { Banner } from "@/components/custom/banner";
import { ShopByCategory } from "@/components/custom/shop-by-category";
import { NewArrivals } from "@/components/custom/new-arrivals";

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <NewArrivals />
      <ShopByCategory />
      <Products />
    </div>
  );
}
