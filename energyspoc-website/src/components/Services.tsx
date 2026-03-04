import {
  Sun,
  Battery,
  Cpu,
  Construction,
  Wrench,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Panels",
    description:
      "Monocrystalline and polycrystalline modules from Tier 1 manufacturers. Wattages from 400W to 700W+ for residential, commercial, and utility-scale projects.",
  },
  {
    icon: Cpu,
    title: "Inverters",
    description:
      "String inverters, microinverters, and hybrid inverters from leading brands. Optimized for grid-tie, off-grid, and battery-coupled systems.",
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description:
      "Lithium-ion battery systems for residential and commercial applications. Scalable solutions from 5kWh to multi-MWh deployments.",
  },
  {
    icon: Construction,
    title: "Mounting Systems",
    description:
      "Rooftop, ground-mount, and carport racking solutions. Engineered for durability with aluminium and galvanized steel options.",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description:
      "Dedicated engineering support for system design, product selection, and troubleshooting. We help your team deliver projects with confidence.",
  },
  {
    icon: Truck,
    title: "Logistics & Fulfillment",
    description:
      "Warehousing across key markets with reliable shipping. Bulk orders, drop-shipping, and just-in-time delivery options available.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Solar Solutions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From premium equipment to end-to-end support, we provide everything
            your solar business needs to thrive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
