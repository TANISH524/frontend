import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { CartProvider } from "@/providers/CartProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Essence — Luxury Fragrances",
  description: "Discover premium perfumes curated for the discerning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair.variable} bg-neutral-50 text-neutral-900 antialiased`}
      >
        <QueryProvider>
          <ToastProvider>
            <CartProvider>
              <Navbar />
              <main>{children}</main>
            </CartProvider>
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
