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
const express_1 = __importDefault(require("express"));
const orders_1 = require("../models/orders");
const verifyToken_1 = __importDefault(require("../handlers/verifyToken"));
const orders = express_1.default.Router();
orders.get("/show", verifyToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield new orders_1.OrderStore();
    const userId = req.body.userId;
    try {
        const result = yield order.show(userId);
        res.send(result);
    }
    catch (err) {
        res.send(`unable to show this order ${err}`);
    }
}));
orders.get("/complete", verifyToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield new orders_1.OrderStore();
    const userId = req.body.userId;
    try {
        const result = yield order.completeOrder(userId);
        res.send(result);
    }
    catch (err) {
        res.send(`unable to show orders ${err}`);
    }
}));
orders.post("/create", verifyToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield new orders_1.OrderStore();
    const userId = req.body.userId;
    const status = req.body.status;
    const create = {
        user_id: userId,
        status: status,
    };
    try {
        const result = yield order.create(create);
        console.log(result);
        res.send(result);
    }
    catch (err) {
        res.send(`unable to create order ${err}`);
    }
}));
exports.default = orders;
