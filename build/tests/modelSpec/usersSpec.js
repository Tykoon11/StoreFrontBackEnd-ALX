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
const users_1 = require("../../models/users");
const store = new users_1.UsersStore();
describe("Users Model", () => {
    it("should have a create method", () => {
        expect(store.create).toBeDefined();
    });
    it("should have an index method", () => {
        expect(store.index).toBeDefined();
    });
    it("should have a show method", () => {
        expect(store.show).toBeDefined();
    });
    it("create method should create a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            firstname: "Nobleman",
            lastname: "Unachukwu",
            password: "hello",
        });
        expect({
            firstname: result.firstname,
            lastname: result.lastname,
        }).toEqual({
            firstname: "Nobleman",
            lastname: "Unachukwu",
        });
        console.log(result);
    }));
    it("index method should return a list of users", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        expect(result).toEqual([
            {
                id: 1,
                firstname: "Nobleman",
                lastname: "Unachukwu",
                password: "password",
            },
        ]);
    }));
    it("show method should return the correct user", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(1);
        expect(result).toEqual({
            id: 1,
            firstname: "Nobleman",
            lastname: "Unachukwu",
            password: "password",
        });
    }));
});
