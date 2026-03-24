import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CartGrid from "../../components/CartGrid";

export default function CartPage() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />
      <CartGrid />
      <Footer />
    </main>
  );
}