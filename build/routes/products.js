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
const products_1 = require("../models/products");
const verifyToken_1 = __importDefault(require("../handlers/verifyToken"));
const products = express_1.default.Router();
products.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield new products_1.ProductsStore();
    try {
        const result = yield product.index();
        res.send(result);
    }
    catch (err) {
        res.send(`unable to get index ${err}`);
    }
}));
products.get("/show", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield new products_1.ProductsStore();
    const id = req.body.id;
    try {
        const result = yield product.show(id);
        res.send(result);
    }
    catch (err) {
        res.send(`unable to get product ${err}`);
    }
}));
products.post("/create", verifyToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield new products_1.ProductsStore();
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const create = {
        name: name,
        price: price,
        category: category,
    };
    try {
        const result = yield product.create(create);
        res.send(result);
    }
    catch (err) {
        res.send(`unable to create product ${err}`);
    }
}));
products.get("/rank-cat", verifyToken_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield new products_1.ProductsStore();
    const category = req.body.category;
    try {
        const result = yield product.rankCat(category);
        res.send(result);
    }
    catch (err) {
        res.send(`unable to get product ${err}`);
    }
}));
exports.default = products;
