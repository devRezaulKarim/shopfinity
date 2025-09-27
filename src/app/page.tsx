import { Products } from "@/components/custom/products";
import { Banner } from "@/components/custom/banner";

export default function Home() {
  return (
    <div className="container pt-4">
      <Banner />
      <Products />
    </div>
  );
}
