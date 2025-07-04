"use client";
import Link from "next/link";
import { ShoppingCartIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/app/store/cart-store";
import { Button } from "@/components/ui/button"; 
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [mobileOpen, setMobile] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="bg-white shadow-sm px-6 h-20 flex items-center relative z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <Link href="/">E-commerce</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-gray-600 font-medium text-lg">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/products" className="hover:text-black transition">Products</Link>
          <Link href="/checkout" className="hover:text-black transition">Checkout</Link>
        </div>

        {/* Cart + Mobile Toggle */}
        <div className="relative flex items-center gap-2">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="w-7 h-7 text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Button variant="ghost" className="md:hidden" onClick={() => setMobile((prev) => !prev)}>
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav
        className={`absolute top-20 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col items-start px-6 space-y-4 text-gray-700 font-medium text-lg">
          <Link href="/" className="hover:text-black transition" onClick={() => setMobile(false)}>Home</Link>
          <Link href="/products" className="hover:text-black transition" onClick={() => setMobile(false)}>Products</Link>
          <Link href="/checkout" className="hover:text-black transition" onClick={() => setMobile(false)}>Checkout</Link>
        </div>
      </nav>
    </nav>
  );
};
