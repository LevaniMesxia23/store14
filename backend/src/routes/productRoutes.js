import express from 'express';
import { getAllProduct, addProduct } from '../controllers/burchuProducts.js'; 
import multer from 'multer';
import path from 'path';

// Configure multer storage and file naming
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Destination folder for uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to the filename
  }
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed (jpeg, jpg, png)'));
  }
};

const upload = multer({ storage, fileFilter });

const router = express.Router();

router.get('/', getAllProduct); 
router.post('/', upload.single("image"), addProduct); // Add 'upload.single' for image uploading

export default router;
