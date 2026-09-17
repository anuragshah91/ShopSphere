import { Request, Response } from "express";
import Product from "../models/Product";
import { success } from "zod";

// Create Product Post /api/products
export const createProduct = async (
    req: Request,
    res: Response,
): Promise<void> => {

    try {
        // console.log("REQ BODY:", req.body);
        // console.log("Content TYPE:", req.headers["content-type"]);
        // console.log("BODY:", req.body);

        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    } catch (error) {
        console.error("Created Product error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create product",
        });
    }
};

// Get All Product Get /api/products
export const getProduct = async (
    req: Request,
    res: Response,
): Promise<void> => {

    try {
        const products = await Product.find({
            isActive: true,
        }).sort({ creaedAt: -1 });

        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });

    } catch (error) {
        console.error("Get product error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
        });
    }
};

// Get Single Product
export const getProductById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (!product) {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });

            return;
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product,
        });

    } catch (error) {
        console.log("Get Product by ID error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch product",
        });
    }

};

// Update Product Api
export const updateProduct = async (
    req: Request,
    res: Response
): Promise<void>  => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(
            {_id: id}, 
            req.body,
            {
                returnDocument: "after"
            }
        );

        if(!product) {
            res.status(404).json({
                success: false,
                message: "product not found",
            })
            return;
        }

        res.status(200).json({
            success: true,
            message: "Prouduct update successfully",
            data: product,
        })

    } catch (error) {
        console.error("Update product error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update product"
        });
    }
};

// DELETE Product API 
export const deleteProduct = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);
        
        if(!product) {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Product delete successfully",
        });

    } catch (error) {
        console.error("Delete product error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete product",
        });
    }
}

// GET product by Slug 
export const getProductBySlug = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const { slug } = req.params;

        const product = await Product.findOne({
            slug,
            isActive: true,
        });

        if (!product) {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: product,
        });

    } catch (error) {
        console.log("Get Product by slug error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch product",
        });
    }
};