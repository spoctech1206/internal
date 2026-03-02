"use client";

import { useEffect, useState } from "react";
import { Search, Mail, Phone, MapPin, Building } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  gstin: string;
  city: string;
  state: string;
  createdAt: string;
  _count: { orders: number };
}

export default function AdminCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/customers")
      .then((r) => r.json())
      .then(setCustomers)
      .finally(() => setLoading(false));
  }, []);

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.companyName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-dark">Customers</h1>
        <p className="text-gray-500 text-sm mt-1">
          View and manage your customer base
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers..."
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
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Customer
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Company
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Contact
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Location
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">GSTIN</th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Orders
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm">
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <span className="font-medium text-dark">
                          {customer.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Building className="w-3.5 h-3.5 text-gray-400" />
                        {customer.companyName || "—"}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          {customer.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          {customer.phone || "—"}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        {customer.city}, {customer.state}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">
                      {customer.gstin || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full text-xs font-medium">
                        {customer._count.orders} orders
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">
                      {new Date(customer.createdAt).toLocaleDateString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No customers found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
