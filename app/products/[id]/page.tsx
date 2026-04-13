"use client";

import { useParams } from "next/navigation";
import { useProduct } from "@/hooks/useProducts";
import { ProductDetail, ProductDetailSkeleton } from "@/components/features/products/ProductDetail";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: perfume, isLoading, isError } = useProduct(id);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError || !perfume) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-sm text-neutral-500">
        Product not found or failed to load.
      </div>
    );
  }

  return <ProductDetail perfume={perfume} />;
}
