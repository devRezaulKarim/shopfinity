import { ReactNode } from "react";
import "./globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/components/custom/navbar";
import { TopBar } from "@/components/custom/topbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Shop infinity",
  description: "Shop for happiness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/assets/logos/favicon.svg"
        type="image/svg"
      />
      <body className={`${inter.variable} antialiased`}>
        {/* <TopBar />
        <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
