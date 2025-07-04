import Stripe from "stripe";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

interface Props {
  product: Stripe.Product;
}

const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div >
    <Link href={`/products/${product.id}`} className="block">
      <Card  className="relative w-72 transition-all duration-200  hover:shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        {product.images && product.images[0] && (
          <div className="relative w-full h-48 bg-gray-100">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              priority
            />
          </div>
        )}
        <CardHeader className="px-4 pt-4pb-0">
          <CardTitle className="text-base font-medium text-gray-800">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4 pt-2 ">
            {product.description && (
              <p className="text-gray opacity-80 text-sm">
                {product.description.length > 50
                  ? `${product.description.slice(0, 25)}...`
                  : product.description}
              </p>
            )}

          {price?.unit_amount && (
            <p className="text-sm text-gray-600 font-semibold">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
         <button
            className="w-[100%] mx-auto m-4 p-6 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition text-center block"
            >
             View details
          </button>

        </CardContent>
      </Card>
    </Link>
      </div>   
  );
};

export default ProductCard;
