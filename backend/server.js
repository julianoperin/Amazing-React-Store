import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app = express();
mongoose.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);

app.get(`/api/product/:id`, (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
