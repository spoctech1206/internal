"use client";

import { useEffect, useState } from "react";
import { Plus, Search, MapPin, Phone, Mail } from "lucide-react";

interface Vendor {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  gstin: string;
  city: string;
  state: string;
  status: string;
  createdAt: string;
  _count: { products: number };
}

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-gray-100 text-gray-600",
  pending: "bg-yellow-100 text-yellow-700",
};

export default function AdminVendors() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    gstin: "",
    panNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const loadVendors = () => {
    setLoading(true);
    fetch("/api/vendors")
      .then((r) => r.json())
      .then(setVendors)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadVendors();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/vendors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setShowForm(false);
    setForm({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      gstin: "",
      panNumber: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });
    loadVendors();
  };

  const filtered = vendors.filter(
    (v) =>
      v.companyName.toLowerCase().includes(search.toLowerCase()) ||
      v.contactName.toLowerCase().includes(search.toLowerCase()) ||
      v.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">Vendors</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your suppliers and vendors
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Vendor
        </button>
      </div>

      {/* Add vendor form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="font-semibold text-dark mb-4">Add New Vendor</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input
              required
              placeholder="Company Name *"
              value={form.companyName}
              onChange={(e) =>
                setForm({ ...form, companyName: e.target.value })
              }
              className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
            />
            <input
              required
              placeholder="Contact Person *"
              value={form.contactName}
              onChange={(e) =>
                setForm({ ...form, contactName: e.target.value })
              }
              className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
            />
            <input
              required
              placeholder="Phone *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
            />
            <input
              placeholder="GSTIN"
              value={form.gstin}
              onChange={(e) =>
                setForm({ ...form, gstin: e.target.value.toUpperCase() })
              }
              className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none uppercase"
            />
            <input
              placeholder="PAN Number"
              value={form.panNumber}
              onChange={(e) =>
                setForm({ ...form, panNumber: e.target.value.toUpperCase() })
              }
              className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none uppercase"
            />
            <input
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
            />
            <div className="grid grid-cols-3 gap-2">
              <input
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
              />
              <input
                placeholder="State"
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
              />
              <input
                placeholder="Pincode"
                value={form.pincode}
                onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                className="px-4 py-2.5 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2 flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600"
              >
                Add Vendor
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search vendors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filtered.map((vendor) => (
              <div
                key={vendor.id}
                className="border rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-dark">
                      {vendor.companyName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {vendor.contactName}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${statusColors[vendor.status]}`}
                  >
                    {vendor.status}
                  </span>
                </div>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-gray-400" />
                    {vendor.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    {vendor.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {vendor.city}, {vendor.state}
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    GSTIN: {vendor.gstin || "N/A"}
                  </span>
                  <span className="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-medium">
                    {vendor._count.products} products
                  </span>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="md:col-span-3 p-8 text-center text-gray-500">
                No vendors found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
