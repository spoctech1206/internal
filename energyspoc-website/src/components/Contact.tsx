"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you need a quote, technical guidance, or want to explore a
            distribution partnership, our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Solar Co."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@solarco.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project or requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">sales@energyspoc.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (800) 555-SPOC</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Office</p>
                    <p className="text-gray-600">
                      123 Solar Drive, Austin, TX 78701
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
              <h4 className="font-semibold text-gray-900 mb-2">
                Become a Distribution Partner
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Interested in becoming an authorized EnergySpoc distributor?
                Contact our partnerships team for volume pricing, exclusive
                territories, and marketing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
