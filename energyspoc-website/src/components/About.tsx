import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To accelerate the global transition to solar energy by providing world-class equipment and unmatched B2B service to installers and distributors.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where clean, affordable solar energy is accessible to every community — powered by a reliable supply chain that professionals can count on.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every product we supply meets rigorous international standards. We partner only with Tier 1 manufacturers to ensure lasting performance and reliability.",
  },
  {
    icon: Users,
    title: "Partner-Centric",
    description:
      "We build long-term relationships with our partners, offering dedicated account managers, flexible terms, and technical support at every stage.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
            About EnergySpoc
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Your Trusted Solar Energy Partner
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded with the vision of making solar energy accessible at scale,
            EnergySpoc has grown into a leading B2B supplier serving installers,
            EPCs, and distributors across the globe. We bridge the gap between
            top-tier manufacturers and the professionals who bring solar projects
            to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
