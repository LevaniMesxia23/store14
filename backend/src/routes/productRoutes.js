import express from 'express';
import { getAllProduct, addProduct } from '../controllers/burchuProducts.js'; 

const router = express.Router();

router.get('/', getAllProduct); 
router.post('/', addProduct); 

export default router;