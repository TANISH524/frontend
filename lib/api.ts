import { Perfume } from "@/types/perfume.types";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export async function getAllPerfumes(): Promise<Perfume[]> {
  const res = await fetch(`/api/perfumes`, { cache: "no-store" });
  return handleResponse<Perfume[]>(res);
}

export async function getPerfumeById(id: string): Promise<Perfume> {
  const res = await fetch(`/api/perfumes/${id}`, { cache: "no-store" });
  return handleResponse<Perfume>(res);
}
