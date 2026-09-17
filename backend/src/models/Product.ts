import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    category: string;
    brand: string;
    price: number;
    originalPrice?: number;
    images: string[];
    stock: number;
    rating: number;
    reviewsCount: number;
    isFeatured: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        brand: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        originalPrice: {
            type: Number,
            min: 0,
        },

        images: {
            type: [String],
            // required: true,
            default: []
        },

        stock: {
            type: Number,
            min: 0,
            max: 50,
            default: 0,
        },

        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },

        reviewsCount: {
            type: Number,
            min: 0,
            default: 0,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        isActive: {
            type: Boolean,
            dafault: true,
        },
    },
    {
        timestamps: true,
    },
);

const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;