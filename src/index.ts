import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import orders from "./routes/orders";
import users from "./routes/users";
import ranks from "./routes/rankServices";
import products from "./routes/products";

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/users", users);
app.use("/products", products);
app.use("/orders", orders);
app.use("/ranks", ranks);

app.get("/", (_req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
