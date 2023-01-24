import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import orders from "./routes/orders";
import products from "./routes/products";

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use("/orders", orders);
app.use("products", products);
// app.use('/users', users);

app.get("/", (_req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
