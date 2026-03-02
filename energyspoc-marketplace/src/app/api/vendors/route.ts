import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const vendors = await prisma.vendor.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { companyName: "asc" },
  });
  return NextResponse.json(vendors);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const vendor = await prisma.vendor.create({
    data: {
      companyName: body.companyName,
      contactName: body.contactName,
      email: body.email,
      phone: body.phone,
      gstin: body.gstin || "",
      panNumber: body.panNumber || "",
      address: body.address || "",
      city: body.city || "",
      state: body.state || "",
      pincode: body.pincode || "",
      status: body.status || "active",
    },
  });
  return NextResponse.json(vendor, { status: 201 });
}
