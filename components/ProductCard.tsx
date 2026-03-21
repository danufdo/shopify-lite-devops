type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white text-gray-900 p-4 rounded-xl shadow">
      <img src={product.image} className="w-full h-40 object-cover mb-3" />
      <h3 className="font-semibold text-gray-900">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <button className="w-full bg-blue-600 text-white py-2 mt-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}