import type { ProductFilters, ProductsResponse } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// GET all products
export const getProducts = async (
    filters: ProductFilters = {}
): Promise<ProductsResponse> => {
    const params = new URLSearchParams();

    if (filters.search) {
        params.set("search", filters.search);
    }

    if (filters.category) {
        params.set("category", filters.category);
    }

    if (filters.minPrice !== undefined) {
        params.set("minPrice", String(filters.minPrice));
    }

    if (filters.maxPrice !== undefined) {
        params.set("maxPrice", String(filters.maxPrice));
    }

    if (filters.sort) {
        params.set("sort", filters.sort);
    }

    if (filters.page !== undefined) {
        params.set("page", String(filters.page));
    }

    if (filters.limit !== undefined) {
        params.set("limit", String(filters.limit));
    }

    const queryString = params.toString();

    const response = await fetch(
        `${API_URL}/products${queryString ? `?${queryString}` : ""}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const result: unknown = await response.json();

    if (
        typeof result !== "object"
        || result === null
        || !("data" in result)
        || !Array.isArray(result.data)
    ) {
        throw new Error("Invalid products response from API");
    }

    return result as ProductsResponse;
};

// GET product by id
export const getProductBySlug = async (slug: string) => {
    const response = await fetch(
        `${API_URL}/products/slug/${slug}`
    );

    // console.log("STATUS:", response.status);
    // console.log("URL:", response.url);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }
    // console.log("Response: ",response);

    const result = await response.json();
    // console.log("Result: ", result);

    return result.data;
};