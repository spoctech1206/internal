import { Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-7 h-7 text-orange-500" />
              <span className="text-lg font-bold">
                Energy<span className="text-orange-500">Spoc</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted B2B partner for premium solar energy equipment.
              Powering projects worldwide since day one.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Solar Panels</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Inverters</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Energy Storage</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Mounting Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-orange-500 transition-colors">Why EnergySpoc</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Technical Support</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Request a Quote</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EnergySpoc. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
