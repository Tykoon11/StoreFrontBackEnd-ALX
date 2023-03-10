import express from "express"
import { Product, ProductsStore } from "../models/products"
import verifyToken from "../handlers/verifyToken"

const products = express.Router()

products.get("/", async (req: express.Request, res: express.Response) => {
  const product = new ProductsStore()
  try {
    const result = await product.index()
    res.send(result)
  } catch (err) {
    res.send(`unable to get index ${err}`)
  }
})

products.get(
  "/:id/show",
  async (req: express.Request, res: express.Response) => {
    const product = new ProductsStore()
    const id = req.params.id as unknown as number
    try {
      const result = await product.show(id)
      res.send(result)
    } catch (err) {
      res.send(`unable to get product ${err}`)
    }
  }
)

products.post(
  "/create",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const product = new ProductsStore()

    const name = req.body.name as string
    const price = req.body.price as number
    const category = req.body.category as string

    const create: Product = {
      name: name,
      price: price,
      category: category,
    }
    try {
      const result = await product.create(create)
      res.send(result)
    } catch (err) {
      res.send(`unable to create product ${err}`)
    }
  }
)

products.get(
  "/rankcat",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const product = new ProductsStore()
    const category = req.body.category as string
    try {
      const result = await product.rankCat(category)
      res.send(result)
    } catch (err) {
      res.send(`unable to get product ${err}`)
    }
  }
)

export default products
