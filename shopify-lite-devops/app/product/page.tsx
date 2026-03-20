import Navbar from "../../components/Navbar";
import ProductGrid from "../../components/ProductGrid";
import Footer from "../../components/Footer";

export default function ProductPage() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <ProductGrid />
      <Footer />
    </main>
  );
}