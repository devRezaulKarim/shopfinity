"use client";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const FavoriteButton = ({ id }: { id: number }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Button
      onClick={() => setIsFavorite(!isFavorite)}
      size="icon"
      className={cn(
        "bg-primary/10 hover:bg-primary fil group absolute top-2 right-2 cursor-pointer rounded-full text-gray-600 transition-colors hover:text-white",
      )}
    >
      <Heart
        className={cn(
          "h-5 w-5",
          isFavorite ? "fill-secondary text-secondary" : "",
        )}
      />
    </Button>
  );
};
