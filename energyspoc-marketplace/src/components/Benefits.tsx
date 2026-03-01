import {
  ShieldCheck,
  Truck,
  IndianRupee,
  Headphones,
  FileCheck,
  Repeat,
} from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Verified Products",
    description:
      "All products are sourced directly from authorized dealers and manufacturers. 100% genuine guarantee.",
  },
  {
    icon: <IndianRupee className="w-8 h-8" />,
    title: "Best Price Guarantee",
    description:
      "Competitive wholesale pricing for B2B buyers. Volume discounts available on bulk orders.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Pan India Delivery",
    description:
      "Fast and reliable delivery across India. Free shipping on orders above ₹50,000.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "GST Compliant",
    description:
      "Proper GST invoicing on all orders. Easy input tax credit claim for your business.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Expert Support",
    description:
      "Dedicated account managers and technical support team to help you choose the right products.",
  },
  {
    icon: <Repeat className="w-8 h-8" />,
    title: "Easy Returns",
    description:
      "Hassle-free returns and replacement policy. Quality assurance on every product.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Why Choose <span className="text-orange-500">EnergySpoc</span>?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            India&apos;s most trusted B2B solar equipment marketplace with unmatched
            benefits for dealers and EPC contractors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
