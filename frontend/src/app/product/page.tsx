import ProductGrid from "@/components/product/ProductGrid";
import { getProducts } from "@/lib/api";
import ProductFilters from "@/components/product/ProductFilters";

type ProductsPageProps = {
    searchParams: Promise<{
        search?: string;
        category?: string;
        minPrice?: string;
        maxPrice?: string;
        sort?: string;
        page?: string;
    }>;
};

export default async function ProductPage({
    searchParams,
}: ProductsPageProps) {

    const params = await searchParams
    const sort = params.sort === "newest"
        || params.sort === "price-asc"
        || params.sort === "price-desc"
        || params.sort === "rating"
        ? params.sort
        : undefined;

    const result = await getProducts({
        search: params.search,
        category: params.category,
        minPrice: params.minPrice
            ? Number(params.minPrice)
            : undefined,
        maxPrice: params.maxPrice
            ? Number(params.maxPrice)
            : undefined,
        sort,
        page: params.page
            ? Number(params.page)
            : 1,
        limit: 12,
    });
    return (
        <main className="mx-auto w-full max-w-7xl px-6 py-14">
            {/* Header */}
            <div className="mb-12">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                    Shop
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                    All Products
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                    Explore our collection of carefully selected products.
                </p>
            </div>

            {/* Filters */}
            <ProductFilters />

            {/* Products  */}
            <ProductGrid products={result.data} />
        </main>
    )
}