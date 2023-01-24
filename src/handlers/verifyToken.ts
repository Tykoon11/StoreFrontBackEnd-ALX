import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (
  req: express.Request,
  res: express.Response,
  next: any
) => {
  try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string);

    next();
  } catch (error) {
    res.status(401);
    res.send("Invalid token:");
  }
};

export default verifyToken;
