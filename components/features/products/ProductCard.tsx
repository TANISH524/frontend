"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { Perfume } from "@/types/perfume.types";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/providers/ToastProvider";
import { formatPrice } from "@/lib/utils";
import { Skeleton } from "@/components/ui/Skeleton";

interface ProductCardProps {
  perfume: Perfume;
}

export function ProductCard({ perfume }: ProductCardProps) {
  const { add } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const initialSrc = useMemo(() => perfume.image || "/placeholder.svg", [perfume.image]);
  const [src, setSrc] = useState<string>(initialSrc);

  return (
    <article className="group flex flex-col overflow-hidden card">
      <Link
        href={`/products/${perfume.id}`}
        className="relative block overflow-hidden bg-neutral-100"
      >
        <div className="relative h-64 w-full">
          <Image
            src={src}
            alt={perfume.name}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.1]"
            onError={() => setSrc("/placeholder.svg")}
          />
      </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link href={`/products/${perfume.id}`} className="block">
              <h3 className="truncate text-sm font-semibold text-neutral-950 decoration-[color:var(--color-accent)] underline-offset-4 group-hover:underline">
                {perfume.name}
              </h3>
            </Link>
            <p className="mt-1 text-sm font-semibold text-neutral-950">{formatPrice(perfume.price)}</p>
            <p className="mt-1 text-xs text-neutral-600">Free shipping over {formatPrice(3999)}</p>
          </div>

          <Link
            href={`/products/${perfume.id}`}
            className="btn btn-ghost -mr-2 -mt-2 h-9 w-9 rounded-full px-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
            aria-label={`View ${perfume.name}`}
            title="View details"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-auto grid grid-cols-1 gap-2">
          <button
            onClick={() => {
              add(perfume);
              toast({ title: "Added to cart", description: perfume.name });
            }}
            className="btn btn-primary py-2.5 text-xs"
          >
            <ShoppingBag size={13} />
            Add to cart
          </button>
          <button
            onClick={() => {
              add(perfume);
              toast({ title: "Added to cart", description: perfume.name });
              router.push("/cart");
            }}
            className="btn btn-secondary py-2.5 text-xs"
          >
            Buy now
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden card">
      <div className="bg-neutral-100">
        <Skeleton className="h-64 w-full rounded-none" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="mt-1 h-3 w-1/2" />
        </div>
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
}
