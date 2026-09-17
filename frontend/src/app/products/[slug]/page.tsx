import ProductDetails from "@/components/product/ProductDetails";
import { getProductBySlug } from "@/lib/api";
import type { Product } from "@/types/product";

type ProductPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

// export default async function ProductPage({
//     params,
// }: ProductPageProps) {
//     const { slug } = await params;

//     let product: Product;

//     try {
//         product = await getProductBySlug(slug);
//     } catch (error) {
//         console.error("Failed to fetch product:", error);

//         return (
//             <main className="flex min-h-[70vh] items-center justify-center">
//                 <p className="text-gray-500">
//                     Product not found.
//                 </p>
//             </main>
//         );
//     }

//     return (
//         <main className="mx-auto max-w-7xl px-6 py-16">
//             <div className="grid gap-12 lg:grid-cols-2">
//                 {/* Product Image */}
//                 <div className="aspect-square overflow-hidden rounded-3xl bg-[#f4f4f5]">
//                     {product.images?.[0] ? (
//                         <img
//                             src={product.images[0]}
//                             alt={product.name}
//                             className="h-full w-full object-cover"
//                         />
//                     ) : (
//                         <div className="flex h-full items-center justify-center text-gray-400">
//                             No Image
//                         </div>
//                     )}
//                 </div>

//                 {/* Product Information */}
//                 <div className="flex flex-col justify-center">
//                     <p className="text-sm font-medium text-gray-500">
//                         {product.category}
//                     </p>

//                     <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
//                         {product.name}
//                     </h1>

//                     <p className="mt-3 text-sm text-gray-500">
//                         {product.brand}
//                     </p>

//                     {/* Rating */}
//                     <div className="mt-5 flex items-center gap-2">
//                         <span>★</span>

//                         <span className="font-semibold">
//                             {product.rating}
//                         </span>

//                         <span className="text-sm text-gray-500">
//                             ({product.reviewsCount} reviews)
//                         </span>
//                     </div>

//                     {/* Price */}
//                     <div className="mt-6 flex items-center gap-3">
//                         <span className="text-3xl font-bold text-gray-900">
//                             ₹{product.price.toLocaleString("en-IN")}
//                         </span>

//                         {product.originalPrice && (
//                             <span className="text-lg text-gray-400 line-through">
//                                 ₹{product.originalPrice.toLocaleString("en-IN")}
//                             </span>
//                         )}
//                     </div>

//                     {/* Description */}
//                     <p className="mt-6 leading-7 text-gray-600">
//                         {product.description}
//                     </p>

//                     {/* Stock */}
//                     <p className="mt-6 text-sm font-medium">
//                         {product.stock > 0
//                             ? `${product.stock} items available`
//                             : "Out of stock"}
//                     </p>

//                     {/* Add to Cart */}
//                     <button
//                         type="button"
//                         disabled={product.stock === 0}
//                         className="mt-8 w-full rounded-xl bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#292929] disabled:cursor-not-allowed disabled:bg-gray-300"
//                     >
//                         {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
//                     </button>
//                 </div>
//             </div>
//         </main>
//     );
// }

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { slug } = await params;

    try {
        const product = await getProductBySlug(slug);

        return (
            <main className="mx-auto max-w-7xl px-6 py-16">
                <ProductDetails product={product} />
            </main>
        );

    } catch (error) {
        console.error("Failed to fetch product:", error);

        return (
            <main className="flex min-h-[70vh] items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Product not found
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        The product you are looking for does not exist.
                    </p>
                </div>
            </main>
        );
    }
}