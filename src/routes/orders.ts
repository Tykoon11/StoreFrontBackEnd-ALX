import express from "express";
import { Order, OrderStore } from "../models/orders";

const orders = express.Router();

orders.get("/show", async (req: express.Request, res: express.Response) => {
  const order = await new OrderStore();
  const userId = req.body.userId as number;
  try {
    const result = await order.show(userId);
    res.send(result);
  } catch (err) {
    res.send(`unable to show this order ${err}`);
  }
});

export default orders;
