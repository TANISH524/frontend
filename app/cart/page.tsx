"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { CartItem, CartItemSkeleton } from "@/components/cart/CartItem";
import { formatPrice } from "@/lib/utils";
import { Skeleton } from "@/components/ui/Skeleton";

export default function CartPage() {
  const { cart, remove, updateQty, total, isHydrated } = useCart();
  const router = useRouter();

  if (!isHydrated) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8">
          <Skeleton className="h-8 w-40" />
        </div>
        <div className="flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <CartItemSkeleton key={i} />
          ))}
        </div>
        <div className="mt-8 card p-5">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="mt-4 h-11 w-full" />
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <ShoppingBag size={36} className="text-neutral-300" />
        <p className="text-sm text-neutral-500">Your cart is empty.</p>
        <Link
          href="/products"
          className="btn btn-primary"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="mb-8 text-2xl font-semibold text-neutral-900">Your Cart</h1>
      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <CartItem key={item.perfume.id} item={item} onRemove={remove} onUpdateQty={updateQty} />
        ))}
      </div>
      <div className="mt-8 card p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-semibold text-neutral-900">{formatPrice(total)}</span>
        </div>
        <button
          className="btn btn-primary mt-4 w-full py-3"
          onClick={() => router.push("/checkout")}
        >
          Proceed to Checkout
        </button>
        <p className="mt-2 text-center text-xs text-neutral-400">
          Payment gateway not integrated in MVP
        </p>
      </div>
    </div>
  );
}
