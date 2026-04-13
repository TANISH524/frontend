import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/40 bg-white/65 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--color-accent)]/15 blur-3xl" />
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-sky-400/12 blur-3xl" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.55),transparent_55%)]" />
        </div>

        <div className="container-page relative grid grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
     

            <h1 className="mb-6 text-5xl font-semibold leading-[0.95] tracking-tight text-neutral-950 sm:text-6xl">
         Scent
              that feels
              <br />
              <span className="text-[color:var(--color-accent)]">expensive</span> on skin.
            </h1>

            <p className="mb-8 max-w-lg text-sm leading-relaxed text-neutral-700">
              A curated wardrobe of modern perfumes—crafted for longevity, built for layering, and
              packaged like collectible design objects.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="btn btn-primary px-7 py-3 font-semibold"
              >
                Shop Fragrances
              </Link>
              <Link
                href="/about"
                className="btn btn-secondary px-7 py-3 font-semibold"
              >
                Our Story
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-center sm:max-w-md sm:text-left">
              <div className="card p-4">
                <dt className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                  Longevity
                </dt>
                <dd className="mt-1 text-sm font-semibold text-neutral-950">8–12 hours</dd>
              </div>
              <div className="card p-4">
                <dt className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">Sillage</dt>
                <dd className="mt-1 text-sm font-semibold text-neutral-950">Compliment-core</dd>
              </div>
              <div className="card p-4">
                <dt className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">Packaging</dt>
                <dd className="mt-1 text-sm font-semibold text-neutral-950">Collector</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-8 -top-8 rotate-[-10deg] card px-4 py-3 text-xs font-semibold text-neutral-900 shadow-lg">
              “Smells like a signature.”
            </div>
            <div className="pointer-events-none absolute -bottom-8 -right-6 rotate-[8deg] rounded-2xl border border-white/30 bg-[color:var(--color-accent)] px-4 py-3 text-xs font-semibold text-[color:var(--color-accent-foreground)] shadow-lg">
              Limited capsule drop
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/40 bg-neutral-100 shadow-[0_22px_70px_rgba(0,0,0,0.16)]">
              <div className="relative aspect-[4/5] w-full">
                <ParallaxImage
                  alt="Perfume bottle editorial shot"
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1800&q=88"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="h-full w-full"
                  imageStyle={{ objectFit: "cover" }}
                  fallbackSrc="/placeholder.svg"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_45%)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Brand split */}
      <section className="bg-neutral-50/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
              Essence elevates fragrance into a daily ritual
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-700">
              Inspired by atelier perfumery, we blend bright top notes, textured hearts, and warm
              bases that evolve beautifully on skin. Each scent is designed to be worn alone or
              layered.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                { k: "Top notes", v: "sparkling citrus, pink pepper, pear" },
                { k: "Heart", v: "iris, rose absolute, jasmine tea" },
                { k: "Base", v: "amber, sandalwood, skin musk" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                    {row.k}
                  </p>
                  <p className="text-sm font-medium text-neutral-900">{row.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white/70 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur">
              <div className="aspect-[16/11] w-full">
                <ParallaxImage
                  alt="Perfume bottle close-up on colored background"
                  src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1800&q=92"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="absolute inset-0"
                  imageStyle={{ objectFit: "cover" }}
                  fallbackSrc="/placeholder.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Featured</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
                A loud little gallery of bottles
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-700">
                Maximalist packaging. Wearable compositions. Built to collect.
              </p>
            </div>
            <Link
              href="/products"
              className="btn btn-secondary hidden px-5 py-2 font-semibold sm:inline-flex"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Midnight Velvet",
                price: formatPrice(6499),
                img: "https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=1800&q=92",
                tag: "Amber • Cocoa • Musk",
              },
              {
                name: "Citrus Atelier",
                price: formatPrice(5199),
                img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1800&q=92",
                tag: "Bergamot • Tea • Cedar",
              },
              {
                name: "Rose Noir",
                price: formatPrice(6999),
                img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1800&q=92",
                tag: "Rose • Iris • Amber",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="group relative overflow-hidden rounded-[26px] border border-neutral-200 bg-white/85 shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.16)]"
              >
                <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-pink-300/40 via-yellow-200/20 to-sky-300/30 blur-2xl" />
                <div className="bg-neutral-100">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <ParallaxImage
                      alt={p.name}
                      src={p.img}
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      imageStyle={{ objectFit: "cover" }}
                      fallbackSrc="/placeholder.svg"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/10" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">{p.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                      {p.tag}
                    </p>
                    <p className="mt-2 text-sm text-neutral-700">{p.price}</p>
                  </div>
                  <Link
                    href="/products"
                    className="btn btn-primary px-4 py-2 text-xs font-semibold"
                  >
                    Shop
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/products"
              className="inline-flex rounded-md border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              View all fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials band */}
      <section className="relative border-y border-neutral-200 bg-neutral-50/40">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Loved by</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
              Fragrance fans who want compliments, not chaos
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "The dry-down is addictive—clean, warm, and elegant. Lasted through an entire evening out.",
                name: "Amanda Reed",
              },
              {
                quote:
                  "Finally found a signature scent that’s modern without being loud. The bottle feels premium too.",
                name: "Samuel Bishop",
              },
              {
                quote:
                  "Layering set is genius. I mix the citrus with the woods and it turns into something uniquely mine.",
                name: "Carolyn Ortiz",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="group relative overflow-hidden rounded-[26px] border border-white/50 bg-white/35 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-pink-300/25 blur-2xl" />
                  <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-sky-300/25 blur-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/10" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_45%)]" />
                </div>

                <blockquote className="relative text-sm leading-relaxed text-neutral-800">
                  “{t.quote}”
                </blockquote>
                <figcaption className="relative mt-4 text-xs font-semibold tracking-[0.18em] text-neutral-900 uppercase">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Best seller highlight */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Best selling</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
              Purelux Eau de Parfum
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Crisp bergamot, soft iris, and a creamy sandalwood base for a refined, everyday scent.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <p className="text-lg font-semibold text-neutral-900">{formatPrice(7499)}</p>
              <p className="text-sm text-neutral-400 line-through">{formatPrice(8999)}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
              className="btn btn-primary px-7 py-3"
              >
                Shop best seller
              </Link>
              <Link
                href="/products"
              className="btn btn-secondary px-7 py-3"
              >
                Explore notes
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100 shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
            <div className="aspect-[16/13] w-full">
              <ParallaxImage
                alt="Best selling perfume bottle"
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1800&q=92"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="absolute inset-0"
                imageStyle={{ objectFit: "cover" }}
                fallbackSrc="/placeholder.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Journal</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
                Learn the art of scent
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-600">
                Notes, layering guides, and behind-the-scenes stories.
              </p>
            </div>
            <Link
              href="/journal"
              className="hidden rounded-md border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 sm:inline-flex"
            >
              Read more
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "How to find a signature scent",
                img: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1600&q=90",
              },
              {
                title: "Layering 101: citrus + woods",
                img: "https://images.unsplash.com/photo-1458538977777-0549b3a5f1c3?auto=format&fit=crop&w=1600&q=90",
              },
              {
                title: "EDP vs EDT: what changes?",
                img: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1600&q=90",
              },
            ].map((a) => (
              <Link
                key={a.title}
                href="/journal"
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <ParallaxImage
                    alt={a.title}
                    src={
                      a.title === "Layering 101: citrus + woods"
                        ? "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1600&q=90"
                        : a.img
                    }
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                    imageStyle={{ objectFit: "cover" }}
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-neutral-900">{a.title}</p>
                  <p className="mt-2 text-sm text-neutral-500">Read article</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/journal"
              className="inline-flex rounded-md border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter + footer */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
                Get early access to new drops
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Launch alerts, restocks, and scent guides—sent occasionally.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <input
                type="email"
                placeholder="Email address"
                className="input sm:max-w-xs"
              />
              <button
                type="button"
                className="btn btn-primary h-11 px-6"
              >
                Subscribe
              </button>
            </form>
          </div>

          <footer className="mt-12 flex flex-col gap-6 border-t border-neutral-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">Essence</p>
            <div className="flex flex-wrap gap-5 text-sm text-neutral-600">
              <Link href="/products" className="hover:text-neutral-900 transition-colors">
                Shop
              </Link>
              <Link href="/about" className="hover:text-neutral-900 transition-colors">
                About
              </Link>
              <Link href="/journal" className="hover:text-neutral-900 transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Essence</p>
          </footer>
        </div>
      </section>
    </div>
  );
}
