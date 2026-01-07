import express from "express";
import userRoutes from "./user.routes.js";
import productRoutes from "./product.routes.js";
import test from "./test.js";

const router = express.Router();

router.use(userRoutes);
router.use(productRoutes);
router.use(test);

export default router;
