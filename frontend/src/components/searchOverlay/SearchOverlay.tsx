"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"

import {
    FiSearch,
    FiX,
    FiClock,
    FiTrendingUp,
    FiGrid,
    FiChevronRight,
    FiShoppingCart,
} from "react-icons/fi";

// import { products } from "@/data/products";
import { products } from "@/data/searchProduct";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const recentSearches = [
    "Wireless Headphones",
    "Nike Shoes",
    "iPhone 15",
    "Men's T-Shirt",
];

const popularSearches = [
    "Shoes",
    "T-Shirts",
    "Headphones",
    "Laptops",
    "Watches",
    "Accessories",
];

const categories = [
    {
        name: "Men's Fashion",
        icon: "👕",
    },
    {
        name: "Women's Fashion",
        icon: "👗",
    },
    {
        name: "Electronics",
        icon: "💻",
    },
    {
        name: "Home & Living",
        icon: "🏠",
    },
    {
        name: "Beauty & Personal Care",
        icon: "💄",
    },
    {
        name: "Sports & Fitness",
        icon: "🏋️",
    },
];

const getProductIcon = (product: {
    name: string;
    category: string;
}) => {
    const name = product.name.toLowerCase();
    const category = product.category.toLowerCase();

    if (name.includes("headphone") || category.includes("audio")) return "🎧";
    if (name.includes("shoe") || category.includes("shoe")) return "👟";
    if (name.includes("shirt") || category.includes("fashion")) return "👕";
    if (name.includes("watch") || category.includes("watch")) return "⌚";
    if (name.includes("laptop") || category.includes("electronics")) return "💻";
    if (name.includes("makeup") || category.includes("beauty")) return "💄";
    if (name.includes("home") || category.includes("living")) return "🏠";
    if (name.includes("sport") || category.includes("fitness")) return "🏋️";
    if (category.includes("bag") || category.includes("accessory")) return "👜";

    return "🛍️";
};

const productsWithIcons = products.map((product) => ({
    ...product,
    icon: getProductIcon(product),
}));

