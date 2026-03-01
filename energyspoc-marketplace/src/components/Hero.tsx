import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, IndianRupee } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-dark via-dark-light to-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B00' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-sm font-medium">
                India&apos;s #1 B2B Solar Marketplace
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your <span className="text-orange-500">Single Point</span> of
              Contact for{" "}
              <span className="text-green-400">Solar Equipment</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              The most extensive B2B procurement platform for solar equipment in
              India. Unmatched variety and quality to power your solar projects
              of all sizes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/catalogue"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/25"
              >
                Browse Catalogue
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                Register as Dealer
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-white text-sm font-semibold">500+</p>
                  <p className="text-gray-400 text-xs">Verified Brands</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-white text-sm font-semibold">Pan India</p>
                  <p className="text-gray-400 text-xs">Free Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-white text-sm font-semibold">Best Price</p>
                  <p className="text-gray-400 text-xs">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image / stats card */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Solar panel image placeholder with gradient overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=600&fit=crop"
                  alt="Solar panels installation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-bold text-orange-500">10,000+</p>
                <p className="text-sm text-gray-600">Products Listed</p>
              </div>

              <div className="absolute -right-4 top-1/2 bg-white rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-bold text-green-500">3,000+</p>
                <p className="text-sm text-gray-600">Active Dealers</p>
              </div>

              <div className="absolute left-1/4 -bottom-4 bg-white rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-bold text-orange-500">50 GW+</p>
                <p className="text-sm text-gray-600">Capacity Supplied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
