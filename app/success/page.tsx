"use client"
import Link from "next/link";
import {useEffect} from "react"
import { useCartStore } from "@/app/store/cart-store";

export default function SuccessPage() {
    const {clearCart}=useCartStore()
    useEffect(()=>{
        clearCart()
    },[clearCart])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h1>
        <p className="text-gray-700 text-lg mb-6">Thank you for your order. We appreciate your business!</p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
