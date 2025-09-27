import PageTitle from "@/components/ui/pageTitle";
import { Products } from "@/components/custom/products";

export default function Home() {
  return (
    <div className="container p-0 pt-4">
      <PageTitle text="Home Page" className="text-secondary text-5xl" />
      <Products />
    </div>
  );
}
