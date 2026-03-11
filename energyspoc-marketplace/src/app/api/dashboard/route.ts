import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const [productCount, vendorCount, customerCount, orderCount, orders, recentOrders, topProducts] =
    await Promise.all([
      prisma.product.count(),
      prisma.vendor.count(),
      prisma.customer.count(),
      prisma.order.count(),
      prisma.order.findMany({ select: { total: true, status: true } }),
      prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { customer: true },
      }),
      prisma.product.findMany({
        take: 5,
        orderBy: { reviews: "desc" },
        select: { id: true, name: true, brand: true, price: true, reviews: true, rating: true },
      }),
    ]);

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const deliveredOrders = orders.filter((o) => o.status === "delivered").length;

  return NextResponse.json({
    stats: {
      products: productCount,
      vendors: vendorCount,
      customers: customerCount,
      orders: orderCount,
      totalRevenue,
      pendingOrders,
      deliveredOrders,
    },
    recentOrders,
    topProducts,
  });
}
