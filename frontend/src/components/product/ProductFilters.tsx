"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );

    const [category, setCategory] = useState(
        searchParams.get("category") || ""
    );

    const [minPrice, setMinPrice] = useState(
        searchParams.get("minPrice") || ""
    );

    const [maxPrice, setMaxPrice] = useState(
        searchParams.get("maxPrice") || ""
    );

    const [sort, setSort] = useState(
        searchParams.get("sort") || ""
    );

    const updateFilters = (
        key: string,
        value: string
    ) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        // Reset pagination whenever a filter changes
        params.delete("page");

        router.push(`/products?${params.toString()}`);
    };

    const handleSearch = () => {
        updateFilters("search", search);
    };

    const handleReset = () => {
        setSearch("");
        setCategory("");
        setMinPrice("");
        setMaxPrice("");
        setSort("");

        router.push("/products");
    };

    return (
        <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

                {/* Search */}
                <div className="lg:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Search
                    </label>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-black"
                        />

                        <button
                            type="button"
                            onClick={handleSearch}
                            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Category
                    </label>

                    <select
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            updateFilters("category", e.target.value);
                        }}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                    >
                        <option value="">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home-living">Home & Living</option>
                        <option value="beauty">Beauty</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>

                {/* Min Price */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Min Price
                    </label>

                    <input
                        type="number"
                        placeholder="₹0"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        onBlur={() => updateFilters("minPrice", minPrice)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
                    />
                </div>

                {/* Max Price */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Max Price
                    </label>

                    <input
                        type="number"
                        placeholder="₹100000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        onBlur={() => updateFilters("maxPrice", maxPrice)}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
                    />
                </div>
            </div>

            {/* Sort + Reset */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                {/* Sort */}
                <div className="w-full sm:max-w-xs">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Sort By
                    </label>

                    <select
                        value={sort}
                        onChange={(e) => {
                            setSort(e.target.value);
                            updateFilters("sort", e.target.value);
                        }}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                    >
                        <option value="">Default</option>
                        <option value="newest">Newest</option>
                        <option value="price-asc">
                            Price: Low to High
                        </option>
                        <option value="price-desc">
                            Price: High to Low
                        </option>
                        <option value="rating">
                            Highest Rated
                        </option>
                    </select>
                </div>

                {/* Reset */}
                <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-black hover:text-black"
                >
                    Reset Filters
                </button>
            </div>
        </section>
    );
}