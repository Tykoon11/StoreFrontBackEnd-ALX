import { OrderStore } from "../../models/orders"

const store = new OrderStore()

describe("Order Model", () => {
  it("should have a create method", () => {
    expect(store.create).toBeDefined()
  })

  it("should have a show method", () => {
    expect(store.show).toBeDefined()
  })

  it("should have a completeOrder method", () => {
    expect(store.completeOrder).toBeDefined()
  })

  it("should have an addProduct method", () => {
    expect(store.addProduct).toBeDefined()
  })

  it("create method should create an order", async () => {
    const result = await store.create({
      user_id: 1,
      status: "complete",
    })
    expect({
      user_id: result.user_id,
      status: result.status,
    }).toEqual({
      user_id: 1,
      status: "complete",
    })
  })

  it("show method should return the correct order", async () => {
    const result = await store.show(1)
    expect({ user_id: result.user_id, status: result.status }).toEqual({
      user_id: 1,
      status: "complete",
    })
  })

  it("completeOrder method should return list of complete orders", async () => {
    const result = await store.completeOrder(1)
    expect([
      {
        user_id: result[0].user_id,
        status: result[0].status,
      },
    ]).toEqual([
      {
        user_id: 1,
        status: "complete",
      },
    ])
  })
})
