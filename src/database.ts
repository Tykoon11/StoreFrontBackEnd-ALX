import dotenv from "dotenv"
import { Pool } from "pg"

dotenv.config()

const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DATABASE,
  ENV,
  POSTGRES_TEST_DATABASE,
} = process.env

let client: Pool

if (ENV == "dev") {
  client = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    database: POSTGRES_DATABASE,
  })
} else {
  client = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    database: POSTGRES_TEST_DATABASE,
  })
}

export default client
