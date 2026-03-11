import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400 text-sm font-medium">
              Leading B2B Solar Solutions Provider
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Powering the Future{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              with Solar Energy
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            EnergySpoc supplies premium solar panels, inverters, batteries, and
            mounting systems to installers and distributors. Partner with us to
            deliver clean energy at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-orange-500/50 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-orange-500">500+</p>
              <p className="text-gray-400 text-sm mt-1">B2B Partners</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">50MW+</p>
              <p className="text-gray-400 text-sm mt-1">Capacity Supplied</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">15+</p>
              <p className="text-gray-400 text-sm mt-1">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
