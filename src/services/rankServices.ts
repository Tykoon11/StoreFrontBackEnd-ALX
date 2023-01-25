import client from "../database";

export class rankService {
  async rankTopFive(): Promise<{ name: string; quantity: number }[]> {
    try {
      const conn = await client.connect();
      const sql =
        "SELECT name, quantity FROM products INNER JOIN orders ON products.id = orders.product_id";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot show topFive ${err}`);
    }
  }
}
