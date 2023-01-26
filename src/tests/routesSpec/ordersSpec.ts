import app from "../../index"
import supertest from "supertest"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const request = supertest(app)

describe("Test endpoint response", () => {
  it("posts the create orders endpoint", async () => {
    const token = jwt.sign({ create: {} }, process.env.TOKEN_SECRET as string)
    const response = await request
      .post("/orders/create")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toBe(200)
  })

  it("gets the show orders endpoint", async () => {
    const token = jwt.sign({ create: {} }, process.env.TOKEN_SECRET as string)
    const response = await request
      .get("/orders/show")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toBe(200)
  })

  it("gets the completeOrders endpoint", async () => {
    const token = jwt.sign({ create: {} }, process.env.TOKEN_SECRET as string)
    const response = await request
      .get("/orders/complete")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toBe(200)
  })
})
