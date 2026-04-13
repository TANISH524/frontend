import { useQuery } from "@tanstack/react-query";
import { getAllPerfumes, getPerfumeById } from "@/lib/api";

export function useProducts() {
  return useQuery({
    queryKey: ["perfumes"],
    queryFn: getAllPerfumes,
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ["perfumes", id],
    queryFn: () => getPerfumeById(id),
    enabled: !!id,
  });
}
