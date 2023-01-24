import express from "express";
import { Product, ProductsStore } from "../models/products";

const products = express.Router();

products.get("/index", async (req: express.Request, res: express.Response) => {
  const product = await new ProductsStore();
  try {
    const result = await product.index();
    res.send(result);
  } catch (err) {
    res.send(`unable to get index ${err}`);
  }
});

products.get("/show", async (req: express.Request, res: express.Response) => {
  const product = await new ProductsStore();
  const id = req.body.id as number;
  try {
    const result = await product.show(id);
    res.send(result);
  } catch (err) {
    res.send(`unable to get product ${err}`);
  }
});

products.post(
  "/create",
  async (req: express.Request, res: express.Response) => {
    const product = await new ProductsStore();
    const name = req.body.name as string;
    const price = req.body.price as number;
    const category = req.body.category as string;

    const create = {
      name: name,
      price: price,
      category: category,
    };
    try {
      const result = await product.create(create);
      res.send(result);
    } catch (err) {
      res.send(`unable to create product ${err}`);
    }
  }
);
