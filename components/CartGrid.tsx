"use client";
import { useCart } from "Context/CartContext";

export default function CartGrid() {
  const { cart } = useCart();

  return (
    <div className="px-8 py-12 bg-gray-50 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((item: any, index: number) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow">
              <img
                src={item.image}
                className="w-full h-40 object-cover mb-3"
              />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-700">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
