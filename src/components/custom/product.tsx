import Image from "next/image";
import React from "react";

export const Product = ({ thumbnail }) => {
  return (
    <div>
      <Image src={thumbnail} alt="Thumbnail" width={300} height={100} />
    </div>
  );
};
