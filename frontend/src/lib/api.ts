const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const  result = await response.json();

    return result.data;
};

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