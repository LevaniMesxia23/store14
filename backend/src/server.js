import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js'; 
import app from "express"

const app = express();
const port = process.env.PORT || 3000; 

const connectToMongo = async () => {
  try {
    const connectionUrl = process.env.MONGO_URL;
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

connectToMongo();

app.use(express.json()); 

app.use('/api/products', productRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
