"use client";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({
    products,
}: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="py-20 text-center">
                <p className="text-sm text-gray-500">
                    No products found.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}
                />
            ))}
        </div>
    )
}