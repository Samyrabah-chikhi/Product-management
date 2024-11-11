import express from "express";
import { connectDB } from "./config/db.js";

import productRoute from "./routes/product.route.js";

const app = express();

app.use(express.json());

app.use("/api/products", productRoute);

app.listen(5000, () => {
  connectDB();
  console.log("Server running on port 5000");
});
