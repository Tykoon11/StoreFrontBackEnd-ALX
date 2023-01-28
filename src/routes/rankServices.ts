import express from "express"
import { rankService } from "../services/rankServices"

const ranks = express.Router()

ranks.get("/topfive", async (req: express.Request, res: express.Response) => {
  try {
    const rank = await new rankService()
    const result = await rank.rankTopFive()
    res.send(result)
  } catch (err) {
    res.send(`unable to get top-five ${err}`)
  }
})

export default ranks
