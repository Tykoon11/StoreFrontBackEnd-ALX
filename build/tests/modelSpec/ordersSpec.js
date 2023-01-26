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
const store = new orders_1.OrderStore();
describe("Order Model", () => {
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
            user_id: 1,
            status: "complete",
        });
        expect({
            user_id: result.user_id,
            status: result.status,
        }).toEqual({
            user_id: 1,
            status: "complete",
        });
    }));
});
