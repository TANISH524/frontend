import { CartItem, Perfume } from "@/types/perfume.types";

const CART_KEY = "sss_perfume_cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCart(): CartItem[] {
  const empty: CartItem[] = [];
  if (typeof window !== "undefined") {
    saveCart(empty);
  }
  return empty;
}

export function addToCart(perfume: Perfume): CartItem[] {
  const cart = getCart();
  const existing = cart.find((item) => item.perfume.id === perfume.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ perfume, quantity: 1 });
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(perfumeId: string): CartItem[] {
  const updated = getCart().filter((item) => item.perfume.id !== perfumeId);
  saveCart(updated);
  return updated;
}

export function updateQuantity(perfumeId: string, quantity: number): CartItem[] {
  const cart = getCart();
  const item = cart.find((item) => item.perfume.id === perfumeId);
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(perfumeId);
    }
    item.quantity = quantity;
    saveCart(cart);
  }
  return cart;
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.perfume.price * item.quantity, 0);
}

export function getCartCount(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}
