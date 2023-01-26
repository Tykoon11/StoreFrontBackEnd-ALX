import { ProductsStore } from "../../models/products"
import app from "../../index"
import supertest from "supertest"

const request = supertest(app)

const store = new ProductsStore()

describe("Products Model", () => {
  it("should have a create method", () => {
    expect(store.create).toBeDefined()
  })

  it("should have an index method", () => {
    expect(store.index).toBeDefined()
  })

  it("should have a show method", () => {
    expect(store.show).toBeDefined()
  })

  it("should have a rankCat method", () => {
    expect(store.rankCat).toBeDefined()
  })

  it("create method should create a product", async () => {
    const result = await store.create({
      name: "iPhone 12",
      price: parseInt("300"),
      category: "electronics",
    })
    expect({
      name: result.name,
      price: result.price,
      category: result.category,
    }).toEqual({
      name: "iPhone 12",
      price: 300,
      category: "electronics",
    })
  })

  it("index method should return a list of products", async () => {
    const result = await store.index()
    expect(result).toEqual([
      {
        id: 1,
        name: "iPhone 12",
        price: 300,
        category: "electronics",
      },
    ])
  })

  it("show method should return the correct product", async () => {
    const result = await store.show(1)
    expect(result).toEqual({
      id: 1,
      name: "iPhone 12",
      price: 300,
      category: "electronics",
    })
  })

  it("rankCat method should return list od products in same category", async () => {
    const result = await store.rankCat("electronics")
    expect(result).toEqual([
      {
        id: 1,
        name: "iPhone 12",
        price: 300,
        category: "electronics",
      },
    ])
  })
})

describe("Test endpoint response", () => {
  it("posts the create products endpoint", async () => {
    const response = await request.post("/products/create")
    console.log(response.status)
    expect(response.status).toBe(200)
  })

  it("gets the show products endpoint", async () => {
    const response = await request.get("/products/show")
    console.log(response.status)
    expect(response.status).toBe(200)
  })

  it("gets the products index endpoint", async () => {
    const response = await request.get("/products")
    console.log(response.status)
    expect(response.status).toBe(200)
  })

  it("gets the rankCat endpoint", async () => {
    const response = await request.get("/ranks/rank-cat")
    console.log(response.status)
    expect(response.status).toBe(200)
  })
})
