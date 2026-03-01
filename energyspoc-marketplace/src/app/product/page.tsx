"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  ShieldCheck,
  FileCheck,
  ArrowLeft,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

function ProductContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">
            Product Not Found
          </h1>
          <Link
            href="/catalogue"
            className="text-orange-500 hover:text-orange-600"
          >
            Back to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <span>/</span>
            <Link href="/catalogue" className="hover:text-orange-500">
              Catalogue
            </Link>
            <span>/</span>
            <span className="text-dark font-medium truncate">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/catalogue"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-orange-500 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Catalogue
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative bg-gray-100 aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  {product.badge}
                </span>
              )}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-orange-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-orange-50 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 md:p-8">
              <p className="text-orange-500 font-medium text-sm mb-1">
                {product.brand}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-dark">
                  &#8377;{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      &#8377;
                      {product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-0.5 rounded">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>

              <p className="text-xs text-gray-500 mb-6">
                * Prices are exclusive of GST. Final price will include
                applicable GST.
              </p>

              {/* Specs */}
              <div className="mb-6">
                <h3 className="font-semibold text-dark mb-3">
                  Key Specifications
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500">{key}</p>
                      <p className="text-sm font-medium text-dark">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium text-sm min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>

              <button className="w-full py-3 border-2 border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors mb-6">
                Request Bulk Quote
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 text-xs">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 text-xs">
                    Genuine Product
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 text-xs">GST Invoice</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-6">
          <h2 className="text-xl font-bold text-dark mb-4">
            Product Description
          </h2>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <h3 className="font-semibold text-dark mt-6 mb-3">
            Key Features
          </h3>
          <ul className="space-y-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key} className="flex items-center gap-2 text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                <span>
                  {key}: {value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-dark mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
        </div>
      }
    >
      <ProductContent />
    </Suspense>
  );
}
