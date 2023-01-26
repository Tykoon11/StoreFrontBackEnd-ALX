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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../../models/orders");
const index_1 = __importDefault(require("../../index"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(index_1.default);
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
    it("show method should return the correct order", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(1);
        expect(result).toEqual({
            id: 1,
            user_id: 1,
            status: "complete",
        });
    }));
    it("completeOrder method should return list of complete orders", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.completeOrder(1);
        expect(result).toEqual([
            {
                id: 1,
                user_id: 1,
                status: "complete",
            },
        ]);
    }));
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
});
describe("Test endpoint response", () => {
    it("posts the create orders endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post("/orders/create");
        console.log(response.status);
        expect(response.status).toBe(200);
    }));
    it("gets the show orders endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/orders/show");
        console.log(response.status);
        expect(response.status).toBe(200);
    }));
    it("gets the completeOrders endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/orders/complete");
        console.log(response.status);
        expect(response.status).toBe(200);
    }));
});
