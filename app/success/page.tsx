"use client"
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/app/store/cart-store";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className=" flex items-center justify-center h-[425px]">
      <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 max-w-lg w-[100%] text-center space-y-6 h-[250px] flex items-center justify-center flex-wrap">
        <h1 className="text-3xl font-semibold text-green-700 w-[100%]">Payment Successful</h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Thank you for your purchase! Your order has been confirmed and is being processed.  
          We’re excited to get your items to you soon. In the meantime, feel free to browse our latest products — 
          you might find something else you love.
        </p>
        <Link
          href="/products"
         className="inline-block border border-black text-black px-6 py-3 m-4 rounded-md text-base font-medium transition-colors"

        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
