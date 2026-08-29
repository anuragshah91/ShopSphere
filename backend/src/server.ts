import express from 'express';
import { env } from './config/env';

const app = express();

// const PORT = 5000;

app.get("/", (req,res) => {
    res.json({
        message: "ShopSphere Backend is running ",
    });
});

app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
});
