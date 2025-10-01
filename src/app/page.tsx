import { Products } from "@/components/custom/products";
import { Banner } from "@/components/custom/banner";

export default function Home() {
  return (
    <div className="container">
      <Banner />
      <Products />
    </div>
  );
}
