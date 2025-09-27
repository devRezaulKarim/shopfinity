import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/logos/shopfinity-2.svg"
        alt="Shopfinity logo"
        width={300}
        height={30}
      />
    </Link>
  );
};
