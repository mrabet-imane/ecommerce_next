"use client";

import Stripe from "stripe";
import ProductCard from "@/components/product_card";
import { useState } from "react";

interface Props {
  products: Stripe.Product[];
}

const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;
    return nameMatch || descriptionMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center ml-10 ">
      <div className="w-full max-w-7xl wrp">
     
        <div className=" m-6 mb-8 flex justify-center">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className="wdp">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredProducts.map((product, key) => (
            <li key={key} className="w-full max-w-xs">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        </div>
    
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
