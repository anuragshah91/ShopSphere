"use client";
import Image from "next/image";
import { Product } from "@/types/product";
import { FiHeart, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";

type ProductDetailsProps = {
    product: Product;
};

export default function ProductDetails({
    product,
}: ProductDetailsProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = product.images ?? [];

    const increaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity((current) => current + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((current) => current - 1);
        }
    };

    return (
        <div>
            {/* ================= IMAGE GALLERY ================= */}
            <div>
                {/* Main Image  */}
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#f4f4f5]">
                    {images.length > 0 ? (
                        <Image
                            src={images[selectedImage]}
                            alt={product.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-gray-400">
                            No Image Available
                        </div>
                    )}
                </div>

                {/* Thumbanails  */}
                {images.length > 1 && (
                    <div className="mt-4 grid grid-cols-5 gap-3">
                        {images.map((image, index) => (
                            <button
                                key={`${image}-${index}`}
                                type="button"
                                onClick={() => setSelectedImage(index)}
                                className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${selectedImage === index
                                    ? "border-black"
                                    : "border-transparent"
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    fill
                                    sizes="96px"
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ================= PRODUCT INFO ================= */}
            <div className="flex flex-col justify-center">
                {/* Category */}
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    {product.category}
                </p>

                {/* Product Name  */}
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {product.name}
                </h1>

                {/* Brand */}
                <p className="mt-3 text-sm text-gray-500">
                    by {product.brand}
                </p>

                {/* Rating  */}
                <div className="mt-6 flex items-center gap-2">
                    <span className="text-lg">★</span>

                    <span className="text-sm font-semibold">
                        {product.rating}
                    </span>

                    <span className="text-sm text-gray-500">
                        ({product.reviewsCount} reviews)
                    </span>
                </div>

                {/* Price  */}
                <div className="mt-6 flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    {product.originalPrice && (
                        <>
                            <span className="text-lg text-gray-400 line-through">
                                ₹{product.originalPrice.toLocaleString("en-IN")}
                            </span>

                            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                {Math.round(
                                    ((product.originalPrice - product.price) / product.originalPrice) * 100
                                )}
                                % OFF
                            </span>
                        </>
                    )}
                </div>

                {/* Description */}
                <p className="mt-7 max-w-xl leading-7 text-gray-600">
                    {product.description}
                </p>

                {/* Divider  */}
                <div className="my-8 h-px bg-gray-200" />

                {/* Stock */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-900">
                            Availability
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            {product.stock > 0
                                ? `${product.stock} items available`
                                : "Currently out of stock"}
                        </p>
                    </div>

                    {product.stock > 0 && (
                        <span className="text-sm font-medium text-green-600">
                            In Stock
                        </span>
                    )}
                </div>

                {/* Quantity Wishlist  */}
                {product.stock > 0 && (
                    <div className="mt-6 flex items-center gap-4">
                        {/* Quantity */}
                        <div className="flex items-center rounded-xl border border-gray-200">
                            <button
                                type="button"
                                onClick={decreaseQuantity}
                                disabled={quantity === 1}
                                aria-label="Decrease quantity"
                                className="flex h-12 w-12 items-center justify-center text-gray-600 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <FiMinus size={16} />
                            </button>

                            <span className="w-10 text-center text-sm font-semibold">
                                {quantity}
                            </span>

                            <button
                                type="button"
                                onClick={increaseQuantity}
                                disabled={quantity >= product.stock}
                                aria-label="Increase quantity"
                                className="flex h-12 w-12 items-center justify-center text-gray-600 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <FiPlus size={16} />
                            </button>
                        </div>

                        {/* Wishlist */}
                        <button
                            type="button"
                            aria-label="Add to wishlist"
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 transition hover:border-gray-400"
                        >
                            <FiHeart size={19} />
                        </button>
                    </div>
                )}

                {/* Add To Cart */}
                <button
                    type="button"
                    disabled={product.stock === 0}
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#292929] disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                    <FiShoppingBag size={18} />

                    {product.stock > 0
                        ? `Add ${quantity} to Cart`
                        : "Out of Stock"}
                </button>

            </div>
        </div>
    )
}