export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white text-gray-900 shadow-sm">
      <div className="text-xl font-bold text-gray-900">ShopLite</div>
      <div className="flex gap-6 text-gray-900">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a href="/product" className="hover:text-blue-600">Products</a>
        <a href="/cart" className="hover:text-blue-600">Cart</a>
        <button className="hover:text-blue-600">Profile</button>
      </div>
    </nav>
  );
}