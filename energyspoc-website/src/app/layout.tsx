import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EnergySpoc - Powering the Future with Solar Energy",
  description:
    "EnergySpoc is a leading B2B solar energy solutions provider. We supply premium solar panels, inverters, batteries, and mounting systems to installers and distributors worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
