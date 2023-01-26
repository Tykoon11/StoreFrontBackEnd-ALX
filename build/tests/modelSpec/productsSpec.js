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
const products_1 = require("../../models/products");
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
