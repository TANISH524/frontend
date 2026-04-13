"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductGrid, type ProductSort } from "@/components/features/products/ProductGrid";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<ProductSort>("featured");

  const subtitle = useMemo(() => {
    if (!query.trim()) return "Curated for the discerning.";
    return `Showing results for “${query.trim()}”`;
  }, [query]);

  return (
    <div className="container-page py-12">
      <section className="mb-8 overflow-hidden rounded-[28px] border border-white/40 bg-white/35 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Shop</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
              All Fragrances
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">{subtitle}</p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:justify-end">
            <label className="relative w-full sm:w-[360px]">
              <span className="sr-only">Search</span>
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name…"
                className="input pl-9"
              />
            </label>

            <label className="w-full sm:w-56">
              <span className="sr-only">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as ProductSort)}
                className="input"
              >
                <option value="featured">Featured</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="name_asc">Name: A to Z</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <ProductGrid query={query} sort={sort} />
    </div>
  );
}
