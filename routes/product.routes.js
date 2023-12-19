import express from "express";
import { createProduct, getProducts, deleteProducts, getProductsByCategory } from "../controllers//products.controllers.js";
import { authVerification } from "../middlewares/auth.js";
const router = express.Router()
//router con capacidad de usar get post y demás

router.post("/createProduct", createProduct)
router.get("/getProducts",getProducts)
router.get("/getProductsCategory/:category", getProductsByCategory)
router.delete("/deleteProducts/:id", deleteProducts)


export default router