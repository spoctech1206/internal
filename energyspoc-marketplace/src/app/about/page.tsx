import {
  Sun,
  Target,
  Eye,
  Users,
  TrendingUp,
  Award,
  Globe,
  Lightbulb,
} from "lucide-react";

const stats = [
  { value: "10,000+", label: "Products Listed" },
  { value: "3,000+", label: "Active Dealers" },
  { value: "500+", label: "Verified Brands" },
  { value: "50 GW+", label: "Capacity Supplied" },
];

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description:
      "We continuously improve our platform to make solar procurement smarter and more efficient.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer First",
    description:
      "Every decision we make is guided by the needs of our dealers and EPC partners.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Assurance",
    description:
      "We only list products from verified manufacturers and authorized distributors.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Sustainability",
    description:
      "We're committed to accelerating India's transition to clean, renewable energy.",
  },
];

const team = [
  {
    name: "Naveen Alle",
    role: "Co-Founder & CEO",
    avatar: "NA",
    description:
      "MBA Finance with extensive experience in renewable energy and GHG management.",
  },
  {
    name: "Shiva Kumar",
    role: "Co-Founder & CTO",
    avatar: "SK",
    description:
      "Technology leader with expertise in building scalable B2B platforms.",
  },
  {
    name: "Priya Mehta",
    role: "Head of Operations",
    avatar: "PM",
    description:
      "Operations expert with deep knowledge of solar supply chain management.",
  },
  {
    name: "Arjun Reddy",
    role: "VP - Business Development",
    avatar: "AR",
    description:
      "Solar industry veteran with 15+ years of experience in B2B solar sales.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sun className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              About EnergySpoc
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your <span className="text-orange-500">Single Point of Contact</span>
            <br />
            for All Solar Needs
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            EnergySpoc is India&apos;s most extensive B2B procurement platform for
            solar equipment. We are dedicated to transforming the way India
            harnesses solar energy by making procurement accessible, affordable,
            and hassle-free.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-orange-500">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to solar equipment in India by building the
                most comprehensive and transparent B2B marketplace. We aim to
                empower every solar installer, EPC contractor, and dealer with
                the best products at the best prices, supported by world-class
                service.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the backbone of India&apos;s solar revolution by creating an
                ecosystem where every stakeholder in the solar value chain can
                thrive. We envision a future where sourcing solar equipment is as
                simple as a few clicks, enabling rapid adoption of clean energy
                across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Our <span className="text-orange-500">Values</span>
            </h2>
            <p className="mt-3 text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  EnergySpoc was born from a simple observation — solar
                  procurement in India was fragmented, opaque, and inefficient.
                  Dealers and EPC contractors had to juggle multiple suppliers,
                  negotiate individually, and deal with inconsistent quality.
                </p>
                <p>
                  Founded in Mumbai, we set out to build a platform that brings
                  transparency, convenience, and trust to the solar equipment
                  market. What started as a small marketplace has grown into
                  India&apos;s leading B2B solar procurement platform.
                </p>
                <p>
                  Today, we serve over 3,000 active dealers across India,
                  listing products from 500+ verified brands. Our platform has
                  facilitated the supply of over 50 GW of solar capacity,
                  contributing to India&apos;s clean energy goals.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-dark">
                    33% YoY Growth
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-dark">
                    Award Winning Platform
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=500&fit=crop"
                alt="Solar farm"
                className="rounded-2xl w-full shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-xl p-6 shadow-lg">
                <p className="text-3xl font-bold">Since</p>
                <p className="text-4xl font-bold">2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Meet the <span className="text-orange-500">Team</span>
            </h2>
            <p className="mt-3 text-gray-600">
              The people driving India&apos;s solar revolution
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-dark">{member.name}</h3>
                <p className="text-orange-500 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
