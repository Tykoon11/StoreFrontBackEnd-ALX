import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_DATABASE } = process.env;

let client: Pool;

client = new Pool({
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  database: POSTGRES_DATABASE,
});

export default client;
