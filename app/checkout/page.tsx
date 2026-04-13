"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { placeOrderAction, type Order } from "@/app/actions/orders";
import { useToast } from "@/providers/ToastProvider";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, total, clear, isHydrated } = useCart();
  const [isPlacing, setIsPlacing] = useState(false);
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const canPlace = useMemo(() => {
    if (!isHydrated) return false;
    if (cart.length === 0) return false;
    return (
      form.name.trim() &&
      form.email.trim() &&
      form.address.trim() &&
      form.city.trim() &&
      form.pincode.trim()
    );
  }, [cart.length, form, isHydrated]);

  if (!isHydrated) {
    return (
      <div className="container-page py-12">
        <div className="card p-6 text-sm text-neutral-600">Loading checkout…</div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container-page py-12">
        <div className="card p-8 text-center">
          <p className="text-sm font-medium text-neutral-900">Your cart is empty.</p>
          <p className="mt-1 text-sm text-neutral-500">Add a fragrance to proceed.</p>
          <Link href="/products" className="btn btn-primary mt-6">
            Shop fragrances
          </Link>
        </div>
      </div>
    );
  }

  async function placeOrder() {
    if (!canPlace) return;
    setIsPlacing(true);
    try {
      const order: Order = {
        id: `ord_${Date.now()}`,
        createdAt: new Date().toISOString(),
        items: cart,
        total,
        customer: {
          name: form.name.trim(),
          email: form.email.trim(),
          address: form.address.trim(),
          city: form.city.trim(),
          pincode: form.pincode.trim(),
        },
      };
      await placeOrderAction(order);
      clear();
      toast({ title: "Order placed", description: `Order ${order.id}` });
      router.push("/orders");
    } finally {
      setIsPlacing(false);
    }
  }

  return (
    <div className="container-page py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Checkout</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
          Place your order
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          MVP checkout (no payment gateway). We’ll save your order locally.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="card p-6">
            <h2 className="text-sm font-semibold text-neutral-900">Shipping details</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-neutral-900">Name</span>
                <input
                  className="input"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-neutral-900">Email</span>
                <input
                  className="input"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-medium text-neutral-900">Address</span>
                <input
                  className="input"
                  value={form.address}
                  onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-neutral-900">City</span>
                <input
                  className="input"
                  value={form.city}
                  onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-neutral-900">Pincode</span>
                <input
                  className="input"
                  value={form.pincode}
                  onChange={(e) => setForm((f) => ({ ...f, pincode: e.target.value }))}
                />
              </label>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/cart" className="btn btn-secondary">
                Back to cart
              </Link>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!canPlace || isPlacing}
                onClick={placeOrder}
              >
                {isPlacing ? "Placing order…" : "Place order"}
              </button>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-sm font-semibold text-neutral-900">Order summary</h2>
            <div className="mt-4 grid gap-3">
              {cart.map((item) => (
                <div key={item.perfume.id} className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-neutral-900">
                      {item.perfume.name}
                    </p>
                    <p className="text-xs text-neutral-500">Qty {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {formatPrice(item.perfume.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-neutral-200/60 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Total</span>
                <span className="font-semibold text-neutral-900">{formatPrice(total)}</span>
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                Payment gateway not integrated yet.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

