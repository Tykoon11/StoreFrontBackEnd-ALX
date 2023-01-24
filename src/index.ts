import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import orders from "./routes/orders";

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT;

app.use(bodyParser.json());


app.use("/orders", orders);

app.get("/", (_req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
