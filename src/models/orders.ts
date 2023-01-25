import client from "../database";

export type Order = {
  id?: number;
  productId: number;
  quantity: number;
  userId: number;
  status: string;
};

export class OrderStore {
  async show(userId: number): Promise<Order> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM orders WHERE userId = ($1)";
      const result = await conn.query(sql, [userId]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot show orders ${err}`);
    }
  }

  async completeOrder(userId: number): Promise<Order>;
}
