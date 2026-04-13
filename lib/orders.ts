import type { CartItem } from "@/types/perfume.types";

const ORDERS_KEY = "sss_perfume_orders";

export type Order = {
  id: string;
  createdAt: string;
  items: CartItem[];
  total: number;
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    pincode: string;
  };
};

export function getOrders(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order): void {
  const existing = getOrders();
  const next = [order, ...existing];
  localStorage.setItem(ORDERS_KEY, JSON.stringify(next));
}

