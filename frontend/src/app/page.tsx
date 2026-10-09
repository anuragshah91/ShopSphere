import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import WhyShopSphere from "@/components/home/WhyShopSphere";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";


export default function Home() {
  return (
    <>
      {/* <Header /> */}

      <main>
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <WhyShopSphere />
      </main>

      <Footer />
    </>
  );
}


{/* <main className="flex-1">
        <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Welcome to ShopSphere
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
              Discover products.
              <br />
              <span className="text-accent">Shop with confidence.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
              A modern shopping experience built around quality products,
              simple discovery, and effortless checkout.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                Shop Now
              </button>

              <button className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-gray-50">
                Explore Categories
              </button>
            </div>
          </div>
        </section>
      </main> */}