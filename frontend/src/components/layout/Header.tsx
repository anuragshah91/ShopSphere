import Link from "next/link";
import { FiHeart, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
]

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <span className="text-2xl font-bold tracking-tight text-foreground">
                        Shop<span className="text-accent">Sphere</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Search */}
                    <button
                        type="button"
                        aria-label="Search"
                        className="hidden rounded-full p-2.5 text-muted transition-all duration-200 hover:bg-gray-100 hover:text-foreground sm:block"
                    >
                        <FiSearch size={20} />
                    </button>

                    {/* Wishlist */}
                    <button
                        type="button"
                        aria-label="Wishlist"
                        className="hidden rounded-full p-2.5 text-muted transition-all duration-200 hover:bg-gray-100 hover:text-foreground sm:block"
                    >
                        <FiHeart size={20} />
                    </button>

                    {/* Cart */}
                    <button
                        type="button"
                        aria-label="Shopping cart"
                        className="relative rounded-full p-2.5 text-muted transition-all duration-200 hover:bg-gray-100 hover:text-foreground"
                    >
                        <FiShoppingBag size={20} />

                        <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white">
                            0
                        </span>
                    </button>

                    {/* Account */}
                    <button
                        type="button"
                        aria-label="Account"
                        className="hidden rounded-full p-2.5 text-muted transition-all duration-200 hover:bg-gray-100 hover:text-foreground sm:block"
                    >
                        <FiUser size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}