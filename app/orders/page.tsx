import Link from "next/link";
import { getOrdersAction } from "@/app/actions/orders";
import { formatPrice } from "@/lib/utils";

export default async function OrdersPage() {
  const orders = await getOrdersAction();

  return (
    <div className="container-page py-12">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Orders</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
            Your orders
          </h1>
          <p className="mt-2 text-sm text-neutral-600">In-memory orders (resets on restart).</p>
        </div>
        <Link href="/products" className="btn btn-secondary">
          Continue shopping
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-sm font-medium text-neutral-900">No orders yet</p>
          <p className="mt-1 text-sm text-neutral-500">Place an order from checkout.</p>
          <Link href="/products" className="btn btn-primary mt-6">
            Shop fragrances
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {orders.map((o) => (
            <div key={o.id} className="card p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Order {o.id}</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {new Date(o.createdAt).toLocaleString()}
                  </p>
                  <p className="mt-2 text-xs text-neutral-600">
                    Ship to: {o.customer.name}, {o.customer.city} ({o.customer.pincode})
                  </p>
                </div>
                <div className="text-sm font-semibold text-neutral-900">
                  {formatPrice(o.total)}
                </div>
              </div>
              <div className="mt-4 grid gap-2 text-sm">
                {o.items.map((it) => (
                  <div key={`${o.id}_${it.perfume.id}`} className="flex justify-between gap-4">
                    <span className="truncate text-neutral-700">
                      {it.perfume.name} × {it.quantity}
                    </span>
                    <span className="font-medium text-neutral-900">
                      {formatPrice(it.perfume.price * it.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

