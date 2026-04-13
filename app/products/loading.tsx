import { ProductCardSkeleton } from "@/components/features/products/ProductCard";
import { Spinner } from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="container-page py-12">
      <section className="mb-8 overflow-hidden rounded-[28px] border border-white/40 bg-white/35 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:p-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Shop</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
              All Fragrances
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">Curated for the discerning.</p>
          </div>
          <Spinner label="Loading products" className="hidden sm:inline-flex" />
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

