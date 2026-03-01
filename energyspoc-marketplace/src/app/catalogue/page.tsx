"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  SlidersHorizontal,
  Grid3X3,
  List,
  ChevronDown,
  X,
} from "lucide-react";
import { products, categories, brands } from "@/data/products";
import ProductCard from "@/components/ProductCard";

function CatalogueContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "all"
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.reverse();
        break;
    }

    return result;
  }, [selectedCategory, selectedBrands, priceRange, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedBrands([]);
    setPriceRange([0, 100000]);
    setSortBy("featured");
  };

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    selectedBrands.length +
    (priceRange[0] > 0 || priceRange[1] < 100000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-gray-500">
            <a href="/" className="hover:text-orange-500">
              Home
            </a>{" "}
            / <span className="text-dark font-medium">Catalogue</span>
            {selectedCategory !== "all" && (
              <>
                {" "}
                /{" "}
                <span className="text-orange-500 font-medium">
                  {categories.find((c) => c.slug === selectedCategory)?.name}
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-dark">
              {selectedCategory === "all"
                ? "All Products"
                : categories.find((c) => c.slug === selectedCategory)?.name}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {filtered.length} products found
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm hover:border-orange-500 transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="flex items-center gap-1 bg-white border rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-gray-400"}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded ${viewMode === "list" ? "bg-orange-500 text-white" : "text-gray-400"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 text-sm focus:border-orange-500 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={`${showFilters ? "fixed inset-0 z-50 bg-black/50" : "hidden"} lg:block lg:relative lg:bg-transparent lg:z-auto`}
          >
            <div
              className={`${showFilters ? "fixed right-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto z-50" : ""} lg:w-64 lg:static lg:shadow-none lg:p-0`}
            >
              {showFilters && (
                <div className="flex items-center justify-between mb-4 lg:hidden">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              <div className="space-y-6">
                {/* Category filter */}
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-dark mb-3">Category</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "all"}
                        onChange={() => setSelectedCategory("all")}
                        className="accent-orange-500"
                      />
                      <span className="text-sm text-gray-700">
                        All Categories
                      </span>
                    </label>
                    {categories.map((cat) => (
                      <label
                        key={cat.id}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.slug}
                          onChange={() => setSelectedCategory(cat.slug)}
                          className="accent-orange-500"
                        />
                        <span className="text-sm text-gray-700">
                          {cat.name}
                        </span>
                        <span className="text-xs text-gray-400 ml-auto">
                          ({cat.productCount})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand filter */}
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-dark mb-3">Brand</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="accent-orange-500 rounded"
                        />
                        <span className="text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price filter */}
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <h3 className="font-semibold text-dark mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0] || ""}
                        onChange={(e) =>
                          setPriceRange([
                            Number(e.target.value) || 0,
                            priceRange[1],
                          ])
                        }
                        className="w-full px-3 py-2 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1] === 100000 ? "" : priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            Number(e.target.value) || 100000,
                          ])
                        }
                        className="w-full px-3 py-2 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="w-full py-2 text-sm text-orange-500 font-medium border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {filtered.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                    : "space-y-4"
                }
              >
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-2">No products found</p>
                <p className="text-gray-400 text-sm">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CataloguePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
        </div>
      }
    >
      <CatalogueContent />
    </Suspense>
  );
}
