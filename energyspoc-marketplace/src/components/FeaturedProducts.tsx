"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const tabs = [
  { label: "All", value: "all" },
  { label: "Solar Panels", value: "solar-panels" },
  { label: "Inverters", value: "inverters" },
  { label: "Batteries", value: "batteries" },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeTab).slice(0, 8);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Featured <span className="text-orange-500">Products</span>
            </h2>
            <p className="mt-2 text-gray-600">
              Top-selling solar equipment at the best prices
            </p>
          </div>
          <Link
            href="/catalogue"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.value
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
