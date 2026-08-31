"use client";

import { FiHeart, FiShoppingBag } from "react-icons/fi";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge: string;
  icon: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      {/* Product Image */}
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-[#f4f4f5]">
        {/* Badge */}
        <div className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-sm">
          {product.badge}
        </div>

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-muted opacity-0 shadow-sm transition-all duration-300 hover:text-red-500 group-hover:opacity-100"
        >
          <FiHeart size={17} />
        </button>

        {/* Temporary visual */}
        <div className="flex h-full items-center justify-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white text-6xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-110">
            {product.icon}
          </div>
        </div>

        {/* Add to cart */}
        <button
          type="button"
          className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 rounded-xl bg-[#111111] py-3 text-sm font-semibold text-white opacity-0 transition-all duration-300 hover:bg-[#292929] group-hover:translate-y-0 group-hover:opacity-100"
        >
          <FiShoppingBag size={17} />
          Add to cart
        </button>
      </div>

      {/* Product Information */}
      <div className="pt-4">
        <p className="text-xs font-medium text-muted">
          {product.category}
        </p>

        <h3 className="mt-1 text-sm font-semibold tracking-tight text-foreground sm:text-base">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-sm">★</span>

          <span className="text-xs font-semibold">
            {product.rating}
          </span>

          <span className="text-xs text-muted">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-base font-bold text-foreground">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="text-xs text-muted line-through">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </article>
  );
}