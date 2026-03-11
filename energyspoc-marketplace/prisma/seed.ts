import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  await prisma.user.upsert({
    where: { email: "admin@energyspoc.com" },
    update: {},
    create: {
      email: "admin@energyspoc.com",
      password: hashSync("admin123", 10),
      name: "Admin",
      role: "admin",
    },
  });

  // Create categories
  const categoryData = [
    { name: "Solar Panels", slug: "solar-panels", icon: "Sun", description: "Mono & Polycrystalline panels from top brands", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop" },
    { name: "Solar Inverters", slug: "inverters", icon: "Zap", description: "String, Micro & Hybrid inverters", image: "https://images.unsplash.com/photo-1592833159057-6de3df358898?w=400&h=300&fit=crop" },
    { name: "Batteries", slug: "batteries", icon: "Battery", description: "Lithium-ion & Lead-acid storage solutions", image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&h=300&fit=crop" },
    { name: "Mounting Structures", slug: "mounting", icon: "Frame", description: "Rooftop & ground mount systems", image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=400&h=300&fit=crop" },
    { name: "Cables & Connectors", slug: "cables", icon: "Cable", description: "DC cables, MC4 connectors & accessories", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
    { name: "Charge Controllers", slug: "controllers", icon: "Gauge", description: "MPPT & PWM charge controllers", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop" },
  ];

  const categories: Record<string, string> = {};
  for (const cat of categoryData) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat,
    });
    categories[cat.slug] = created.id;
  }

  // Create vendors
  const vendorData = [
    { companyName: "Waaree Energies Ltd", contactName: "Hitesh Doshi", email: "sales@waaree.com", phone: "+91 22 4055 4055", gstin: "24AAACW1234A1Z5", panNumber: "AAACW1234A", address: "Surat, Gujarat", city: "Surat", state: "Gujarat", pincode: "395003", status: "active" },
    { companyName: "Vikram Solar Ltd", contactName: "Gyanesh Chaudhary", email: "info@vikramsolar.com", phone: "+91 33 4603 4603", gstin: "19AABCV5678B1Z3", panNumber: "AABCV5678B", address: "Kolkata, West Bengal", city: "Kolkata", state: "West Bengal", pincode: "700091", status: "active" },
    { companyName: "Tata Power Solar", contactName: "Ashish Khanna", email: "solar@tatapower.com", phone: "+91 22 6665 8282", gstin: "27AAACT9012C1Z7", panNumber: "AAACT9012C", address: "Mumbai, Maharashtra", city: "Mumbai", state: "Maharashtra", pincode: "400001", status: "active" },
    { companyName: "Fronius International", contactName: "Ravi Kumar", email: "india@fronius.com", phone: "+91 80 4905 8300", gstin: "29AABCF3456D1Z2", panNumber: "AABCF3456D", address: "Bangalore, Karnataka", city: "Bangalore", state: "Karnataka", pincode: "560001", status: "active" },
    { companyName: "Luminous Power Tech", contactName: "Rakesh Malhotra", email: "support@luminous.in", phone: "+91 124 472 8900", gstin: "06AABCL7890E1Z8", panNumber: "AABCL7890E", address: "Gurugram, Haryana", city: "Gurugram", state: "Haryana", pincode: "122001", status: "active" },
  ];

  const vendors: Record<string, string> = {};
  for (const v of vendorData) {
    const created = await prisma.vendor.upsert({
      where: { email: v.email },
      update: v,
      create: v,
    });
    vendors[v.companyName] = created.id;
  }

  // Create products
  const productData = [
    { name: "Waaree 545W Mono PERC Solar Panel", brand: "Waaree", categorySlug: "solar-panels", vendorName: "Waaree Energies Ltd", price: 14500, originalPrice: 16800, image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop", rating: 4.8, reviews: 342, badge: "Best Seller", description: "High-efficiency Mono PERC solar panel with excellent low-light performance. Ideal for residential and commercial rooftop installations.", specs: JSON.stringify({ Wattage: "545W", Type: "Mono PERC", Efficiency: "21.2%", Warranty: "25 Years", Dimensions: "2278 x 1134 x 35mm" }) },
    { name: "Vikram Solar 440W Bifacial Panel", brand: "Vikram Solar", categorySlug: "solar-panels", vendorName: "Vikram Solar Ltd", price: 13200, originalPrice: null, image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=400&fit=crop", rating: 4.7, reviews: 215, badge: "New", description: "Premium bifacial solar panel that generates power from both sides. Up to 30% additional energy yield.", specs: JSON.stringify({ Wattage: "440W", Type: "Bifacial", Efficiency: "20.8%", Warranty: "25 Years", Dimensions: "2094 x 1038 x 35mm" }) },
    { name: "Fronius Primo 5.0-1 Inverter", brand: "Fronius", categorySlug: "inverters", vendorName: "Fronius International", price: 85000, originalPrice: 92000, image: "https://images.unsplash.com/photo-1592833159057-6de3df358898?w=400&h=400&fit=crop", rating: 4.9, reviews: 178, badge: "Premium", description: "Premium single-phase string inverter with SnapINverter mounting system and WiFi monitoring.", specs: JSON.stringify({ Capacity: "5 kW", Type: "String Inverter", Efficiency: "98.1%", Warranty: "10 Years", Phases: "Single Phase" }) },
    { name: "Growatt MIN 6000TL-X Inverter", brand: "Growatt", categorySlug: "inverters", vendorName: "Fronius International", price: 42000, originalPrice: null, image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=400&fit=crop", rating: 4.6, reviews: 290, badge: null, description: "Cost-effective string inverter with dual MPPT and built-in WiFi monitoring.", specs: JSON.stringify({ Capacity: "6 kW", Type: "String Inverter", Efficiency: "97.6%", Warranty: "10 Years", Phases: "Single Phase" }) },
    { name: "Luminous LPTT 12150H Tall Tubular Battery", brand: "Luminous", categorySlug: "batteries", vendorName: "Luminous Power Tech", price: 15500, originalPrice: 17200, image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&h=400&fit=crop", rating: 4.5, reviews: 450, badge: "Popular", description: "Heavy-duty tall tubular battery for solar applications with longer backup.", specs: JSON.stringify({ Capacity: "150Ah", Type: "Lead Acid Tall Tubular", Voltage: "12V", Warranty: "60 Months", "Cycle Life": "1500+" }) },
    { name: "Pylontech US3000C Lithium Battery", brand: "Pylontech", categorySlug: "batteries", vendorName: "Luminous Power Tech", price: 72000, originalPrice: null, image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=400&fit=crop", rating: 4.8, reviews: 125, badge: "Premium", description: "Premium LiFePO4 battery with modular design. Stackable up to 8 units.", specs: JSON.stringify({ Capacity: "3.55 kWh", Type: "LiFePO4", Voltage: "48V", Warranty: "10 Years", "Cycle Life": "6000+" }) },
    { name: "Tata Power 400W Solar Panel", brand: "Tata Power Solar", categorySlug: "solar-panels", vendorName: "Tata Power Solar", price: 11800, originalPrice: null, image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=400&fit=crop", rating: 4.6, reviews: 380, badge: null, description: "Reliable and high-performance solar panel from India's most trusted brand.", specs: JSON.stringify({ Wattage: "400W", Type: "Mono PERC", Efficiency: "20.1%", Warranty: "25 Years", Dimensions: "2008 x 1002 x 35mm" }) },
    { name: "K2 Systems RailPack Mounting Kit", brand: "K2 Systems", categorySlug: "mounting", vendorName: "Waaree Energies Ltd", price: 3500, originalPrice: null, image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=400&h=400&fit=crop", rating: 4.7, reviews: 95, badge: null, description: "Professional roof mounting system with pre-assembled components.", specs: JSON.stringify({ Type: "Roof Mount", Material: "Anodized Aluminum", "Wind Load": "Up to 150 km/h", Compatibility: "All Panel Sizes", Warranty: "15 Years" }) },
    { name: "Polycab 4mm DC Solar Cable (100m)", brand: "Polycab", categorySlug: "cables", vendorName: "Waaree Energies Ltd", price: 4200, originalPrice: null, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", rating: 4.5, reviews: 210, badge: null, description: "High-quality TUV certified DC solar cable. UV resistant and flame retardant.", specs: JSON.stringify({ Size: "4 sq mm", Type: "DC Solar Cable", Length: "100 meters", "Voltage Rating": "1.8 kV DC", Certification: "TUV Certified" }) },
    { name: "Victron SmartSolar MPPT 150/35", brand: "Victron Energy", categorySlug: "controllers", vendorName: "Fronius International", price: 18500, originalPrice: 21000, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop", rating: 4.9, reviews: 88, badge: "Top Rated", description: "Ultra-fast MPPT charge controller with Bluetooth connectivity.", specs: JSON.stringify({ Type: "MPPT", "Max PV Voltage": "150V", "Charge Current": "35A", "Battery Voltage": "12/24/48V", Connectivity: "Bluetooth Built-in" }) },
    { name: "Adani Solar 540W Mono Panel", brand: "Adani Solar", categorySlug: "solar-panels", vendorName: "Vikram Solar Ltd", price: 13800, originalPrice: 15500, image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop", rating: 4.7, reviews: 265, badge: null, description: "Premium mono PERC panel with half-cut cell technology for improved shade tolerance.", specs: JSON.stringify({ Wattage: "540W", Type: "Mono PERC", Efficiency: "21.0%", Warranty: "25 Years", Dimensions: "2278 x 1134 x 35mm" }) },
    { name: "Solis 10kW 3-Phase Inverter", brand: "Solis", categorySlug: "inverters", vendorName: "Fronius International", price: 68000, originalPrice: null, image: "https://images.unsplash.com/photo-1592833159057-6de3df358898?w=400&h=400&fit=crop", rating: 4.6, reviews: 145, badge: null, description: "Commercial-grade three-phase string inverter with dual MPPT.", specs: JSON.stringify({ Capacity: "10 kW", Type: "String Inverter", Efficiency: "98.4%", Warranty: "10 Years", Phases: "Three Phase" }) },
  ];

  for (const p of productData) {
    const { categorySlug, vendorName, ...rest } = p;
    await prisma.product.create({
      data: {
        ...rest,
        categoryId: categories[categorySlug],
        vendorId: vendors[vendorName],
      },
    });
  }

  // Create customers
  const customerData = [
    { name: "Rajesh Sharma", email: "rajesh@solartech.in", phone: "+91 98765 11111", companyName: "SolarTech Solutions Pvt Ltd", gstin: "27AABCS1234A1Z5", address: "Andheri East", city: "Mumbai", state: "Maharashtra", pincode: "400069" },
    { name: "Priya Patel", email: "priya@greenpower.in", phone: "+91 98765 22222", companyName: "GreenPower Installations", gstin: "24AABCG5678B1Z3", address: "Vastrapur", city: "Ahmedabad", state: "Gujarat", pincode: "380015" },
    { name: "Amit Verma", email: "amit@sunriseenergy.in", phone: "+91 98765 33333", companyName: "Sunrise Energy Systems", gstin: "07AABCS9012C1Z7", address: "Saket", city: "New Delhi", state: "Delhi", pincode: "110017" },
    { name: "Sneha Krishnan", email: "sneha@ecovolt.in", phone: "+91 98765 44444", companyName: "EcoVolt Power", gstin: "33AABCE3456D1Z2", address: "T Nagar", city: "Chennai", state: "Tamil Nadu", pincode: "600017" },
    { name: "Vikram Singh", email: "vikram@solarpro.in", phone: "+91 98765 55555", companyName: "SolarPro India", gstin: "29AABCS7890E1Z8", address: "Koramangala", city: "Bangalore", state: "Karnataka", pincode: "560034" },
  ];

  const customers: Record<string, string> = {};
  for (const c of customerData) {
    const created = await prisma.customer.upsert({
      where: { email: c.email },
      update: c,
      create: c,
    });
    customers[c.email] = created.id;
  }

  // Create sample orders
  const allProducts = await prisma.product.findMany();
  const orderData = [
    { customerEmail: "rajesh@solartech.in", orderNo: "ESP-2026-0001", status: "delivered", items: [{ productIndex: 0, quantity: 20 }, { productIndex: 2, quantity: 2 }] },
    { customerEmail: "priya@greenpower.in", orderNo: "ESP-2026-0002", status: "shipped", items: [{ productIndex: 1, quantity: 50 }, { productIndex: 4, quantity: 50 }] },
    { customerEmail: "amit@sunriseenergy.in", orderNo: "ESP-2026-0003", status: "confirmed", items: [{ productIndex: 6, quantity: 100 }] },
    { customerEmail: "sneha@ecovolt.in", orderNo: "ESP-2026-0004", status: "pending", items: [{ productIndex: 3, quantity: 5 }, { productIndex: 9, quantity: 5 }] },
    { customerEmail: "vikram@solarpro.in", orderNo: "ESP-2026-0005", status: "delivered", items: [{ productIndex: 5, quantity: 10 }, { productIndex: 7, quantity: 30 }] },
  ];

  for (const o of orderData) {
    const items = o.items.map((i) => ({
      productId: allProducts[i.productIndex].id,
      quantity: i.quantity,
      price: allProducts[i.productIndex].price,
    }));
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const gst = subtotal * 0.18;
    const total = subtotal + gst;

    await prisma.order.create({
      data: {
        orderNo: o.orderNo,
        customerId: customers[o.customerEmail],
        subtotal,
        gst,
        total,
        status: o.status,
        items: { create: items },
      },
    });
  }

  console.log("Seed completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
