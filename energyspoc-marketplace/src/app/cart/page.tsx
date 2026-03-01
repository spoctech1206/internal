import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-orange-500" />
          </div>
          <h1 className="text-2xl font-bold text-dark mb-3">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t added any products to your cart yet. Browse
            our extensive catalogue of solar equipment.
          </p>
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Browse Catalogue
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
