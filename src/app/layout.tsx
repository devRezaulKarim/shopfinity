import { ReactNode } from "react";
import "./globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/components/custom/navbar";
import { TopBar } from "@/components/custom/topbar";

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
      <body className={`antialiased`}>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
