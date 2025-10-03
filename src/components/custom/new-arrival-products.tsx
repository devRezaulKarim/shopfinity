import { ProductType, ProductsResponse } from "@/types/custom-types";
import axios from "axios";
import React from "react";
import { ProductCard } from "./product";

export const NewArrivalProducts = async () => {
  const { data } = await axios.get<ProductsResponse>(
    "https://dummyjson.com/products",
  );

  const products: ProductType[] = data.products.slice(0, 12);
  return (
    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} badge="New" />
      ))}
    </div>
  );
};
