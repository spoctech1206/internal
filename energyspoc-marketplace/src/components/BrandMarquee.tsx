import { brands } from "@/data/products";

export default function BrandMarquee() {
  return (
    <section className="py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 font-medium mb-8 uppercase tracking-wider">
          Trusted by India&apos;s Leading Solar Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-gray-400 hover:text-orange-500 transition-colors text-lg font-bold"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
