import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connection = async () => {
  try {
    const connectionUrl = process.env.MONGO_URL;
    await mongoose.connect(connectionUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return error;
  }
};

export default connection;