"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Package,
  UserCheck,
  Users,
  ShoppingBag,
  IndianRupee,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

interface DashboardData {
  stats: {
    products: number;
    vendors: number;
    customers: number;
    orders: number;
    totalRevenue: number;
    pendingOrders: number;
    deliveredOrders: number;
  };
  recentOrders: Array<{
    id: string;
    orderNo: string;
    total: number;
    status: string;
    createdAt: string;
    customer: { name: string; companyName: string };
  }>;
  topProducts: Array<{
    id: string;
    name: string;
    brand: string;
    price: number;
    reviews: number;
    rating: number;
  }>;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!data) return null;

  const { stats, recentOrders, topProducts } = data;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          Welcome to EnergySpoc Admin Panel
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <p className="text-2xl font-bold text-dark mt-1">
                {stats.products}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <Link
            href="/admin/products"
            className="text-xs text-orange-500 mt-3 inline-flex items-center gap-1 hover:underline"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Vendors</p>
              <p className="text-2xl font-bold text-dark mt-1">
                {stats.vendors}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <Link
            href="/admin/vendors"
            className="text-xs text-orange-500 mt-3 inline-flex items-center gap-1 hover:underline"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Customers</p>
              <p className="text-2xl font-bold text-dark mt-1">
                {stats.customers}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <Link
            href="/admin/customers"
            className="text-xs text-orange-500 mt-3 inline-flex items-center gap-1 hover:underline"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-dark mt-1">
                &#8377;{(stats.totalRevenue / 100000).toFixed(1)}L
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
              <IndianRupee className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-3 flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span className="text-green-500">+12%</span> from last month
          </div>
        </div>
      </div>

      {/* Order stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-xl font-bold text-dark">{stats.orders}</p>
            <p className="text-xs text-gray-500">Total Orders</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <p className="text-xl font-bold text-dark">
              {stats.pendingOrders}
            </p>
            <p className="text-xs text-gray-500">Pending Orders</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className="text-xl font-bold text-dark">
              {stats.deliveredOrders}
            </p>
            <p className="text-xs text-gray-500">Delivered</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-dark">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-xs text-orange-500 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="px-5 py-3 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-dark">
                    {order.orderNo}
                  </p>
                  <p className="text-xs text-gray-500">
                    {order.customer.companyName || order.customer.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-dark">
                    &#8377;{order.total.toLocaleString("en-IN")}
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${statusColors[order.status] || "bg-gray-100 text-gray-600"}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-dark">Top Products</h2>
            <Link
              href="/admin/products"
              className="text-xs text-orange-500 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="px-5 py-3 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-dark">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500">{product.brand}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-dark">
                    &#8377;{product.price.toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.reviews} reviews
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
