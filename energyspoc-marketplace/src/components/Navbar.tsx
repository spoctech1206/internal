"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Sun,
  Phone,
  ChevronDown,
} from "lucide-react";

const categories = [
  { name: "Solar Panels", href: "/catalogue?category=solar-panels" },
  { name: "Inverters", href: "/catalogue?category=inverters" },
  { name: "Batteries", href: "/catalogue?category=batteries" },
  { name: "Mounting Structures", href: "/catalogue?category=mounting" },
  { name: "Cables & Connectors", href: "/catalogue?category=cables" },
  { name: "Charge Controllers", href: "/catalogue?category=controllers" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              +91 98765 43210
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">support@energyspoc.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">GST Compliant Platform</span>
            <span>|</span>
            <span>Pan India Delivery</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-dark">
                    Energy<span className="text-orange-500">Spoc</span>
                  </span>
                  <p className="text-[10px] text-gray-500 -mt-1 leading-none">
                    Solar Marketplace
                  </p>
                </div>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search solar panels, inverters, batteries..."
                  className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-1.5 rounded-md hover:bg-orange-600 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="hidden sm:flex items-center gap-1.5 text-sm text-gray-700 hover:text-orange-500 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
              <Link
                href="/cart"
                className="relative flex items-center gap-1.5 text-sm text-gray-700 hover:text-orange-500 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">Cart</span>
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  0
                </span>
              </Link>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Category bar */}
        <div className="hidden md:block bg-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-0">
              <div
                className="relative"
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2.5 text-white font-medium text-sm bg-orange-600 hover:bg-orange-700 transition-colors">
                  <Menu className="w-4 h-4" />
                  All Categories
                  <ChevronDown className="w-4 h-4" />
                </button>
                {categoriesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border z-50">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/catalogue"
                className="px-4 py-2.5 text-white text-sm hover:bg-orange-600 transition-colors"
              >
                All Products
              </Link>
              <Link
                href="/about"
                className="px-4 py-2.5 text-white text-sm hover:bg-orange-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2.5 text-white text-sm hover:bg-orange-600 transition-colors"
              >
                Contact
              </Link>
              <div className="ml-auto">
                <Link
                  href="/register"
                  className="px-4 py-2.5 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                  Register as Dealer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2.5 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-sm"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-1">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
              <hr className="my-2" />
              <Link
                href="/catalogue"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <hr className="my-2" />
              <Link
                href="/login"
                className="block px-3 py-2 text-sm text-orange-500 font-medium rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login / Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
