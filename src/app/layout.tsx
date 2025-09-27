import { ReactNode } from "react";
import "./globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/components/custom/navbar";

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
      <body className={`antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
