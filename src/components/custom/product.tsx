import { ProductType } from "@/types/custom-types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { FavoriteButton } from "./favorite-button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";

interface ProductProps extends ProductType {
  className?: string;
  badge?: string; // new prop for badge text
}

export const ProductCard = ({
  id,
  title,
  price,
  rating,
  thumbnail,
  badge,
  className,
}: ProductProps) => {
  return (
    <Card className={`overflow-hidden transition hover:shadow-lg ${className}`}>
      {/* Image with Favorite Button */}
      <div className="bg-muted relative">
        <Link
          href={`/product/details/${id}`}
          className="block aspect-square w-full"
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </Link>
        {badge && (
          <Badge className="bg-secondary absolute top-2 left-2 uppercase">
            {badge}
          </Badge>
        )}

        <FavoriteButton id={id} />
      </div>

      {/* Content */}
      <CardHeader>
        <Link href={`/product/details/${id}`}>
          <CardTitle className="line-clamp-1 text-lg">{title}</CardTitle>
        </Link>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <p className="text-primary text-xl font-semibold">
          ${price.toFixed(2)}
        </p>
        <div className="text-muted-foreground flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter>
        <Button className="flex w-full items-center gap-x-2">
          <ShoppingCart /> <span>Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