export default function SearchOverlay({
    isOpen,
    onClose,
}: SearchOverlayProps) {
    const router = useRouter();

    const [query, setQuery] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    /*
     * Focus input when search opens
     */
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    /*
     * Close when pressing Escape
     */
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    /*
     * Search products
     */
    const filteredProducts = productsWithIcons.filter((product) => {
        if (!query.trim()) return false;

        const search = query.toLowerCase();

        return (
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search)
        );
    });

    /*
     * Submit search
     */
    const handleSearch = (searchQuery?: string) => {
        const value = searchQuery ?? query;

        if (!value.trim()) return;

        router.push(`/search?q=${encodeURIComponent(value.trim())}`);

        onClose();
    };

    /*
     * Recent search click
     */
    const handleRecentSearch = (search: string) => {
        setQuery(search);
        handleSearch(search);
    };

    /*
     * Close when clicking outside
     */
    const handleBackdropClick = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[2px]"
            onMouseDown={handleBackdropClick}
        >
            <div
                ref={overlayRef}
                className="
           mx-auto
          mt-22.5
          w-[calc(100%-32px)]
          max-w-192.5
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          animate-in
          fade-in
          slide-in-from-top-3
          duration-200
        "
            >
                {/* ================= SEARCH INPUT ================= */}

                <div className="flex items-center border-b border-gray-100 px-5">
                
                    <FiSearch size={22} />

                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                        placeholder="Search for products, brands and more..."
                        className="
              h-14
              flex-1
              bg-transparent
              px-3
              text-sm
              text-gray-800
              outline-none
              placeholder:text-gray-400
            "
                    />

                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="
                rounded-full
                p-1.5
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-gray-700
              "
                        >
                            <FiX size={18} />
                        </button>
                    )}

                    <button
                        onClick={onClose}
                        className="
              ml-2
              rounded-full
              p-1.5
              text-gray-400
              transition
              hover:bg-gray-100
              hover:text-gray-700
            "
                    >
                        <FiX size={18} />
                    </button>
                </div>

                {/* ================= SEARCH RESULTS ================= */}

                {query.trim() ? (
                    <div className="max-h-150 overflow-y-auto">
                        {filteredProducts.length > 0 ? (
                            <>
                                {/* Products heading */}

                                <div className="flex items-center justify-between px-5 pt-5 pb-2">
                                    <div className="flex items-center gap-2">
                                    
                                        <FiShoppingCart size={18} />

                                        <h3 className="text-sm font-semibold text-gray-800">
                                            Products
                                        </h3>
                                    </div>

                                    <button
                                        onClick={() => handleSearch()}
                                        className="
                      flex
                      items-center
                      gap-1
                      text-xs
                      font-semibold
                      text-violet-600
                      hover:text-violet-700
                    "
                                    >
                                        View all results
                                        <FiChevronRight size={16} />
                                    </button>
                                </div>

                                {/* Product list */}

                                <div className="px-4 pb-4">
                                    {filteredProducts.slice(0, 4).map((product) => (
                                        <div
                                            key={product.id}
                                            className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        p-2
                        transition
                        hover:bg-gray-50
                      "
                                        >
                                            {/* Image */}

                                            <div
                                                className="
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-lg
                          bg-gray-100
                        "
                                            >
                                                <span
                                                    aria-label={product.name}
                                                    className="text-2xl transition duration-200 group-hover:scale-105"
                                                >
                                                    {product.icon}
                                                </span>
                                            </div>

                                            {/* Product information */}

                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-medium text-gray-800">
                                                    {product.name}
                                                </p>

                                                <p className="mt-0.5 text-xs text-gray-400">
                                                    {product.brand}
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-gray-900">
                                                    ₹{product.price.toLocaleString("en-IN")}
                                                </p>
                                            </div>

                                            {/* Add to cart */}

                                            <button
                                                className="
                          hidden
                          rounded-lg
                          bg-violet-600
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-white
                          transition
                          hover:bg-violet-700
                          sm:block
                        "
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Categories */}

                                <div className="border-t border-gray-100 px-5 py-4">
                                    <div className="mb-2 flex items-center gap-2">
                                    
                                        <FiGrid size={16} />

                                        <h3 className="text-sm font-semibold text-gray-800">
                                            Categories
                                        </h3>
                                    </div>

                                    <div className="space-y-1">
                                        {categories
                                            .filter((category) =>
                                                category.name
                                                    .toLowerCase()
                                                    .includes(query.toLowerCase())
                                            )
                                            .slice(0, 3)
                                            .map((category) => (
                                                <button
                                                    key={category.name}
                                                    className="
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-lg
                            px-2
                            py-2
                            text-left
                            text-sm
                            text-gray-600
                            transition
                            hover:bg-gray-50
                            hover:text-violet-600
                          "
                                                >
                                                    <span className="flex items-center gap-2">
                                                        <span>{category.icon}</span>
                                                        {category.name}
                                                    </span>

                                                    {/* <ChevronRight size={15} /> */}
                                                    <FiChevronRight size={16} />
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            /* No results */

                            <div className="px-6 py-14 text-center">
                                <div
                                    className="
                    mx-auto
                    mb-4
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-violet-50
                  "
                                >
                                    <FiSearch size={22} />
                                </div>

                                <h3 className="text-sm font-semibold text-gray-800">
                                    No products found
                                </h3>

                                <p className="mt-1 text-xs text-gray-400">
                                    Try searching for another product or category.
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    /* ================= EMPTY SEARCH STATE ================= */

                    <div className="grid max-h-125 overflow-y-auto md:grid-cols-2">
                        {/* LEFT SIDE */}

                        <div className="border-b border-gray-100 p-5 md:border-r md:border-b-0">
                            {/* Recent searches */}

                            <div>
                                <div className="mb-3 flex items-center gap-2">

                                    <FiClock size={16} />

                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Recent Searches
                                    </h3>
                                </div>

                                <div className="space-y-1">
                                    {recentSearches.map((search) => (
                                        <button
                                            key={search}
                                            onClick={() => handleRecentSearch(search)}
                                            className="
                        group
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-2
                        py-2.5
                        text-left
                        text-sm
                        text-gray-600
                        transition
                        hover:bg-violet-50
                        hover:text-violet-600
                      "
                                        >
                                            <FiClock size={16} />

                                            <span className="flex-1 truncate">
                                                {search}
                                            </span>

                                            <FiX size={18} onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Popular searches */}

                            <div className="mt-5 border-t border-gray-100 pt-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <FiTrendingUp size={16} />

                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Popular Searches
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {popularSearches.map((search) => (
                                        <button
                                            key={search}
                                            onClick={() => handleRecentSearch(search)}
                                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-600 transition
                                                hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
                                        >
                                            {search}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}

                        <div className="p-5">
                            <div className="mb-3 flex items-center gap-2">

                                <FiGrid size={16} />

                                <h3 className="text-sm font-semibold text-gray-800">
                                    Popular Categories
                                </h3>
                            </div>

                            <div className="space-y-1">
                                {categories.map((category) => (
                                    <button
                                        key={category.name}
                                        className="flex w-full items-center justify-between rounded-xl px-2 py-2.5 text-left transition hover:bg-violet-50"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span
                                                className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-sm"
                                            >
                                                {category.icon}
                                            </span>

                                            <span className="text-sm text-gray-600">
                                                {category.name}
                                            </span>
                                        </span>

                                        <FiChevronRight size={16} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}