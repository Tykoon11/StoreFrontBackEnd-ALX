"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../../models/orders");
const users_1 = require("../../models/users");
const store = new orders_1.OrderStore();
const usersStore = new users_1.UsersStore();
let user;
describe("Order Model", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        user = yield usersStore.create({
            firstname: "Nobleman",
            lastname: "prince",
            password: "hello",
        });
    }));
    it("should have a create method", () => {
        expect(store.create).toBeDefined();
    });
    it("should have a show method", () => {
        expect(store.show).toBeDefined();
    });
    it("should have a completeOrder method", () => {
        expect(store.completeOrder).toBeDefined();
    });
    it("should have an addProduct method", () => {
        expect(store.addProduct).toBeDefined();
    });
    it("create method should create an order", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            user_id: user.id,
            status: "complete",
        });
        expect({
            user_id: result.user_id,
            status: result.status,
        }).toEqual({
            user_id: user.id,
            status: "complete",
        });
    }));
    it("show method should return the correct order", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(user.id);
        expect({ user_id: result.user_id, status: result.status }).toEqual({
            user_id: user.id,
            status: "complete",
        });
    }));
    it("completeOrder method should return list of complete orders", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.completeOrder(user.id);
        expect([
            {
                user_id: result[0].user_id,
                status: result[0].status,
            },
        ]).toEqual([
            {
                user_id: user.id,
                status: "complete",
            },
        ]);
    }));
});
