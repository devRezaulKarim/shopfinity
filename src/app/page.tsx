import { Products } from "@/components/custom/products";
import { Banner } from "@/components/custom/banner";
import { Categories } from "@/components/custom/categories";

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <Categories />
      <Products />
    </div>
  );
}
