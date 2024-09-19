import express from "express";
import {
  addProduct,
  deleteMany,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/burchuProducts.js";  

const productRouter = express.Router();

productRouter.get("/products", getAllProduct); 

productRouter.post("/product", addProduct);

productRouter.put("/product/:id", updateProduct);

productRouter.delete("/product/:id", deleteProduct);

productRouter.delete("/products/inactive", deleteMany);

export default productRouter;
