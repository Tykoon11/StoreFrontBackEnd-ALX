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
const index_1 = __importDefault(require("../../index"));
const supertest_1 = __importDefault(require("supertest"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const request = (0, supertest_1.default)(index_1.default);
describe("Test endpoint response", () => {
    it("posts the create orders endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = jsonwebtoken_1.default.sign({ create: {} }, process.env.TOKEN_SECRET);
        const response = yield request
            .post("/orders/create")
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("gets the show orders endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = jsonwebtoken_1.default.sign({ create: {} }, process.env.TOKEN_SECRET);
        const response = yield request
            .get("/orders/show")
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("gets the completeOrders endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = jsonwebtoken_1.default.sign({ create: {} }, process.env.TOKEN_SECRET);
        const response = yield request
            .get("/orders/complete")
            .set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
});
