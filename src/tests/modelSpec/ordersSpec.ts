import { OrderStore } from "../../models/orders"
import { UsersStore, User } from "../../models/users"

const store = new OrderStore()
const usersStore = new UsersStore()
let user: User

describe("Order Model", () => {
  beforeAll(async () => {
    user = await usersStore.create({
      firstname: "Nobleman",
      lastname: "prince",
      password: "hello",
    })
  })
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
      user_id: user.id as number,
      status: "complete",
    })
    expect({
      user_id: result.user_id,
      status: result.status,
    }).toEqual({
      user_id: user.id as number,
      status: "complete",
    })
  })

  it("show method should return the correct order", async () => {
    const result = await store.show(user.id as number)
    expect({ user_id: result.user_id, status: result.status }).toEqual({
      user_id: user.id as number,
      status: "complete",
    })
  })

  it("completeOrder method should return list of complete orders", async () => {
    const result = await store.completeOrder(user.id as number)
    expect([
      {
        user_id: result[0].user_id,
        status: result[0].status,
      },
    ]).toEqual([
      {
        user_id: user.id as number,
        status: "complete",
      },
    ])
  })
})
