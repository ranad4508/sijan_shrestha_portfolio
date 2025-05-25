import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Sijan Kumar Shrestha - CEO & Managing Director | Orchid Tours and Travels",
  description:
    "Portfolio of Sijan Kumar Shrestha, CEO & Managing Director of Orchid Tours and Travels Pvt. Ltd. Over 10 years of experience in tourism, hospitality, and business leadership.",
  keywords:
    "Sijan Kumar Shrestha, Orchid Tours, Nepal Tourism, Travel Agency, CEO, Managing Director, Thamel, Kathmandu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
