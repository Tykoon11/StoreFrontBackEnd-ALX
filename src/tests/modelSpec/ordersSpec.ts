import { OrderStore } from "../../models/orders"
import app from "../../index"
import supertest from "supertest"

const request = supertest(app)

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
    expect(result).toEqual({
      id: 1,
      user_id: 1,
      status: "complete",
    })
  })

  it("completeOrder method should return list of complete orders", async () => {
    const result = await store.completeOrder(1)
    expect(result).toEqual([
      {
        id: 1,
        user_id: 1,
        status: "complete",
      },
    ])
  })

  // it("addProduct method should return updated order", async () => {
  //   const result = await store.addProduct(
  //     quantity,
  //     order_id,
  //     product_id
  //   )
  //   expect(result).toEqual([
  //     {
  //       quantity: 3,
  //       order_id: 1,
  //       product_id: 1,
  //     },
  //   ])
  // })
})

describe("Test endpoint response", () => {
  it("posts the create orders endpoint", async () => {
    const response = await request.post("/orders/create")
    console.log(response.status)
    expect(response.status).toBe(200)
  })

  it("gets the show orders endpoint", async () => {
    const response = await request.get("/orders/show")
    console.log(response.status)
    expect(response.status).toBe(200)
  })

  it("gets the completeOrders endpoint", async () => {
    const response = await request.get("/orders/complete")
    console.log(response.status)
    expect(response.status).toBe(200)
  })
})
