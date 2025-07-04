import { stripe } from "@/lib/stripe";
import ProductList from "@/components/products_list";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center ">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Browse Our Products
      </h1>

      <div className="w-full max-w-7xl px-4 ">
        <ProductList products={products.data} />
      </div>
    </div>
  );
}
