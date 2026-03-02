import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const perks = [
  "Access to 500+ verified brands",
  "Exclusive dealer pricing",
  "Priority delivery & support",
  "Supply chain financing",
];

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Ready to Power Up Your
          <br />
          Solar Business?
        </h2>
        <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
          Join India&apos;s fastest-growing B2B solar marketplace. Register as a
          dealer today and get access to the best prices on solar equipment.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {perks.map((perk) => (
            <div
              key={perk}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span className="text-white text-sm">{perk}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Register Now — It&apos;s Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Talk to Sales
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div>
            <p className="text-3xl font-bold text-white">10K+</p>
            <p className="text-orange-200 text-sm">Products</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">3K+</p>
            <p className="text-orange-200 text-sm">Active Dealers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-orange-200 text-sm">Brands</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">50GW+</p>
            <p className="text-orange-200 text-sm">Capacity Supplied</p>
          </div>
        </div>
      </div>
    </section>
  );
}
