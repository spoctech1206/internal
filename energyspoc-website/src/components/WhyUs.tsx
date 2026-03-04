import {
  Shield,
  Clock,
  Globe,
  HeadphonesIcon,
  TrendingUp,
  PackageCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Tier 1 Products Only",
    description: "We source exclusively from bankable, top-rated manufacturers.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "In-stock inventory and express shipping for urgent projects.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving 15+ countries with local warehousing and logistics.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account managers and technical experts at your side.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description: "Volume-based pricing and flexible payment terms for partners.",
  },
  {
    icon: PackageCheck,
    title: "Full Warranty",
    description: "Comprehensive product warranties backed by manufacturer support.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose EnergySpoc
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Built for Solar Professionals
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We understand the solar business because we live it. Here is what sets
            us apart from the rest.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <reason.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
