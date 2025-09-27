import React from "react";
import axios from "axios";
import { Product } from "@/components/custom/product";

export const Products = async () => {
  const { data } = await axios("https://dummyjson.com/products");
  const products = data.products;
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
