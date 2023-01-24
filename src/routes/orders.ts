import express from "express";
import { Order, OrderStore } from "../models/orders";

const orders = express.Router();

orders.get("/orders", async (req: express.Request, res: express.Response) => {
  const order = await new OrderStore();
  const userId = req.body.userId as number;
  try {
    const result = await order.show(userId);
  } catch (err) {
    throw new Error(`unable to show this order ${err}`);
  }
});
