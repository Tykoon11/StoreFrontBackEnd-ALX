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
const products_1 = require("../../models/products");
const index_1 = __importDefault(require("../../index"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(index_1.default);
const store = new products_1.ProductsStore();
describe("Products Model", () => {
    it("should have a create method", () => {
        expect(store.create).toBeDefined();
    });
    it("should have an index method", () => {
        expect(store.index).toBeDefined();
    });
    it("should have a show method", () => {
        expect(store.show).toBeDefined();
    });
    it("should have a rankCat method", () => {
        expect(store.rankCat).toBeDefined();
    });
    it("create method should create a product", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            name: "iPhone 12",
            price: parseInt("300"),
            category: "electronics",
        });
        expect({
            name: result.name,
            price: result.price,
            category: result.category,
        }).toEqual({
            name: "iPhone 12",
            price: 300,
            category: "electronics",
        });
    }));
    it("index method should return a list of products", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        expect(result).toEqual([
            {
                id: 1,
                name: "iPhone 12",
                price: 300,
                category: "electronics",
            },
        ]);
    }));
    it("show method should return the correct product", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(1);
        expect(result).toEqual({
            id: 1,
            name: "iPhone 12",
            price: 300,
            category: "electronics",
        });
    }));
    it("rankCat method should return list od products in same category", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.rankCat("electronics");
        expect(result).toEqual([
            {
                id: 1,
                name: "iPhone 12",
                price: 300,
                category: "electronics",
            },
        ]);
    }));
});
describe("Test endpoint response", () => {
    it("posts the create products endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post("/products/create");
        console.log(response.status);
        expect(response.status).toBe(200);
    }));
    it("gets the show products endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/products/show");
        console.log(response.status);
        expect(response.status).toBe(200);
    }));
    it("gets the products index endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/products");
        console.log(response.status);
        expect(response.status).toBe(200);
    }));
    it("gets the rankCat endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/ranks/rank-cat");
        console.log(response.status);
        expect(response.status).toBe(200);
    }));
});
