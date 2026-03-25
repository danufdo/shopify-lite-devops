"use client";
import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../services/api";

export default function CartGrid() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const data = await getCart();
    setCart(data);
  };

  const handleRemove = async (id: number) => {
    await removeFromCart(id);
    loadCart();
  };

  return (
    <div className="px-8 py-12">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h3>{item.productId}</h3>
              <p>Qty: {item.quantity}</p>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}