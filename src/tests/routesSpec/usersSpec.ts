import app from "../../index"
import supertest from "supertest"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const request = supertest(app)

describe("Test endpoint response", () => {
  it("posts the create users endpoint", async () => {
    const response = await request.post("/users/create")
    expect(response.status).toBe(200)
  })

  it("gets the show users endpoint", async () => {
    const token = jwt.sign({ create: {} }, process.env.TOKEN_SECRET as string)
    const response = await request
      .get("/users/show")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toBe(200)
  })

  it("gets the users index endpoint", async () => {
    const token = jwt.sign({ create: {} }, process.env.TOKEN_SECRET as string)
    const response = await request
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toBe(200)
  })
})
