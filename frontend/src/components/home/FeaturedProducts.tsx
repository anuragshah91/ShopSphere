"use client"
// import { products } from "@/data/products";
import Link from "next/link";
import ProductCard from "../product/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";
import type { Product } from "@/types/product";

// interface Product {
//     _id: string;
//     name: string;
//     category: string;
//     price: string;
//     originalPrice?: number;
//     rating: number;
//     reviewsCount: number;
//     image: string[];
//     isFeatured: boolean;
// }

export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                const featuredProducts = response.data.filter(
                    (product: Product) => product.isFeatured
                );

                setProducts(featuredProducts);

            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-center text-gray-500">Loading products...</p>
                </div>
            </section>
        )
    }

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
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}