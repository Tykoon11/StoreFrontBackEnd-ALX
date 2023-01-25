import client from "../database";

export type Product = {
  id?: number;
  name: string;
  price: number;
  category?: string;
};

export class ProductsStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot show products index ${err}`);
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products WHERE id = ($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot show this product ${err}`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [p.name, p.price, p.category]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot create product ${err} `);
    }
  }

  async rankCat(category: string): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products WHERE category = ($1)";
      const result = await conn.query(sql, [category]);
      conn.release();
      return result.rows;
    } catch {
      throw new Error(`cannot show top 5`);
    }
  }
}
