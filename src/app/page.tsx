import { Products } from "@/components/custom/products";
import { Banner } from "@/components/custom/banner";
import { Categories } from "@/components/custom/categories";
import { NewArrivals } from "@/components/custom/new-arrivals";

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <NewArrivals />
      <Categories />
      <Products />
    </div>
  );
}
