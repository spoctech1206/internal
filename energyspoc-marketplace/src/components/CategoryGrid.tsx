import Link from "next/link";
import {
  Sun,
  Zap,
  Battery,
  Frame,
  Cable,
  Gauge,
} from "lucide-react";
import { categories } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Battery: <Battery className="w-8 h-8" />,
  Frame: <Frame className="w-8 h-8" />,
  Cable: <Cable className="w-8 h-8" />,
  Gauge: <Gauge className="w-8 h-8" />,
};

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Shop by <span className="text-orange-500">Category</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Browse through our extensive range of solar equipment from India&apos;s
            top manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/catalogue?category=${category.slug}`}
              className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {iconMap[category.icon]}
              </div>
              <h3 className="font-semibold text-dark text-sm mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500">
                {category.productCount}+ Products
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
