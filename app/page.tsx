import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <ProductGrid limit={4} />
      <Footer />
    </main>
  );
}