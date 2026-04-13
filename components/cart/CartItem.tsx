"use client";

import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { CartItem as CartItemType } from "@/types/perfume.types";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
}

export function CartItem({ item, onRemove, onUpdateQty }: CartItemProps) {
  const { perfume, quantity } = item;

  return (
    <div className="flex items-center gap-4 card p-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-neutral-100">
        <Image
          src={perfume.image || "/placeholder.svg"}
          alt={perfume.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-sm font-medium text-neutral-900">{perfume.name}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdateQty(perfume.id, quantity - 1)}
            className="rounded p-0.5 hover:bg-neutral-100 transition-colors"
            disabled={quantity <= 1}
          >
            <Minus size={14} className="text-neutral-500" />
          </button>
          <span className="text-xs text-neutral-500 w-4 text-center">{quantity}</span>
          <button
            onClick={() => onUpdateQty(perfume.id, quantity + 1)}
            className="rounded p-0.5 hover:bg-neutral-100 transition-colors"
          >
            <Plus size={14} className="text-neutral-500" />
          </button>
        </div>
        <p className="text-sm text-neutral-700">{formatPrice(perfume.price * quantity)}</p>
      </div>
      <button
        onClick={() => onRemove(perfume.id)}
        className="rounded-md p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}

export function CartItemSkeleton() {
  return (
    <div className="flex items-center gap-4 card p-4">
      <div className="h-16 w-16 shrink-0 rounded-md bg-[color:var(--color-border)] animate-pulse" />
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-4 w-2/3 rounded bg-[color:var(--color-border)] animate-pulse" />
        <div className="h-3 w-1/4 rounded bg-[color:var(--color-border)] animate-pulse" />
        <div className="h-4 w-1/3 rounded bg-[color:var(--color-border)] animate-pulse" />
      </div>
      <div className="h-8 w-8 rounded-md bg-[color:var(--color-border)] animate-pulse" />
    </div>
  );
}
