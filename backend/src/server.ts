import express from 'express';
import cors from "cors";
import { env } from './config/env';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

connectDB();

// Product Routes 
app.use("/api/products", productRoutes);

app.get("/", (_req,res) => {
    res.json({
        message: "ShopSphere Backend is running ",
    });
});

app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
});
