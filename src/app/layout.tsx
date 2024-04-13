import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ weight: ['400','600', '900'],  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', });

export const metadata: Metadata = {
  title: "Creative Geeks Limited",
  description: "Creative Geeks Limited Coming soon page, we are launching soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
