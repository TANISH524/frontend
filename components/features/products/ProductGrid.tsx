"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard, ProductCardSkeleton } from "./ProductCard";

export type ProductSort = "featured" | "price_asc" | "price_desc" | "name_asc";

export function ProductGrid({
  query,
  sort = "featured",
}: {
  query?: string;
  sort?: ProductSort;
}) {
  const { data: perfumes, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="card p-10 text-center text-sm text-neutral-600">
        <p className="font-medium text-neutral-900">Couldn’t load products</p>
        <p className="mt-1 text-sm text-neutral-500">
          Make sure the backend is running on{" "}
          <span className="font-mono text-[color:var(--color-accent)]">localhost:3001</span>.
        </p>
      </div>
    );
  }

  if (!perfumes || perfumes.length === 0) {
    return (
      <div className="card p-10 text-center text-sm text-neutral-600">
        <p className="font-medium text-neutral-900">No perfumes found</p>
        <p className="mt-1 text-sm text-neutral-500">Try refreshing, or seed the database.</p>
      </div>
    );
  }

  const q = (query ?? "").trim().toLowerCase();
  const filtered = q
    ? perfumes.filter((p) => p.name.toLowerCase().includes(q))
    : perfumes.slice();

  const sorted = filtered.sort((a, b) => {
    if (sort === "price_asc") return a.price - b.price;
    if (sort === "price_desc") return b.price - a.price;
    if (sort === "name_asc") return a.name.localeCompare(b.name);
    return 0;
  });

  if (sorted.length === 0) {
    return (
      <div className="card p-10 text-center text-sm text-neutral-600">
        <p className="font-medium text-neutral-900">No matches</p>
        <p className="mt-1 text-sm text-neutral-500">Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((perfume) => (
        <ProductCard key={perfume.id} perfume={perfume} />
      ))}
    </div>
  );
}
