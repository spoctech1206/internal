"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Users,
  UserCheck,
  ShoppingBag,
  Sun,
  ArrowLeft,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/vendors", label: "Vendors", icon: UserCheck },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark text-white flex-shrink-0 fixed h-full z-40">
        <div className="p-4 border-b border-gray-700">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold">
                Energy<span className="text-orange-500">Spoc</span>
              </span>
              <p className="text-[10px] text-gray-400 -mt-1">Admin Panel</p>
            </div>
          </Link>
        </div>

        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-3 border-t border-gray-700">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Store
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64">
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
}
