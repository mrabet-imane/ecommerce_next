"use client";

import Stripe from "stripe";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative w-[100%] h-[300px] overflow-hidden rounded-2xl shadow-xl ">
   
      <div className="absolute inset-0">
        {currentProduct.images && currentProduct.images[0] && (
          <Image
            alt={currentProduct.name}
            src={currentProduct.images[0]}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
      </div>

        <Link href={`/products/${currentProduct.id}`} className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
      <div className="text-white">
        
        <h2 className="text-2xl font-bold drop-shadow-md">
          {currentProduct.name}
        </h2>
        {price?.unit_amount && (
          <p className="mt-2 text-lg font-semibold drop-shadow-md">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </div>
      </Link>
    </Card>
  );
};
