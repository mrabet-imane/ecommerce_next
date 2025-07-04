"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {useCartStore} from "@/app/store/cart-store";

interface Props {
  product: {
    id: string;
    name: string;
    description: string | null;
    images: string[];
    price: number;
    currency: string;
  };
}

export const ProductDetail = ({ product }: Props) => {

  const {items,addItem,removeItem}=useCartStore()

  const cartItem=items.find((item)=>item.id===product.id)
  const quantity=cartItem?cartItem.quantity:0
  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.images[0] || null,
      quantity: 1,
    });}
  const onDeleteItem=()=>{
    removeItem(product.id)
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white rounded-xl shadow">
      {/* Image à gauche */}
      <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-gray-100">
        <Image
          alt={product.name}
          src={product.images[0]}
          fill
          className="object-contain"
          priority
        />
      </div>

  
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        {product.description && (
          <p className="text-gray-600 text-md">{product.description}</p>
        )}
        <p className="text-2xl font-semibold text-gray-800">
          ${(product.price / 100).toFixed(2)} {product.currency.toUpperCase()}
        </p>

       
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={onDeleteItem}
            className="w-10 h-10 text-xl"
          >
            –
          </Button>
          <span className="text-lg font-medium w-6 text-center">{quantity}</span>
          <Button
            variant="outline"
            onClick={onAddItem}
            className="w-10 h-10 text-xl"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
