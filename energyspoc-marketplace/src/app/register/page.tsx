"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Eye, EyeOff, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    companyName: "",
    gstin: "",
    panNumber: "",
    businessType: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    annualTurnover: "",
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      alert(
        "Registration successful! Your account will be verified within 24-48 hours."
      );
    }
  };

  const update = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Sun className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-dark">
              Energy<span className="text-orange-500">Spoc</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-dark mt-6 mb-2">
            Register as Dealer
          </h1>
          <p className="text-gray-600">
            Join India&apos;s leading B2B solar equipment marketplace
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
            >
              {step > 1 ? <CheckCircle className="w-5 h-5" /> : "1"}
            </div>
            <span
              className={`text-sm ${step >= 1 ? "text-dark font-medium" : "text-gray-400"}`}
            >
              Personal Details
            </span>
          </div>
          <div className="w-12 h-px bg-gray-300" />
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
            >
              2
            </div>
            <span
              className={`text-sm ${step >= 2 ? "text-dark font-medium" : "text-gray-400"}`}
            >
              Business Details
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={(e) => update("password", e.target.value)}
                        className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm pr-10"
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Continue to Business Details
                </button>
              </>
            ) : (
              <>
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-4">
                  <p className="text-sm text-orange-700 font-medium">
                    GST Details Required
                  </p>
                  <p className="text-xs text-orange-600 mt-1">
                    Please provide your GST details for compliance and smooth
                    transaction processing. All transactions are GST compliant.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GSTIN *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.gstin}
                      onChange={(e) =>
                        update("gstin", e.target.value.toUpperCase())
                      }
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm uppercase"
                      placeholder="22AAAAA0000A1Z5"
                      maxLength={15}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PAN Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.panNumber}
                      onChange={(e) =>
                        update("panNumber", e.target.value.toUpperCase())
                      }
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm uppercase"
                      placeholder="AAAAA0000A"
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type *
                    </label>
                    <select
                      required
                      value={formData.businessType}
                      onChange={(e) => update("businessType", e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                    >
                      <option value="">Select type</option>
                      <option value="dealer">Dealer / Distributor</option>
                      <option value="epc">EPC Contractor</option>
                      <option value="installer">Solar Installer</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => update("address", e.target.value)}
                    className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                    placeholder="Full business address"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => update("city", e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => update("state", e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => update("pincode", e.target.value)}
                      className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="400001"
                      maxLength={6}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Turnover
                  </label>
                  <select
                    value={formData.annualTurnover}
                    onChange={(e) => update("annualTurnover", e.target.value)}
                    className="w-full px-4 py-2.5 border rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                  >
                    <option value="">Select range</option>
                    <option value="below-50l">Below 50 Lakhs</option>
                    <option value="50l-1cr">50 Lakhs - 1 Crore</option>
                    <option value="1cr-5cr">1 Crore - 5 Crore</option>
                    <option value="5cr-25cr">5 Crore - 25 Crore</option>
                    <option value="above-25cr">Above 25 Crore</option>
                  </select>
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) => update("agreeTerms", e.target.checked)}
                    className="accent-orange-500 mt-1"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-orange-500 hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-orange-500 hover:underline">
                      Privacy Policy
                    </a>
                    . I confirm that the GST and PAN details provided are
                    accurate.
                  </span>
                </label>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Create Account
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-orange-500 font-medium hover:text-orange-600"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
