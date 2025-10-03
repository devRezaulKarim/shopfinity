import { categoryIcons, routes } from "@/lib/constants";
import { CategoryType } from "@/types/custom-types";
import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const Category = ({ name, slug }: CategoryType) => {
  const Icon = categoryIcons[slug];
  return (
    <Link
      href={`${routes.products.href}?category=${slug}`}
      className="shrink-0 whitespace-nowrap"
    >
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <Icon />
          </CardTitle>
          <CardDescription>
            <span>{name}</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
