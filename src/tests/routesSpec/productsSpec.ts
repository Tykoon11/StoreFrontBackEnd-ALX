import app from "../../index"
import supertest from "supertest"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const request = supertest(app)

describe("Test endpoint response", () => {
  it("posts the create products endpoint", async () => {
    const token = jwt.sign({ create: {} }, process.env.TOKEN_SECRET as string)
    const response = await request
      .post("/products/create")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toBe(200)
  })

  it("gets the show products endpoint", async () => {
    const response = await request.get("/products/show")
    expect(response.status).toBe(200)
  })

  it("gets the products index endpoint", async () => {
    const response = await request.get("/products")
    expect(response.status).toBe(200)
  })

  it("gets the rankCat endpoint", async () => {
    const token = jwt.sign({ create: {} }, process.env.TOKEN_SECRET as string)
    const response = await request
      .get("/ranks/rankcat")
      .set("Authorization", `Bearer ${token}`)
    expect(response.status).toBe(200)
  })
})
