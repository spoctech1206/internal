import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { name: "asc" },
  });
  return NextResponse.json(categories);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const category = await prisma.category.create({
    data: {
      name: body.name,
      slug: body.slug,
      icon: body.icon || "Sun",
      description: body.description || "",
      image: body.image || "",
    },
  });
  return NextResponse.json(category, { status: 201 });
}
