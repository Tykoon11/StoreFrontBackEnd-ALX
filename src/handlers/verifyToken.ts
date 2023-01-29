import express, { NextFunction } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const verifyToken = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const authorizationHeader = req.headers.authorization as string
    const token = authorizationHeader.split(" ")[1]
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string)
    console.log(decoded)

    next()
  } catch (error) {
    res.status(401)
    res.send(`Invalid token: ${error}`)
  }
}

export default verifyToken
