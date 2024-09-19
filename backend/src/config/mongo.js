import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const connectionUrl = process.env.MONGO_URL;
    await mongoose.connect(connectionUrl); 
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); 
  }
};

export default connectToMongo;
