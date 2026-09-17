import dotenv from "dotenv";

dotenv.config();

export const env = {
    port: Number(process.env.PORT) || 5000,
    mongodbUri: process.env.MONGO_URI as string,
};
