import { categories } from "@/data/categories";
import Link from "next/link";

export default function CategorySection() {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                            Explore
                        </p>

                        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                            Shop by category
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
                            Explore thoughtfully selected products across the categories you
                            use every day.
                        </p>
                    </div>

                    <Link
                        href="/categories"
                        className="group hidden items-center gap-2 text-sm font-semibold text-foreground sm:flex"
                    >
                        View all categories
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>

                {/* Categories  */}
                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/categories/${category.id}`}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-[#fafafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c9ff] hover:bg-[#f7f3ff] hover:shadow-lg sm:p-6"
                        >

                            {/* Background decoration */}
                            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#eee7ff] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Icon */}
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-accent shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
                                {category.icon}
                            </div>

                            {/* Content */}
                            <div className="relative mt-8">
                                <h3 className="text-base font-semibold tracking-tight text-foreground">
                                    {category.name}
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-muted">
                                    {category.description}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div className="relative mt-6 flex items-center text-xs font-semibold text-foreground">
                                Explore
                                <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile link */}
                <div className="mt-6 sm:hidden">
                    <Link
                        href="/categories"
                        className="text-sm font-semibold text-foreground"
                    >
                        View all categories →
                    </Link>
                </div>
            </div>
        </section>
    )
}