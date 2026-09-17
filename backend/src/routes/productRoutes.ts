import { Router } from "express";
import { 
    createProduct, 
    deleteProduct, 
    getProduct,
    getProductById,
    getProductBySlug,
    updateProduct
} from "../controllers/productController";

const router = Router();

router.post("/", createProduct)
router.get("/", getProduct);
router.get("/slug/:slug", getProductBySlug);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;