import { ProductDetail } from "@/components/product_detail";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  const serializedProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    images: product.images,
    price: price?.unit_amount ?? 0,
    currency: price?.currency ?? "usd",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
      <div className="w-full max-w-5xl">
        <ProductDetail product={serializedProduct} />
      </div>
    </div>
  );
}
