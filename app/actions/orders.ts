"use server";

import type { CartItem } from "@/types/perfume.types";

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

// In-memory orders (resets on server restart)
const ordersStore: Order[] = [];

export async function placeOrderAction(order: Order) {
  ordersStore.unshift(order);
  return { ok: true as const, id: order.id };
}

export async function getOrdersAction() {
  return ordersStore;
}

