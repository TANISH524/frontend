"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Skeleton } from "@/components/ui/Skeleton";

export function Navbar() {
  const { count, isHydrated } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/55 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-widest uppercase">
          <span className="text-neutral-950">Ess</span>
          <span className="text-[color:var(--color-accent)]">ence</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm text-neutral-700">
          <Link href="/about" className="hover:text-neutral-950 transition-colors">
            About
          </Link>
          <Link href="/products" className="hover:text-neutral-950 transition-colors">
            Shop
          </Link>
          <Link href="/journal" className="hover:text-neutral-950 transition-colors">
            Journal
          </Link>
          <Link href="/contact" className="hover:text-neutral-950 transition-colors">
            Contact
          </Link>
          <Link href="/cart" className="relative hover:text-neutral-950 transition-colors">
            <ShoppingBag size={18} />
            {!isHydrated ? (
              <Skeleton className="absolute -top-1.5 -right-2 h-4 w-4 rounded-full" />
            ) : (
              count > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[10px] text-[color:var(--color-accent-foreground)]">
                  {count}
                </span>
              )
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
