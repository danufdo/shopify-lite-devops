"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { getProducts } from "../services/api";

export default function ProductGrid({ limit }: { limit?: number }) {
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  let filtered = products;

  if (category !== "All") {
    filtered = products.filter((p) => p.category === category);
  }

  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  return (
    <div className="flex gap-6 px-8 py-12 bg-gray-50">
      <Filters setCategory={setCategory} />

      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}