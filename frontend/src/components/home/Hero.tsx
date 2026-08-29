import Link from "next/link";


export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#f4f1ff]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#ddd2ff] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9d0f5] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6d28d9] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
            Curated for everyday
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-7xl">
            Everything you want.
            <span className="mt-2 block text-[#7c3aed]">
              One beautiful place.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#6b7280] sm:text-lg">
            Discover electronics, fashion, home essentials, beauty and more —
            thoughtfully selected for modern everyday life.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Shop Collection
            </Link>

            <Link
              href="/categories"
              className="rounded-full border border-[#d9d5e5] bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#111111] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              Explore Categories
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#ded9ed] pt-6">
            <div>
              <p className="text-lg font-semibold text-[#111111]">10K+</p>
              <p className="text-xs text-[#6b7280]">Products</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-[#111111]">50K+</p>
              <p className="text-xs text-[#6b7280]">Happy shoppers</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-[#111111]">4.8/5</p>
              <p className="text-xs text-[#6b7280]">Customer rating</p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="relative aspect-square overflow-hidden rounded-4xl bg-[#111111] shadow-2xl">
            {/* Main visual */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#8b5cf6_0%,#4c1d95_28%,#111111_68%)]" />

            {/* Decorative circles */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-80 sm:w-80" />

            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-56 sm:w-56" />

            {/* Product placeholder */}
            <div className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] items-center justify-center rounded-4xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:rotate-0 sm:h-64 sm:w-64">
              <div className="text-center text-white">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-4xl">
                  ✦
                </div>

                <p className="text-sm font-medium text-white/70">
                  ShopSphere
                </p>

                <p className="mt-1 text-xl font-semibold">
                  Curated goods
                </p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/50">
                Trending now
              </p>

              <p className="mt-1 text-sm font-semibold">
                New arrivals
              </p>
            </div>

            {/* Floating rating */}
            <div className="absolute right-6 top-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
              <p className="text-sm font-semibold">★ 4.8</p>
              <p className="text-[10px] text-white/50">Shopper rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}