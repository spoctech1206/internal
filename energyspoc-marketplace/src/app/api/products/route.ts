import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const search = searchParams.get("search");

  const where: Record<string, unknown> = {};
  if (category && category !== "all") {
    where.category = { slug: category };
  }
  if (brand) {
    where.brand = { in: brand.split(",") };
  }
  if (search) {
    where.OR = [
      { name: { contains: search } },
      { brand: { contains: search } },
      { description: { contains: search } },
    ];
  }

  const products = await prisma.product.findMany({
    where,
    include: { category: true, vendor: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const product = await prisma.product.create({
    data: {
      name: body.name,
      brand: body.brand,
      price: parseFloat(body.price),
      originalPrice: body.originalPrice ? parseFloat(body.originalPrice) : null,
      image: body.image || "",
      description: body.description || "",
      inStock: body.inStock ?? true,
      badge: body.badge || null,
      specs: body.specs || "{}",
      categoryId: body.categoryId,
      vendorId: body.vendorId || null,
      rating: parseFloat(body.rating) || 0,
      reviews: parseInt(body.reviews) || 0,
    },
    include: { category: true, vendor: true },
  });
  return NextResponse.json(product, { status: 201 });
}
