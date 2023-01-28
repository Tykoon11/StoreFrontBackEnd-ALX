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
    expect([
      {
        name: result[0].name,
        price: result[0].price,
        category: result[0].category,
      },
    ]).toEqual([
      {
        name: "iPhone 12",
        price: Number(`${300}`),
        category: "electronics",
      },
    ])
  })

  it("show method should return the correct product", async () => {
    const result = await store.show(1)
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

  it("rankCat method should return list od products in same category", async () => {
    const result = await store.rankCat("electronics")
    expect([
      {
        name: result[0].name,
        price: result[0].price,
        category: result[0].category,
      },
    ]).toEqual([
      {
        name: "iPhone 12",
        price: 300,
        category: "electronics",
      },
    ])
  })
})
