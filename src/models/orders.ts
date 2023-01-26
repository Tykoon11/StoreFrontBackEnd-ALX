import client from "../database"

export type Order = {
  id?: number
  user_id: number
  status: string
}

export class OrderStore {
  async show(user_id: number): Promise<Order> {
    try {
      const conn = await client.connect()
      const sql = "SELECT * FROM orders WHERE user_id = ($1)"
      const result = await conn.query(sql, [user_id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`cannot show orders ${err}`)
    }
  }

  async completeOrder(user_id: number): Promise<Order[]> {
    try {
      const conn = await client.connect()
      const sql =
        "SELECT * FROM orders WHERE user_id = ($1) AND status = 'complete'"
      const result = await conn.query(sql, [user_id])
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`cannot show this user ${err}`)
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      const conn = await client.connect()
      const sql =
        "INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *"
      const result = await conn.query(sql, [o.user_id, o.status])
      conn.release()
      return result.rows[0]
    } catch {
      throw new Error(`cannot create order`)
    }
  }

  async addProduct(
    quantity: number,
    order_id: number,
    product_id: number
  ): Promise<{ quantity: number; order_id: number; product_id: number }> {
    // Checking if order is closed
    try {
      const orderSql = "SELECT * FROM orders WHERE id=($1)"
      const conn = await client.connect()
      const result = await conn.query(orderSql, [order_id])
      const order = result.rows[0]

      if (order.status !== "active") {
        throw new Error(
          `Could not add product ${product_id} to order ${order_id} because order status is ${order.status}`
        )
      }
      conn.release()
    } catch (err) {
      throw new Error(`${err}`)
    }

    try {
      const conn = await client.connect()
      const sql =
        "INSERT INTO orders_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *"
      const result = await conn.query(sql, [quantity, order_id, product_id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`cannot insert order_product ${err}`)
    }
  }
}
