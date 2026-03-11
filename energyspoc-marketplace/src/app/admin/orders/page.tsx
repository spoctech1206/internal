"use client";

import { useEffect, useState } from "react";
import { Search, Eye, X } from "lucide-react";

interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  product: { name: string; brand: string };
}

interface Order {
  id: string;
  orderNo: string;
  subtotal: number;
  gst: number;
  total: number;
  status: string;
  notes: string;
  createdAt: string;
  customer: {
    name: string;
    companyName: string;
    email: string;
    phone: string;
    gstin: string;
  };
  items: OrderItem[];
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetch("/api/orders")
      .then((r) => r.json())
      .then(setOrders)
      .finally(() => setLoading(false));
  }, []);

  const filtered = orders.filter((o) => {
    const matchesSearch =
      o.orderNo.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.companyName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-dark">Orders</h1>
        <p className="text-gray-500 text-sm mt-1">Track and manage orders</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by order no. or customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-1">
            {["all", "pending", "confirmed", "shipped", "delivered"].map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    statusFilter === status
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              )
            )}
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
                    Order No
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Customer
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">Items</th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Subtotal
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">GST</th>
                  <th className="px-4 py-3 font-medium text-gray-600">Total</th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 font-medium text-gray-600">Date</th>
                  <th className="px-4 py-3 font-medium text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-dark">
                      {order.orderNo}
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-dark">{order.customer.name}</p>
                        <p className="text-xs text-gray-500">
                          {order.customer.companyName}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {order.items.length} items
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      &#8377;{order.subtotal.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      &#8377;{order.gst.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 font-medium text-dark">
                      &#8377;{order.total.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${statusColors[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">
                      {new Date(order.createdAt).toLocaleDateString("en-IN")}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="p-1.5 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No orders found
              </div>
            )}
          </div>
        )}
      </div>

      {/* Order detail modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between sticky top-0 bg-white rounded-t-2xl">
              <div>
                <h2 className="text-lg font-bold text-dark">
                  Order {selectedOrder.orderNo}
                </h2>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${statusColors[selectedOrder.status]}`}
                >
                  {selectedOrder.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-1 hover:bg-gray-100 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  CUSTOMER DETAILS
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-1 text-sm">
                  <p className="font-medium text-dark">
                    {selectedOrder.customer.name}
                  </p>
                  <p className="text-gray-600">
                    {selectedOrder.customer.companyName}
                  </p>
                  <p className="text-gray-600">
                    {selectedOrder.customer.email} | {selectedOrder.customer.phone}
                  </p>
                  <p className="text-gray-600">
                    GSTIN: {selectedOrder.customer.gstin}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  ORDER ITEMS
                </h3>
                <div className="border rounded-lg divide-y">
                  {selectedOrder.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-medium text-dark">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.product.brand} &middot; Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium">
                        &#8377;
                        {(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>
                    &#8377;
                    {selectedOrder.subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">GST (18%)</span>
                  <span>
                    &#8377;{selectedOrder.gst.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="text-orange-500">
                    &#8377;{selectedOrder.total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
