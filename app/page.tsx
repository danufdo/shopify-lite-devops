import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <HeroBanner/>
      <ProductGrid limit={4} />
      <Footer />
    </main>
  );
}