export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Big Sale - Up to 50% Off
      </h1>
      <p className="mb-6">Discover the best deals today</p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
        Shop Now
      </button>
    </section>
  );
}