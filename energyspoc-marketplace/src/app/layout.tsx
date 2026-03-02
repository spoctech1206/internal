import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EnergySpoc - India's Leading B2B Solar Equipment Marketplace",
  description:
    "India's most extensive B2B procurement platform for solar equipment. Solar panels, inverters, batteries & more from top brands at competitive prices.",
  keywords:
    "solar panels, solar inverters, batteries, solar equipment, B2B marketplace, India, EnergySpoc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
