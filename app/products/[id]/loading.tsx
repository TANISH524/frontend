import { ProductDetailSkeleton } from "@/components/features/products/ProductDetail";
import { Spinner } from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="container-page py-12">
      <div className="mb-6">
        <Spinner label="Loading product" />
      </div>
      <ProductDetailSkeleton />
    </div>
  );
}

