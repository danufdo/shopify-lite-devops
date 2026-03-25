"use client";
import { addToCart } from "../services/api";

export default function ProductCard({ product }: any) {
  const handleAddToCart = async () => {
    await addToCart(product.id);
    alert("Added to cart");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <img src={product.image} className="w-full h-40 object-cover mb-3" />
      <h3 className="font-semibold">{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}