import React from "react";
import axios from "axios";
import { ProductCard } from "./product";

export const Products = async () => {
  const { data } = await axios("https://dummyjson.com/products");
  const products = data.products;
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
