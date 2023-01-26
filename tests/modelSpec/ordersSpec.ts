import { OrderStore } from "../../src/models/orders"

const store = new OrderStore()

describe("Order Model", () => {
  it("create method should create an order", async () => {
    const result = await store.create({
      productId: 1,
      quantity: 29,
      userId: 1,
      status: "complete",
    })
    expect(result).toEqual({
      id: 1,
      productId: 1,
      quantity: 4,
      userId: 1,
      status: "complete",
    })
  })

  //   it("show method should return a product order", async () => {
  //     const userId = 12
  //     const result = await store.show(userId)
  //     expect(result).toEqual({
  //       id: 12,
  //       productId: 1,
  //       quantity: 29,
  //       userId: userId,
  //       status: "complete",
  //     })
  //   })
})