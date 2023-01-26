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
      lastname: "prince",
      password: "hello",
    })
    expect({
      firstname: result.firstname,
      lastname: result.lastname,
    }).toEqual({
      firstname: "Nobleman",
      lastname: "prince",
    })
  })

  it("index method should return a list of users", async () => {
    const result = await store.index()
    expect([
      {
        firstname: result[0].firstname,
        lastname: result[0].lastname,
      },
    ]).toEqual([
      {
        firstname: "Nobleman",
        lastname: "prince",
      },
    ])
  })

  it("show method should return the correct user", async () => {
    const result = await store.show(1)
    expect({
      firstname: result.firstname,
      lastname: result.lastname,
    }).toEqual({
      firstname: "Nobleman",
      lastname: "prince",
    })
  })
})
