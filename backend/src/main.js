import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import productRouter from "./routes/productRoutes.js";
import SwaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();

connectToMongo();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.use("/api/products", productRouter);

app.use("/", ...SwaggerMiddleware());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
