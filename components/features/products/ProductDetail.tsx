"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingBag, Zap } from "lucide-react";
import { Perfume } from "@/types/perfume.types";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/providers/ToastProvider";
import { formatPrice } from "@/lib/utils";

interface ProductDetailProps {
  perfume: Perfume;
}

export function ProductDetail({ perfume }: ProductDetailProps) {
  const { add } = useCart();
  const router = useRouter();
  const { toast } = useToast();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
          <Image
            src={perfume.image || "/placeholder.svg"}
            alt={perfume.name}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h1 className="text-3xl font-light tracking-tight text-neutral-900">
              {perfume.name}
            </h1>
            <p className="mt-3 text-2xl font-medium text-neutral-800">
              {formatPrice(perfume.price)}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-neutral-600">{perfume.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => {
                add(perfume);
                toast({ title: "Added to cart", description: perfume.name });
              }}
              className="btn btn-primary flex-1 py-3"
            >
              <ShoppingBag size={15} />
              Add to Cart
            </button>
            <button
              onClick={() => {
                add(perfume);
                toast({ title: "Buying now", description: "Redirecting to cart…" });
                router.push("/cart");
              }}
              className="btn btn-secondary flex-1 py-3"
            >
              <Zap size={15} />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-[color:var(--color-border)] animate-pulse" />
        <div className="flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="h-8 w-3/4 rounded bg-[color:var(--color-border)] animate-pulse" />
            <div className="h-7 w-1/3 rounded bg-[color:var(--color-border)] animate-pulse" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-full rounded bg-[color:var(--color-border)] animate-pulse" />
            <div className="h-4 w-5/6 rounded bg-[color:var(--color-border)] animate-pulse" />
            <div className="h-4 w-2/3 rounded bg-[color:var(--color-border)] animate-pulse" />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="h-11 flex-1 rounded-md bg-[color:var(--color-border)] animate-pulse" />
            <div className="h-11 flex-1 rounded-md bg-[color:var(--color-border)] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
