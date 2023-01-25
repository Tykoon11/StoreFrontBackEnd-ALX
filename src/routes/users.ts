import express from "express";
import jwt from "jsonwebtoken";
import { User, UsersStore } from "../models/users";
import dotenv from "dotenv";
import verifyToken from "../handlers/verifyToken";

const users = express.Router();
dotenv.config();

users.get(
  "/",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const user = await new UsersStore();
    try {
      const result = await user.index();
      res.send(result);
    } catch (err) {
      res.send(`unable to get index ${err}`);
    }
  }
);

users.get(
  "/show",
  verifyToken,
  async (req: express.Request, res: express.Response) => {
    const user = await new UsersStore();
    const id = req.body.id as number;
    try {
      const result = await user.show(id);
      res.send(result);
    } catch (err) {
      res.send(`unable to show this user ${err}`);
    }
  }
);

users.post("/create", async (req: express.Request, res: express.Response) => {
  const user = await new UsersStore();
  const firstname = req.body.firstname as string;
  const lastname = req.body.lastname as string;
  const password = req.body.password as string;

  const create: User = {
    firstname: firstname,
    lastname: lastname,
    password: password,
  };

  console.log(create);
  try {
    const result = await user.create(create);
    console.log(result);
    var token = jwt.sign(
      { create: result },
      process.env.TOKEN_SECRET as string
    );
    res.send(token);
  } catch (err) {
    res.send(`unable to create user ${err}`);
  }
});

export default users;
