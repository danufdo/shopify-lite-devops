export default function Filters({ setCategory }: any) {
  return (
    <div className="bg-white text-gray-900 p-4 rounded-xl shadow w-full md:w-60">
      <h3 className="font-bold mb-4 text-gray-900">Filters</h3>
      <button onClick={() => setCategory("All")} className="block mb-2 text-gray-800 hover:text-blue-600">All</button>
      <button onClick={() => setCategory("Electronics")} className="block mb-2 text-gray-800 hover:text-blue-600">Electronics</button>
      <button onClick={() => setCategory("Accessories")} className="block mb-2 text-gray-800 hover:text-blue-600">Accessories</button>
    </div>
  );
}