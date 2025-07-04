"use client";

import { useCartStore } from "@/app/store/cart-store";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 h-[500px]">
        <h1 className="text-2xl font-semibold text-gray-600">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-2xl shadow-lg p-6 md:p-8 space-y-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-900">
            Order Summary
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <ul className="space-y-6">
            {items.map((item, key) => (
              <li key={key} className="flex flex-col gap-3 border-b pb-4">
                <div className="flex justify-between items-center text-lg font-medium text-gray-800">
                  <span>{item.name}</span>
                  <span>${(item.price * item.quantity / 100).toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => removeItem(item.id)}
                    className="w-10 h-10 text-xl"
                  >
                    –
                  </Button>
                  <span className="text-lg font-semibold w-6 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                    className="w-10 h-10 text-xl"
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="pt-4 text-right text-xl font-semibold text-gray-900 border-t">
            Total: ${(total / 100).toFixed(2)}
          </div>

          <form action={checkoutAction} className="space-y-4 pt-6">
            <input type="hidden" name="items" value={JSON.stringify(items)} />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full py-3 text-lg"
            >
              Proceed to Payment
            </Button>
            <Button
              type="button"
              onClick={clearCart}
              variant="secondary"
              size="lg"
              className="w-full py-3 text-lg"
            >
              Clear Cart
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
