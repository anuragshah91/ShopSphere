import { products } from "@/data/products";
import Link from "next/link";
import ProductCard from "../product/ProductCard";

export default function FeaturedProducts() {
    return (
        <section className="bg-[#fafafa] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                            Handpicked for you
                        </p>

                        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                            Featured products
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
                            Discover some of our most loved products, selected for quality,
                            style and everyday use.
                        </p>
                    </div>

                    <Link
                        href="/shop"
                        className="hidden text-sm font-semibold text-foreground transition-colors hover:text-accent sm:block"
                    >
                        View all →
                    </Link>
                </div>
                
                {/* Product Grid */}
                <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}