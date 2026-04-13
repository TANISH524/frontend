"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, Perfume } from "@/types/perfume.types";
import {
  addToCart,
  clearCart,
  getCart,
  getCartCount,
  getCartTotal,
  removeFromCart,
  updateQuantity,
} from "@/lib/cart";

type CartContextValue = {
  cart: CartItem[];
  add: (perfume: Perfume) => void;
  remove: (perfumeId: string) => void;
  updateQty: (perfumeId: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  isHydrated: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    const onStorage = (e: StorageEvent) => {
      // Any cart write in another tab should update this tab.
      if (e.key) setCart(getCart());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [isHydrated]);

  const add = useCallback((perfume: Perfume) => {
    setCart(addToCart(perfume));
  }, []);

  const remove = useCallback((perfumeId: string) => {
    setCart(removeFromCart(perfumeId));
  }, []);

  const updateQty = useCallback((perfumeId: string, qty: number) => {
    setCart(updateQuantity(perfumeId, qty));
  }, []);

  const clear = useCallback(() => {
    setCart(clearCart());
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      add,
      remove,
      updateQty,
      clear,
      total: getCartTotal(cart),
      count: getCartCount(cart),
      isHydrated,
    }),
    [add, cart, clear, isHydrated, remove, updateQty]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

