import express from "express";
import { User, UsersStore } from "../models/users";

const users = express.Router();

users.get("/", async (req: express.Request, res: express.Response) => {
  const user = await new UsersStore();
  try {
    const result = await user.index();
    res.send(result);
  } catch (err) {
    res.send(`unable to get index ${err}`);
  }
});

users.get("/show", async (req: express.Request, res: express.Response) => {
  const user = await new UsersStore();
  const id = req.body.id as number;
  try {
    const result = await user.show(id);
    res.send(result);
  } catch (err) {
    res.send(`unable to show this user ${err}`);
  }
});

users.post("/create", async (req: express.Request, res: express.Response) => {
  const user = await new UsersStore();
  const firstName = req.body.firstName as string;
  const lastName = req.body.lastName as string;
  const password = req.body.password as string;

  const create: User = {
    firstName: firstName,
    lastName: lastName,
    password: password,
  };
  try {
    const result = await user.create(create);
    res.send(result);
  } catch (err) {
    res.send(`unable to create user ${err}`);
  }
});

export default users;
