import { UsersStore } from "../../models/users"

const store = new UsersStore()

describe("Users Model", () => {
  it("should have a create method", () => {
    expect(store.create).toBeDefined()
  })

  it("should have an index method", () => {
    expect(store.index).toBeDefined()
  })

  it("should have a show method", () => {
    expect(store.show).toBeDefined()
  })

  it("create method should create a user", async () => {
    const result = await store.create({
      firstname: "Nobleman",
      lastname: "Unachukwu",
      password: "hello",
    })
    expect({
      firstname: result.firstname,
      lastname: result.lastname,
    }).toEqual({
      firstname: "Nobleman",
      lastname: "Unachukwu",
    })
  })
})
