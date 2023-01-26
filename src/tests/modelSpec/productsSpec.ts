import { ProductsStore } from "../../models/products"

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
})
