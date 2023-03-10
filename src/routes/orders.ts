import express from "express"
import { Order, OrderStore } from "../models/orders"
import verifyToken from "../handlers/verifyToken"

const orders = express.Router()

orders.get(
  "/:id/show",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const order = new OrderStore()
    const userId = req.params.userId
    try {
      const result = await order.show(userId as unknown as number)
      res.send(result)
    } catch (err) {
      res.send(`unable to show this order ${err}`)
    }
  }
)

orders.get(
  "/:id/complete",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const order = new OrderStore()
    const userId = req.params.userId as unknown as number
    try {
      const result = await order.completeOrder(userId)
      res.send(result)
    } catch (err) {
      res.send(`unable to show orders ${err}`)
    }
  }
)

orders.post(
  "/create",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const order = new OrderStore()
    const userId = req.body.userId as number
    const status = req.body.status as string

    const create: Order = {
      user_id: userId,
      status: status,
    }
    try {
      const result = await order.create(create)
      console.log(result)
      res.send(result)
    } catch (err) {
      res.send(`unable to create order ${err}`)
    }
  }
)

export default orders
