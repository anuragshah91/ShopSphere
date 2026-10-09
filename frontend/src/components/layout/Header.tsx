"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FiHeart,
    FiMenu,
    FiSearch,
    FiShoppingBag,
    FiUser,
    FiX,
} from "react-icons/fi";
import SearchOverlay from "../searchOverlay/SearchOverlay";


const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/product" },
    { name: "Categories", href: "/categories" },
    { name: "New Arrivals", href: "/products?sort=newest" },
];

export default function Header() {

    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    {/* LOGO  */}
                    <Link
                        href="/"
                        className="text-xl font-semibold tracking-[-0.04em] text-gray-950"
                    >
                        {/* Shop<span className="text-gray-400">Sphere</span> */}
                        Shop<span className="text-accent">Sphere</span>
                    </Link>

                    {/* Dekstop Navigation  */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-950"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Dekstop Action  */}
                    <div className="hidden items-center gap-2 md:flex">
                        <button
                            type="button"
                            aria-label="Search"
                            onClick={() => setSearchOpen(true)}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
                        >
                            <FiSearch size={18} />
                        </button>

                        <button
                            type="button"
                            aria-label="Wishlist"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
                        >
                            <FiHeart size={18} />
                        </button>

                        <button
                            type="button"
                            aria-label="Account"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
                        >
                            <FiUser size={18} />
                        </button>

                        <button
                            type="button"
                            aria-label="Shopping bag"
                            className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full  text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
                        //  className="relative rounded-full p-2.5 text-muted transition-all duration-200 hover:bg-gray-100 hover:text-foreground"
                        >
                            <FiShoppingBag size={18} />

                            {/* <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-gray-950 ring-1 ring-gray-200">
                            0
                        </span> */}
                            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white">
                                0
                            </span>
                        </button>
                    </div>

                    {/* Mobile Actions  */}
                    <div className="flex items-center gap-1 md:hidden">
                        <button
                            type="button"
                            aria-label="Shopping bag"
                            className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700"
                        >
                            <FiShoppingBag size={19} />

                            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gray-950 px-1 text-[9px] font-bold text-white">
                                0
                            </span>
                        </button>

                        <button
                            type="button"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMenuOpen((current) => !current)}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700"
                        >
                            {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu  */}
                {menuOpen && (
                    <div className="border-t border-black/5 bg-white md:hidden">
                        <nav className="mx-auto max-w-7xl px-6 py-5">
                            <div className="flex flex-col">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="border-b border-gray-100 py-4 text-sm font-medium text-gray-700 transition hover:text-gray-950"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div>
                                    <button
                                        type="button"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium"
                                    >
                                        <FiSearch size={17} />
                                        Search
                                    </button>

                                    <button
                                        type="button"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium"
                                    >
                                        <FiUser size={17} />
                                        Account
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                )}

            </header>
            {/* ================= SEARCH ================= */}

            <SearchOverlay
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
            />

        </>
    );
};