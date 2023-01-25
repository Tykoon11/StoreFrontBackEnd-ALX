import express from "express";
import { OrderStore } from "../models/orders";
import verifyToken from "../handlers/verifyToken";

const orders = express.Router();

orders.get(
  "/show",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const order = await new OrderStore();
    const userId = req.body.userId as number;
    try {
      const result = await order.show(userId);
      res.send(result);
    } catch (err) {
      res.send(`unable to show this order ${err}`);
    }
  }
);

orders.get(
  "/complete",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const order = await new OrderStore();
    const userId = req.body.userId as number;
    try {
      const result = await order.completeOrder(userId);
    } catch (err) {
      res.send(`unable to show orders ${err}`);
    }
  }
);

export default orders;
